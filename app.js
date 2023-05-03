function toggleVisibility(targetId) {
    const elements = ["Home", "About", "Skills", "Services", "Contact",];
    elements.forEach(elementId => {
      const element = document.getElementById(elementId);
      element.style.display = (elementId === targetId) ? "block" : "none";
    });
  }

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
    console.log(entry)
    if (entry.isIntersecting) {
        entry.target.classList.add('show');
    }else{
        entry.target.classList.remove('show')
    }
});
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));


const tooltips = document.querySelectorAll('.tt')
tooltips.forEach(t => {
    new bootstrap.Tooltip(t)
});

