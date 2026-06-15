// =============================================
// SORVETES PAKILA — script.js
// =============================================

// ---------- MENU HAMBÚRGUER (mobile) ----------
const hamburger = document.getElementById('hamburger');
const mobileNav = document.getElementById('mobileNav');

hamburger.addEventListener('click', () => {
  const estaAberto = mobileNav.classList.contains('aberto');

  if (estaAberto) {
    mobileNav.classList.remove('aberto');
    hamburger.classList.remove('ativo');
    hamburger.setAttribute('aria-expanded', 'false');
    mobileNav.setAttribute('aria-hidden', 'true');
  } else {
    mobileNav.classList.add('aberto');
    hamburger.classList.add('ativo');
    hamburger.setAttribute('aria-expanded', 'true');
    mobileNav.setAttribute('aria-hidden', 'false');
  }
});

// Fecha o menu ao clicar em um link mobile
const mobileLinks = document.querySelectorAll('.mobile-link');
mobileLinks.forEach(link => {
  link.addEventListener('click', () => {
    mobileNav.classList.remove('aberto');
    hamburger.classList.remove('ativo');
    hamburger.setAttribute('aria-expanded', 'false');
    mobileNav.setAttribute('aria-hidden', 'true');
  });
});

// ---------- HEADER COM SOMBRA NO SCROLL ----------
const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
  if (window.scrollY > 10) {
    header.style.boxShadow = '0 4px 20px rgba(0,0,0,0.3)';
  } else {
    header.style.boxShadow = '0 2px 12px rgba(0,0,0,0.2)';
  }
});

// ---------- ANIMAÇÃO DE ENTRADA DOS CARDS ----------
// Usa IntersectionObserver para animar os cards ao entrar na tela
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        observer.unobserve(entry.target); // anima só uma vez
      }
    });
  },
  { threshold: 0.15 }
);

// Aplica a animação nos cards e na seção "sobre"
const animados = document.querySelectorAll('.card, .sobre__inner, .contato__info');
animados.forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(24px)';
  el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  observer.observe(el);
});

// ---------- ANO DINÂMICO NO RODAPÉ ----------
// (Opcional) Se quiser trocar o © 2025 pelo ano atual automaticamente:
// const anoEl = document.querySelector('.footer__copy');
// if (anoEl) {
//   anoEl.textContent = anoEl.textContent.replace('2025', new Date().getFullYear());
// }