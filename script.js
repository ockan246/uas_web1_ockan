// ===== HAMBURGER MENU FUNCTIONALITY =====
const hamburger = document.getElementById('hamburger');
const nav = document.querySelector('nav');
const navLinks = document.querySelectorAll('nav ul li a');

if (hamburger) {
  hamburger.addEventListener('click', (e) => {
    e.stopPropagation();
    hamburger.classList.toggle('active');
    nav.classList.toggle('nav-open');
  });

  // Close menu when clicking on a link
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('active');
      nav.classList.remove('nav-open');
    });
  });

  // Close menu when clicking outside
  document.addEventListener('click', (e) => {
    if (!nav.contains(e.target) && !hamburger.contains(e.target)) {
      hamburger.classList.remove('active');
      nav.classList.remove('nav-open');
    }
  });
}

// ===== SMOOTH SCROLL BEHAVIOR =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// ===== OBSERVE ELEMENTS FOR ANIMATION ON SCROLL =====
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.animation = 'slideUp 0.6s ease forwards';
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// Observe all sections and project items
document.querySelectorAll('section, .project-item, .contact-list').forEach(el => {
  observer.observe(el);
});

// ===== ACTIVE NAVIGATION LINK INDICATOR =====
function setActiveLink() {
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      link.style.background = 'rgba(255,255,255,0.3)';
      link.style.fontWeight = '700';
    }
  });
}

setActiveLink();

// ===== PAGE LOAD ANIMATION =====
window.addEventListener('load', () => {
  document.body.style.opacity = '1';
});

// ===== RESPONSIVE BEHAVIOR =====
let isMobile = window.innerWidth <= 800;

window.addEventListener('resize', () => {
  const wasMobile = isMobile;
  isMobile = window.innerWidth <= 800;
  
  if (wasMobile !== isMobile) {
    if (!isMobile) {
      hamburger.classList.remove('active');
      nav.classList.remove('nav-open');
    }
  }
});

// ===== KEYBOARD NAVIGATION =====
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && nav.classList.contains('nav-open')) {
    hamburger.classList.remove('active');
    nav.classList.remove('nav-open');
  }
});

// ===== BACK TO TOP BUTTON =====
const backToTopBtn = document.createElement('button');
backToTopBtn.innerHTML = '⬆️ Kembali ke Atas';
backToTopBtn.id = 'backToTop';
backToTopBtn.style.cssText = `
  position: fixed;
  bottom: 30px;
  right: 30px;
  padding: 10px 16px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  font-size: 0.9rem;
  font-weight: 600;
  box-shadow: 0 4px 12px rgba(102, 126, 234, 0.4);
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s ease;
  z-index: 99;
`;

document.body.appendChild(backToTopBtn);

window.addEventListener('scroll', () => {
  if (window.pageYOffset > 300) {
    backToTopBtn.style.opacity = '1';
    backToTopBtn.style.visibility = 'visible';
  } else {
    backToTopBtn.style.opacity = '0';
    backToTopBtn.style.visibility = 'hidden';
  }
});

backToTopBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

backToTopBtn.addEventListener('mouseover', () => {
  backToTopBtn.style.transform = 'translateY(-3px)';
  backToTopBtn.style.boxShadow = '0 6px 16px rgba(102, 126, 234, 0.6)';
});

backToTopBtn.addEventListener('mouseout', () => {
  backToTopBtn.style.transform = 'translateY(0)';
  backToTopBtn.style.boxShadow = '0 4px 12px rgba(102, 126, 234, 0.4)';
});

// ===== ADD HOVER EFFECTS FOR LINKS =====
document.querySelectorAll('a').forEach(link => {
  if (!link.parentElement.classList.contains('hamburger')) {
    link.style.transition = 'all 0.3s ease';
  }
});

// ===== CONSOLE MESSAGE =====
console.log('%c📱 Selamat Datang di Portofolio Ockan! %c🎉', 
  'font-size: 16px; font-weight: bold; color: #667eea;',
  'font-size: 14px; color: #764ba2;'
);
console.log('%cWebsite yang responsif dan menarik untuk semua perangkat! 💻📱', 
  'font-size: 12px; color: #999;'
);
