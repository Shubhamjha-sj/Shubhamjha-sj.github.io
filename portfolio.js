document.querySelector('#year').textContent = new Date().getFullYear();
const links = [...document.querySelectorAll('nav a')];
const observer = new IntersectionObserver(entries => {
  for (const entry of entries) {
    if (!entry.isIntersecting) continue;
    for (const link of links) {
      if (link.hash === `#${entry.target.id}`) link.setAttribute('aria-current', 'location');
      else link.removeAttribute('aria-current');
    }
  }
}, { rootMargin: '-10% 0px -55% 0px', threshold: 0 });
for (const section of document.querySelectorAll('#top, #work, #experience, #about, #contact')) observer.observe(section);
