const openMenu = document.getElementById("open-menu"),
  closeMenu = document.getElementById("close"),
  mobileMenu = document.getElementById("mobile-menu");

openMenu.addEventListener("click", function openUp() {
  mobileMenu.classList.add("scale-in-bl");
  mobileMenu.classList.remove("scale-out-bl");
  mobileMenu.classList.add("active");
});
closeMenu.addEventListener("click", function closeUp() {
  mobileMenu.classList.remove("scale-in-bl");
  mobileMenu.classList.add("scale-out-bl");
  setTimeout(() => {
    mobileMenu.classList.remove("active");
  }, 500);
});

document.addEventListener('DOMContentLoaded', function() {
  const items = document.querySelectorAll('.hero-carousel-item');
  const prevButton = document.querySelector('.hero-carousel .prev');
  const nextButton = document.querySelector('.hero-carousel .next');
  let currentIndex = 0;

  function showItem(index) {
      items.forEach(item => item.classList.remove('active'));
      if (items[index]) {
          items[index].classList.add('active');
      }
  }

  prevButton.addEventListener('click', function() {
      currentIndex = (currentIndex === 0) ? items.length - 1 : currentIndex - 1;
      showItem(currentIndex);
  });

  nextButton.addEventListener('click', function() {
      currentIndex = (currentIndex === items.length - 1) ? 0 : currentIndex + 1;
      showItem(currentIndex);
  });

  showItem(currentIndex);
});
