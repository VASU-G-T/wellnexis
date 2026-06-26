/* ═══════════════════════════════════════════════════════════════
   🔥 FIREBASE CONFIGURATION
   ─────────────────────────────────────────────────────────────
   STEP 1: Go to https://console.firebase.google.com
   STEP 2: Create a project → Add web app → Copy config below
   STEP 3: Enable Authentication (Email/Password + Google)
   STEP 4: Create Firestore database (start in test mode)
   STEP 5: Deploy Firestore rules (see bottom of this script)
══════════════════════════════════════════════════════════════ */
const FIREBASE_CONFIG = {
  apiKey:            "AIzaSyCvVRn66W9Piusu-Hp9IHZtGizyd0bVcHI",
  authDomain:        "wellnexisai.firebaseapp.com",
  projectId:         "wellnexisai",
  storageBucket:     "wellnexisai.firebasestorage.app",
  messagingSenderId: "350214575273",
  appId:             "1:350214575273:web:606e169806c1b5a5d085b8"
};

/* ── Admin secret key — change this before deploying! ── */
const ADMIN_EMAIL    = "vasugt360@gmail.com";
const ADMIN_PASSWORD = "vasu$360";

/* ══════════════════════════════════════════════════════════
   FIREBASE INITIALIZATION (with graceful fallback to demo)
══════════════════════════════════════════════════════════ */
let db, auth, fbReady = false;
(function initFirebase() {
  try {
    if (typeof firebase === 'undefined') throw new Error('Firebase SDK not loaded');
    if (!firebase.apps.length) firebase.initializeApp(FIREBASE_CONFIG);
    db   = firebase.firestore();
    auth = firebase.auth();
    // Enable offline persistence for Firestore
    db.enablePersistence({ synchronizeTabs: true }).catch(() => {});
    fbReady = true;
    console.info('%c✅ Wellnexis: Firebase connected — live mode active.', 'color:green;font-weight:bold');
  } catch(e) {
    console.error('❌ Wellnexis: Firebase initialization failed —', e.message);
    fbReady = false;
  }
})();

/* ═══════════════════════════════════════════════════════════
   🗃️  DEMO SEED DATA (shown when Firebase not configured)
   Firestore collection structure mirrors this exactly.
══════════════════════════════════════════════════════════ */
const DEMO_SHOPS = []; // demo shops removed

const DEMO_REVIEWS = []; // demo reviews removed

/* ════════════════════════════════════════════════════════
   📊 STATE MANAGEMENT
════════════════════════════════════════════════════════ */
let sdCurrentUser   = null;     // Auth user
let sdCurrentTab    = 'browse'; // Active directory tab
let sdCurrentShopId = null;     // Detail view shop ID
let sdPrevTab       = 'browse'; // For back navigation
let sdSortMode      = 'latest'; // Sort mode
let sdAllShops      = [];       // Cached shops
let sdUserFavorites = [];       // Favorites (localStorage)
let sdAdminAuth     = false;    // Admin flag
let sdNearbyLat     = null;
let sdNearbyLng     = null;
let sdFilterTimeout = null;
let sdSelectedRating= 0;        // Review star pick
let sdAdminFilter   = 'all';    // Admin panel filter

// Load favorites from localStorage
try { sdUserFavorites = JSON.parse(localStorage.getItem('wd_favorites')||'[]'); } catch(e){}

