// Email/Phone toggle (login, forgot password) and show/hide password
document.querySelectorAll('.seg button').forEach(b => b.onclick = () => {
  document.querySelectorAll('.seg button').forEach(x => x.setAttribute('aria-selected', x === b));
  document.querySelectorAll('.field[data-for]').forEach(f => f.hidden = f.dataset.for !== b.dataset.mode);
});
document.querySelectorAll('.reveal').forEach(b => b.onclick = () => {
  const i = b.previousElementSibling, show = i.type === 'password';
  i.type = show ? 'text' : 'password';
  b.textContent = show ? 'Hide' : 'Show';
  b.setAttribute('aria-label', show ? 'Hide password' : 'Show password');
});
