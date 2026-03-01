// SocialBook – client-side form handling

document.addEventListener('DOMContentLoaded', function () {
  // ── Login form ──────────────────────────────────────────
  var loginForm = document.getElementById('loginForm');
  if (loginForm) {
    loginForm.addEventListener('submit', function (e) {
      e.preventDefault();
      var email = document.getElementById('email').value.trim();
      var password = document.getElementById('password').value;

      if (!email || !password) {
        showFormError(loginForm, 'Please fill in all fields.');
        return;
      }

      // TODO: connect to Express/Node.js back-end API
      showFormSuccess(loginForm, 'Logged in successfully! (demo)');
    });
  }

  // ── Register form ────────────────────────────────────────
  var registerForm = document.getElementById('registerForm');
  if (registerForm) {
    registerForm.addEventListener('submit', function (e) {
      e.preventDefault();
      var firstName = document.getElementById('firstName').value.trim();
      var lastName = document.getElementById('lastName').value.trim();
      var email = document.getElementById('email').value.trim();
      var password = document.getElementById('password').value;

      if (!firstName || !lastName || !email || !password) {
        showFormError(registerForm, 'Please fill in all required fields.');
        return;
      }

      if (password.length < 8) {
        showFormError(registerForm, 'Password must be at least 8 characters.');
        return;
      }

      // TODO: connect to Express/Node.js back-end API
      showFormSuccess(registerForm, 'Account created successfully! (demo)');
    });
  }

  // ── Helpers ──────────────────────────────────────────────
  function showFormError(form, msg) {
    removeMessages(form);
    var el = document.createElement('p');
    el.className = 'error-msg visible';
    el.textContent = msg;
    form.prepend(el);
  }

  function showFormSuccess(form, msg) {
    removeMessages(form);
    var el = document.createElement('p');
    el.className = 'success-msg visible';
    el.textContent = msg;
    form.prepend(el);
  }

  function removeMessages(form) {
    var old = form.querySelectorAll('.error-msg, .success-msg');
    old.forEach(function (el) { el.remove(); });
  }
});
