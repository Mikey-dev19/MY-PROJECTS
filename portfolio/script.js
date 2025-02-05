// JavaScript for smooth scroll functionality
document.querySelectorAll('.navbar-item').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  
  // JavaScript for the "Hire Me" button action (can be customized later)
  document.getElementById('hireMeBtn').addEventListener('click', () => {
    alert('Let’s work together! You can reach me via my contact form or social media links!');
  });
  