/* ═══════════════════════════════════════════════════════════════
   PARTIAL LOADER — Synchronous HTML Include System
   Loads all HTML partials BEFORE DOMContentLoaded fires,
   so every JS module finds its DOM elements already in place.
   Uses same-origin synchronous XHR (works on Firebase Hosting).
═══════════════════════════════════════════════════════════════ */

(function () {
  /**
   * Load a partial HTML file synchronously and inject it
   * into the element with the given id.
   */
  function include(partialPath, targetId) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', partialPath, false);   // false = synchronous
    xhr.send(null);
    var el = document.getElementById(targetId);
    if (el && xhr.status === 200) {
      el.innerHTML = xhr.responseText;
    }
  }

  /* ── Load every partial in document order ── */
  include('partials/onboarding.html',        'partial-onboarding');
  include('partials/top-nav.html',            'partial-top-nav');
  include('partials/shop-register-modal.html','partial-shop-register-modal');
  include('partials/page-home.html',          'partial-page-home');
  include('partials/page-schemes.html',       'partial-page-schemes');
  include('partials/page-docs.html',          'partial-page-docs');
  include('partials/page-eligibility.html',   'partial-page-eligibility');
  include('partials/page-chat.html',          'partial-page-chat');
  include('partials/page-account.html',       'partial-page-account');
  include('partials/page-shops.html',         'partial-page-shops');
  include('partials/bottom-nav.html',         'partial-bottom-nav');
  include('partials/modal-toast.html',        'partial-modal-toast');
  include('partials/admin-login.html',        'partial-admin-login');
  include('partials/shop-directory.html',     'partial-shop-directory');
})();
