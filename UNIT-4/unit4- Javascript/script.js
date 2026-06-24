// Mobile Menu Toggle
function toggleMobileMenu() {
  const mobileNav = document.getElementById('mobileNav');
  mobileNav.classList.toggle('active');
}

// Smooth Reveal Animation
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.animationDelay = '0s';
      entry.target.classList.add('show');
    }
  });
}, observerOptions);

// Observe all cards and benefits
document.querySelectorAll('.card, .benefit, .package-card').forEach(el => {
  observer.observe(el);
});

// Search Functionality
function searchDestinations() {
  const input = document.getElementById('searchInput').value.toLowerCase();
  const cards = document.querySelectorAll('.card');
  
  cards.forEach(card => {
    const name = card.dataset.name;
    if (name.includes(input)) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });
}

// Filter Destinations
function filterDestinations(category) {
  const cards = document.querySelectorAll('.card');
  const buttons = document.querySelectorAll('.filter-btn');
  
  // Update active button
  buttons.forEach(btn => btn.classList.remove('active'));
  event.target.classList.add('active');
  
  // Filter cards
  cards.forEach(card => {
    if (category === 'all' || card.dataset.category === category) {
      card.style.display = 'block';
      setTimeout(() => {
        card.style.animation = 'fadeInUp 0.6s ease both';
      }, 100);
    } else {
      card.style.display = 'none';
    }
  });
}

// Booking Modal
function bookNow() {
  document.getElementById('bookingModal').style.display = 'block';
}

function closeModal() {
  document.getElementById('bookingModal').style.display = 'none';
}

// Close modal when clicking outside
window.onclick = function(event) {
  const modal = document.getElementById('bookingModal');
  if (event.target == modal) {
    modal.style.display = 'none';
  }
}

// Handle booking form submission
document.getElementById('bookingForm')?.addEventListener('submit', function(e) {
  e.preventDefault();
  alert('Booking confirmed! We will contact you soon.');
  closeModal();
  this.reset();
});

// Handle contact form submission
function handleSubmit(event) {
  event.preventDefault();
  alert('Thank you for contacting us! We will get back to you soon.');
  event.target.reset();
}

// Admin Login
function adminLogin() {
  const password = prompt('Enter admin password:');
  if (password === 'admin123') {
    alert('Welcome Admin!');
    // Redirect to admin panel or show admin features
  } else if (password) {
    alert('Incorrect password');
  }
}

// Parallax effect on scroll
window.addEventListener('scroll', () => {
  const scrolled = window.pageYOffset;
  const hero = document.querySelector('.hero');
  if (hero) {
    hero.style.transform = `translateY(${scrolled * 0.5}px)`;
  }
});

// Lazy loading for images
const images = document.querySelectorAll('img');
const imageOptions = {
  threshold: 0,
  rootMargin: '0px 0px 50px 0px'
};

const imageObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const img = entry.target;
      img.style.opacity = '0';
      img.onload = () => {
        img.style.transition = 'opacity 0.5s';
        img.style.opacity = '1';
      };
      imageObserver.unobserve(img);
    }
  });
}, imageOptions);

images.forEach(img => imageObserver.observe(img));

// Add loading animation
window.addEventListener('load', () => {
  document.body.style.opacity = '0';
  setTimeout(() => {
    document.body.style.transition = 'opacity 1s';
    document.body.style.opacity = '1';
  }, 100);
});
