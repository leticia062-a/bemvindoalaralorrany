// Rolagem suave ao clicar nos links do menu
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const destino = document.querySelector(this.getAttribute('href'));
    destino.scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Destaque de link de navegação conforme a seção visível
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('nav a');

window.addEventListener('scroll', () => {
  let current = '';

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    const sectionHeight = section.clientHeight;
    if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('ativo');
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('ativo');
    }
  });
});

// Estilo para o link ativo (você pode mover isso para o CSS)
const style = document.createElement('style');
style.innerHTML = `
  nav a.ativo {
    border-bottom: 2px solid white;
    color: #fff;
  }
`;
document.head.appendChild(style);

// Mensagem de boas-vindas no console
console.log("🌸 Bem-vinda ao site da Lara Lorrany Nails!");
