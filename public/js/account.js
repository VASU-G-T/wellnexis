/* ═══════════════════════════════════════════════════════════════
   🏪 ACCOUNT MODULE — Shop Owner Auth & Profile
   ─────────────────────────────────────────────────────────────
   Email/Password sign-in, sign-up, forgot password.
   Profile stored in Firestore → shopOwners/{uid}
   Only shop owners use this tab. Regular users never see it.
═══════════════════════════════════════════════════════════════ */

/* ── State ── */
let acctCurrentUser = null;
let acctShopData    = null;
let acctEditOpen    = false;
let acctPassOpen    = false;

/* ── Shorthand DOM helper ── */
function acctEl(id) { return document.getElementById(id); }

/* ══════════════════════════════════════════════════
   INIT — wire up on DOMContentLoaded
══════════════════════════════════════════════════ */
document.addEventListener('DOMContentLoaded', () => {

  /* Password strength meter */
  const passInput = acctEl('su-pass');
  if (passInput) passInput.addEventListener('input', acctCheckPassStrength);

  /* Firebase auth state listener */
  if (typeof fbReady !== 'undefined' && fbReady && auth) {
    auth.onAuthStateChanged(async (user) => {
      acctCurrentUser = user;
      if (user) {
        await acctLoadProfile(user);
        /* Only update UI if the account panel elements are present */
        if (acctEl('acct-auth-panel')) acctShowProfile();
      } else {
        acctShopData = null;
        if (acctEl('acct-auth-panel')) acctShowAuthPanel();
      }
    });
  }
});

/* ══════════════════════════════════════════════════
   PANEL SWITCHING
══════════════════════════════════════════════════ */
function acctShowAuthPanel() {
  acctEl('acct-auth-panel').classList.remove('acct-hidden');
  acctEl('acct-profile-panel').classList.add('acct-hidden');
  /* Reset form state */
  acctShowTab('signin');
}

function acctShowProfile() {
  acctEl('acct-auth-panel').classList.add('acct-hidden');
  acctEl('acct-profile-panel').classList.remove('acct-hidden');
  acctPopulateProfileView();
}

/* ── Sign-in / Sign-up tab toggle ── */
function acctShowTab(tab) {
  const isSignin = tab === 'signin';
  acctEl('tab-signin').classList.toggle('active',  isSignin);
  acctEl('tab-signup').classList.toggle('active', !isSignin);
  acctEl('acct-signin-form').classList.toggle('acct-hidden', !isSignin);
  acctEl('acct-signup-form').classList.toggle('acct-hidden',  isSignin);
  acctHideBanners();
}

/* ══════════════════════════════════════════════════
   BANNERS (error / success)
══════════════════════════════════════════════════ */
function acctHideBanners() {
  acctEl('acct-err-banner')?.classList.add('acct-hidden');
  acctEl('acct-ok-banner')?.classList.add('acct-hidden');
}

function acctShowErr(msg, scope) {
  if (scope === 'profile') {
    const el = acctEl('acct-profile-err');
    const msgEl = acctEl('acct-profile-err-msg');
    if (el && msgEl) { msgEl.textContent = msg; el.classList.remove('acct-hidden'); }
    acctEl('acct-profile-ok')?.classList.add('acct-hidden');
  } else {
    const el = acctEl('acct-err-banner');
    const msgEl = acctEl('acct-err-msg');
    if (el && msgEl) { msgEl.textContent = msg; el.classList.remove('acct-hidden'); }
    acctEl('acct-ok-banner')?.classList.add('acct-hidden');
  }
}

function acctShowOk(msg, scope) {
  if (scope === 'profile') {
    acctEl('acct-profile-ok')?.classList.remove('acct-hidden');
    acctEl('acct-profile-err')?.classList.add('acct-hidden');
  } else {
    const el = acctEl('acct-ok-banner');
    const msgEl = acctEl('acct-ok-msg');
    if (el && msgEl) { msgEl.textContent = msg; el.classList.remove('acct-hidden'); }
    acctEl('acct-err-banner')?.classList.add('acct-hidden');
  }
}

/* ══════════════════════════════════════════════════
   SIGN IN
══════════════════════════════════════════════════ */
async function acctSignIn() {
  if (typeof fbReady === 'undefined' || !fbReady) {
    acctShowErr('Firebase not connected. Check your config.'); return;
  }
  const email = acctEl('si-email').value.trim();
  const pass  = acctEl('si-pass').value;
  if (!email || !pass) { acctShowErr('Please enter your email and password.'); return; }

  const btn = acctEl('si-btn');
  btn.disabled = true;
  btn.innerHTML = '⏳ Signing in…';

  try {
    await auth.signInWithEmailAndPassword(email, pass);
    /* onAuthStateChanged will fire and call acctShowProfile() */
    acctHideBanners();
    /* Reset button (profile panel will hide this anyway) */
    btn.disabled = false;
    btn.innerHTML = '<span class="acct-btn-icon">🔑</span> Sign In';
  } catch (e) {
    btn.disabled = false;
    btn.innerHTML = '<span class="acct-btn-icon">🔑</span> Sign In';
    acctShowErr(acctFirebaseErrMsg(e.code));
  }
}

/* ══════════════════════════════════════════════════
   SIGN UP
══════════════════════════════════════════════════ */
async function acctSignUp() {
  if (typeof fbReady === 'undefined' || !fbReady) {
    acctShowErr('Firebase not connected. Check your config.'); return;
  }

  const shopname = acctEl('su-shopname').value.trim();
  const owner    = acctEl('su-owner').value.trim();
  const phone    = acctEl('su-phone').value.trim();
  const email    = acctEl('su-email').value.trim();
  const pass     = acctEl('su-pass').value;

  if (!shopname || !owner || !email || !pass) {
    acctShowErr('Please fill in all required fields.'); return;
  }
  if (phone && !/^\d{10}$/.test(phone)) {
    acctShowErr('Phone must be exactly 10 digits.'); return;
  }
  if (pass.length < 6) {
    acctShowErr('Password must be at least 6 characters.'); return;
  }

  const btn = acctEl('su-btn');
  btn.disabled = true;
  btn.innerHTML = '⏳ Creating account…';

  try {
    const cred = await auth.createUserWithEmailAndPassword(email, pass);
    const uid  = cred.user.uid;

    await cred.user.updateProfile({ displayName: shopname });

    const ownerDoc = {
      uid, shopName: shopname, ownerName: owner,
      phone: phone || '', email,
      type: '', district: '', village: '',
      address: '', hours: '', description: '',
      status: 'pending',
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      updatedAt: firebase.firestore.FieldValue.serverTimestamp(),
    };

    if (db) await db.collection('shopOwners').doc(uid).set(ownerDoc);

    acctHideBanners();
    btn.disabled = false;
    btn.innerHTML = '<span class="acct-btn-icon">✨</span> Create Account';
    /* onAuthStateChanged fires → acctShowProfile() */
  } catch (e) {
    btn.disabled = false;
    btn.innerHTML = '<span class="acct-btn-icon">✨</span> Create Account';
    acctShowErr(acctFirebaseErrMsg(e.code));
  }
}

/* ══════════════════════════════════════════════════
   SIGN OUT
══════════════════════════════════════════════════ */
async function acctSignOut() {
  if (!auth) return;
  try {
    await auth.signOut();
    acctEditOpen = false;
    acctPassOpen = false;
    /* onAuthStateChanged fires → acctShowAuthPanel() */
  } catch(e) {
    console.error('acctSignOut error:', e);
  }
}

function acctConfirmSignOut() {
  if (confirm('Sign out of your shop owner account?')) acctSignOut();
}

/* ══════════════════════════════════════════════════
   FORGOT PASSWORD
══════════════════════════════════════════════════ */
async function acctForgotPassword() {
  if (!auth) return;
  const email = acctEl('si-email').value.trim();
  if (!email) {
    acctShowErr('Type your email address above, then tap "Forgot password?".');
    return;
  }
  try {
    await auth.sendPasswordResetEmail(email);
    acctShowOk('Reset link sent! Check your inbox.');
  } catch(e) {
    acctShowErr(acctFirebaseErrMsg(e.code));
  }
}

/* ══════════════════════════════════════════════════
   LOAD PROFILE FROM FIRESTORE
══════════════════════════════════════════════════ */
async function acctLoadProfile(user) {
  acctShopData = null;
  if (!db) return;
  try {
    const snap = await db.collection('shopOwners').doc(user.uid).get();
    if (snap.exists) {
      acctShopData = { id: snap.id, ...snap.data() };
    } else {
      /* Fallback: minimal local object so view still renders */
      acctShopData = {
        uid: user.uid,
        shopName:    user.displayName || '',
        ownerName:   user.displayName || '',
        email:       user.email || '',
        phone: '', type: '', district: '', village: '',
        address: '', hours: '', description: '',
        status: 'pending', createdAt: null,
      };
    }
  } catch(e) {
    console.error('acctLoadProfile:', e);
  }
}

/* ══════════════════════════════════════════════════
   POPULATE PROFILE VIEW MODE
══════════════════════════════════════════════════ */
function acctPopulateProfileView() {
  if (!acctCurrentUser) return;
  const d    = acctShopData || {};
  const user = acctCurrentUser;

  /* Hero */
  const name = d.shopName || user.displayName || 'Shop';
  acctEl('acct-profile-name').textContent  = name;
  acctEl('acct-profile-email').textContent = user.email || '';

  /* Avatar: show first letter of owner name */
  const initial = (d.ownerName || d.shopName || 'S').charAt(0).toUpperCase();
  acctEl('acct-avatar-display').textContent = initial;

  /* Stats */
  let joinedStr = '—';
  if (d.createdAt?.toDate) {
    joinedStr = d.createdAt.toDate().toLocaleDateString('en-IN', { month: 'short', year: 'numeric' });
  } else if (user.metadata?.creationTime) {
    joinedStr = new Date(user.metadata.creationTime)
      .toLocaleDateString('en-IN', { month: 'short', year: 'numeric' });
  }
  acctEl('acct-stat-joined').textContent   = joinedStr;
  acctEl('acct-stat-status').textContent   = acctCapitalize(d.status || 'Pending');
  acctEl('acct-stat-district').textContent = d.district || '—';

  /* Detail rows */
  acctEl('view-shopname').textContent = d.shopName    || '—';
  acctEl('view-owner').textContent    = d.ownerName   || '—';
  acctEl('view-phone').textContent    = d.phone       || '—';
  acctEl('view-email').textContent    = user.email    || '—';
  acctEl('view-type').textContent     = d.type        || '—';
  acctEl('view-hours').textContent    = d.hours       || '—';
  acctEl('view-desc').textContent     = d.description || '—';

  const loc = [d.village, d.district].filter(Boolean).join(', ');
  acctEl('view-location').textContent = loc      || '—';
  acctEl('view-address').textContent  = d.address || '—';

  /* Switch to view mode, hide edit mode */
  acctEl('acct-view-mode').classList.remove('acct-hidden');
  acctEl('acct-edit-mode').classList.add('acct-hidden');
  acctEl('acct-edit-btn').textContent = '✏️ Edit';
  acctEditOpen = false;

  /* Clear profile banners */
  acctEl('acct-profile-err')?.classList.add('acct-hidden');
  acctEl('acct-profile-ok')?.classList.add('acct-hidden');
}

/* ══════════════════════════════════════════════════
   EDIT MODE
══════════════════════════════════════════════════ */
function acctToggleEdit() {
  acctEditOpen = !acctEditOpen;
  if (acctEditOpen) {
    acctPopulateEditForm();
    acctEl('acct-view-mode').classList.add('acct-hidden');
    acctEl('acct-edit-mode').classList.remove('acct-hidden');
    acctEl('acct-edit-btn').textContent = '✖ Cancel';
  } else {
    acctCancelEdit();
  }
}

function acctCancelEdit() {
  acctEditOpen = false;
  acctEl('acct-edit-mode').classList.add('acct-hidden');
  acctEl('acct-view-mode').classList.remove('acct-hidden');
  acctEl('acct-edit-btn').textContent = '✏️ Edit';
  acctEl('acct-profile-err')?.classList.add('acct-hidden');
  acctEl('acct-profile-ok')?.classList.add('acct-hidden');
  if (acctPassOpen) acctTogglePassSection();
}

function acctPopulateEditForm() {
  const d = acctShopData || {};
  acctEl('ed-shopname').value = d.shopName    || '';
  acctEl('ed-owner').value    = d.ownerName   || '';
  acctEl('ed-phone').value    = d.phone       || '';
  acctEl('ed-type').value     = d.type        || '';
  acctEl('ed-district').value = d.district    || '';
  acctEl('ed-village').value  = d.village     || '';
  acctEl('ed-address').value  = d.address     || '';
  acctEl('ed-hours').value    = d.hours       || '';
  acctEl('ed-desc').value     = d.description || '';
  acctEl('ed-newpass').value  = '';
  acctEl('ed-confirmpass').value = '';
}

/* ══════════════════════════════════════════════════
   SAVE PROFILE
══════════════════════════════════════════════════ */
async function acctSaveProfile() {
  if (!acctCurrentUser || !db) {
    acctShowErr('Not connected. Please reload.', 'profile'); return;
  }

  const phone    = acctEl('ed-phone').value.trim();
  const newPass  = acctEl('ed-newpass').value;
  const confPass = acctEl('ed-confirmpass').value;

  if (phone && !/^\d{10}$/.test(phone)) {
    acctShowErr('Phone must be exactly 10 digits.', 'profile'); return;
  }
  if (newPass || confPass) {
    if (newPass.length < 6) {
      acctShowErr('New password must be at least 6 characters.', 'profile'); return;
    }
    if (newPass !== confPass) {
      acctShowErr('Passwords do not match.', 'profile'); return;
    }
  }

  const btn = acctEl('acct-save-btn');
  btn.disabled = true;
  btn.innerHTML = '⏳ Saving…';

  try {
    const updates = {
      shopName:    acctEl('ed-shopname').value.trim(),
      ownerName:   acctEl('ed-owner').value.trim(),
      phone,
      type:        acctEl('ed-type').value,
      district:    acctEl('ed-district').value.trim(),
      village:     acctEl('ed-village').value.trim(),
      address:     acctEl('ed-address').value.trim(),
      hours:       acctEl('ed-hours').value.trim(),
      description: acctEl('ed-desc').value.trim(),
      updatedAt:   firebase.firestore.FieldValue.serverTimestamp(),
    };

    await db.collection('shopOwners').doc(acctCurrentUser.uid).set(updates, { merge: true });
    await acctCurrentUser.updateProfile({ displayName: updates.shopName });
    if (newPass) await acctCurrentUser.updatePassword(newPass);

    acctShopData = { ...(acctShopData || {}), ...updates };

    btn.disabled = false;
    btn.innerHTML = '💾 Save Changes';

    acctShowOk('Profile updated!', 'profile');
    acctPopulateProfileView();
    setTimeout(() => acctCancelEdit(), 1400);

  } catch(e) {
    btn.disabled = false;
    btn.innerHTML = '💾 Save Changes';
    acctShowErr(acctFirebaseErrMsg(e.code) || 'Could not save. Please try again.', 'profile');
  }
}

/* ══════════════════════════════════════════════════
   VISIT PUBLIC SHOP PROFILE
══════════════════════════════════════════════════ */
function acctVisitPublicProfile(e) {
  e.preventDefault();
  if (!acctCurrentUser) return;
  /* Open the Shop Directory and search by this owner's shop name */
  if (typeof openShopDirectory === 'function') {
    openShopDirectory();
    setTimeout(() => {
      if (typeof switchSDTab === 'function') switchSDTab('browse');
      const searchEl = document.getElementById('sdSearch');
      if (searchEl && acctShopData?.shopName) {
        searchEl.value = acctShopData.shopName;
        searchEl.dispatchEvent(new Event('input'));
      }
    }, 400);
  }
}

/* ══════════════════════════════════════════════════
   PASSWORD SECTION COLLAPSE
══════════════════════════════════════════════════ */
function acctTogglePassSection() {
  acctPassOpen = !acctPassOpen;
  acctEl('acct-pass-section').classList.toggle('acct-hidden', !acctPassOpen);
  acctEl('acct-pass-arrow').textContent = acctPassOpen ? '▲' : '▼';
}

/* ══════════════════════════════════════════════════
   SHOW / HIDE PASSWORD
══════════════════════════════════════════════════ */
function acctTogglePass(inputId, btn) {
  const input = acctEl(inputId);
  if (!input) return;
  const show = input.type === 'password';
  input.type = show ? 'text' : 'password';
  btn.textContent = show ? '🙈' : '👁️';
}

/* ══════════════════════════════════════════════════
   PASSWORD STRENGTH METER
══════════════════════════════════════════════════ */
function acctCheckPassStrength() {
  const val  = acctEl('su-pass').value;
  const fill = acctEl('su-strength-fill');
  const lbl  = acctEl('su-strength-label');
  if (!fill || !lbl) return;

  let score = 0;
  if (val.length >= 6)              score++;
  if (val.length >= 10)             score++;
  if (/[A-Z]/.test(val))           score++;
  if (/[0-9]/.test(val))           score++;
  if (/[^A-Za-z0-9]/.test(val))   score++;

  const levels = [
    { w: '0%',   c: 'transparent',  t: '' },
    { w: '25%',  c: '#D4402A',      t: 'Weak' },
    { w: '50%',  c: '#F59E0B',      t: 'Fair' },
    { w: '75%',  c: '#1B4FCC',      t: 'Good' },
    { w: '100%', c: '#1D9B5E',      t: 'Strong ✓' },
  ];

  const s = levels[Math.min(score, 4)];
  fill.style.width      = val.length === 0 ? '0%' : s.w;
  fill.style.background = s.c;
  lbl.textContent       = val.length === 0 ? '' : s.t;
  lbl.style.color       = s.c;
}

/* ══════════════════════════════════════════════════
   HELPERS
══════════════════════════════════════════════════ */
function acctCapitalize(str) {
  return str ? str.charAt(0).toUpperCase() + str.slice(1) : '';
}

function acctFirebaseErrMsg(code) {
  const msgs = {
    'auth/invalid-email':          'Please enter a valid email address.',
    'auth/user-not-found':         'No account found with this email.',
    'auth/wrong-password':         'Incorrect password. Please try again.',
    'auth/invalid-credential':     'Incorrect email or password.',
    'auth/email-already-in-use':   'This email is already registered. Try signing in.',
    'auth/weak-password':          'Password is too weak — use at least 6 characters.',
    'auth/network-request-failed': 'Network error. Check your connection and try again.',
    'auth/too-many-requests':      'Too many attempts. Please wait a moment.',
    'auth/requires-recent-login':  'Sign out and sign in again to change your password.',
    'auth/operation-not-allowed':  'Email/password sign-in is not enabled. Contact support.',
    'auth/user-disabled':          'This account has been disabled. Contact support.',
  };
  return msgs[code] || 'Something went wrong. Please try again.';
}
