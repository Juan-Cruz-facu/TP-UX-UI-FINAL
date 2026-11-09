// Menú hamburguesa accesible
const btn = document.querySelector('.menu-btn');
const menu = document.getElementById('menu');

function setMenu(open) {
  menu.classList.toggle('open', open);
  btn.setAttribute('aria-expanded', String(open));
  btn.setAttribute('aria-label', open ? 'Cerrar menú' : 'Abrir menú');
}

btn.addEventListener('click', () => setMenu(btn.getAttribute('aria-expanded') !== 'true'));
menu.addEventListener('click', (e) => { if (e.target.closest('a')) setMenu(false); });
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && btn.getAttribute('aria-expanded') === 'true') {
    setMenu(false);
    btn.focus();
  }
});

// Caso de estudio en <dialog> (Escape lo cierra de forma nativa)
document.querySelectorAll('[data-open]').forEach((link) => {
  const dialog = document.getElementById(link.dataset.open);
  link.addEventListener('click', (e) => {
    e.preventDefault();
    dialog.showModal();
  });
  dialog.addEventListener('close', () => link.focus());
});

document.querySelectorAll('[data-close]').forEach((b) => {
  b.addEventListener('click', () => b.closest('dialog').close());
});
