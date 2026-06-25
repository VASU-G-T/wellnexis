/* ── EmailJS Configuration ── */

const EMAILJS_PUBLIC_KEY   = '2fj9XYxi3bBqJfSYz';      // e.g. 'abc123XYZpublickey'
const EMAILJS_SERVICE_ID   = 'service_okanhtz';      // e.g. 'service_xxxxxxx'
const EMAILJS_TEMPLATE_ID  = 'template_2qrtkym';     // e.g. 'template_xxxxxxx'

// Init EmailJS with your public key
(function(){
  if(typeof emailjs !== 'undefined') {
    emailjs.init({ publicKey: EMAILJS_PUBLIC_KEY });
  }
})();
