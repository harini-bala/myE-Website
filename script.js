document.addEventListener('DOMContentLoaded', () => {
  // Select elements
  const searchBtn = document.getElementById('search-btn');
  const searchForm = document.querySelector('.search-form');
  const menuBtn = document.getElementById('menu-btn');
  const navbar = document.querySelector('.header .navbar');

  // Toggle search bar visibility
  searchBtn.addEventListener('click', () => {
      const isExpanded = searchForm.style.transform === 'scaleY(1)';
      searchForm.style.transform = isExpanded ? 'scaleY(0)' : 'scaleY(1)';
  });

  // Toggle navigation menu
  menuBtn.addEventListener('click', () => {
      header.navbar.classList.toggle('active');
  });
});

