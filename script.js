// SATURN GOLD TYCOON — main site JS
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('newsletterForm');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const btn = form.querySelector('button');
      const original = btn.textContent;
      btn.textContent = 'Thanks — you\'re in!';
      btn.disabled = true;
      setTimeout(() => { btn.textContent = original; btn.disabled = false; form.reset(); }, 2500);
    });
  }
});
