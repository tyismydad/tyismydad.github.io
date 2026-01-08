const buttons = document.querySelectorAll('.nav-btn');
const sections = document.querySelectorAll('section');

function showSection(id) {
  sections.forEach(section => {
    section.classList.remove('active');
  });

  const target = document.querySelector(id);
  if (target) {
    target.classList.add('active');
  }
}

buttons.forEach(button => {
  button.addEventListener('click', e => {
    e.preventDefault();
    const id = button.getAttribute('href');
    history.pushState(null, '', id);
    showSection(id);
  });
});

// Load correct section on refresh
if (window.location.hash) {
  showSection(window.location.hash);
}
