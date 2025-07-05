const header = document.getElementById('header');
const menuBtn = document.getElementById('mobile-menu-btn');
const navLinks = document.querySelector('.nav-links');
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const skillCards = document.querySelectorAll('.skill-card');
const projectCards = document.querySelectorAll('.project-card');
const contactForm = document.getElementById('contact-form');

document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', function() {
    navLinks.classList.remove('show');
  });
});

mobileMenuBtn.addEventListener('click', function(event) {
  event.stopPropagation();
  navLinks.classList.toggle('show');
});

// Close mobile menu when clicking on a nav link too
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', function() {
    navLinks.classList.remove('show');
  });
});

// Close mobile menu when clicking outside
document.addEventListener('click', function(event) {
  const isClickInsideNav = navLinks.contains(event.target) || mobileMenuBtn.contains(event.target);
  if (!isClickInsideNav && navLinks.classList.contains('show')) {
    navLinks.classList.remove('show');
  }
});

function setActiveNavLink() {
  const sections = document.querySelectorAll('section');
  let currentActive = '';
  
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    const sectionHeight = section.offsetHeight;
    if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
      currentActive = section.getAttribute('id');
    }
  });
  
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${currentActive}`) {
      link.classList.add('active');
    }
  });
}
setActiveNavLink();
window.addEventListener('scroll', setActiveNavLink);

const skillsSection = document.getElementById('skills');
  if (skillsSection) {
    const skillCards = document.querySelectorAll('.skill-card');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Add animation classes or other effects if needed
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.2 });
    
    observer.observe(skillsSection);
  }

  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      const nameInput = document.getElementById('name');
      const emailInput = document.getElementById('email');
      const subjectInput = document.getElementById('subject');
      const messageInput = document.getElementById('message');
      
      // Simple validation
      let isValid = true;
      
      if (nameInput.value.trim() === '') {
        isValid = false;
        nameInput.style.borderColor = 'red';
      } else {
        nameInput.style.borderColor = '';
      }
      
      if (emailInput.value.trim() === '' || !isValidEmail(emailInput.value)) {
        isValid = false;
        emailInput.style.borderColor = 'red';
      } else {
        emailInput.style.borderColor = '';
      }
      
      if (subjectInput.value.trim() === '') {
        isValid = false;
        subjectInput.style.borderColor = 'red';
      } else {
        subjectInput.style.borderColor = '';
      }
      
      if (messageInput.value.trim() === '') {
        isValid = false;
        messageInput.style.borderColor = 'red';
      } else {
        messageInput.style.borderColor = '';
      }
      
      if (isValid) {
        // In a real application, you would send form data to a server here
        alert('Your message has been sent successfully!');
        contactForm.reset();
      } else {
        alert('Please fill all the required fields correctly.');
      }
    });
  }


// Email validation helper
function isValidEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}