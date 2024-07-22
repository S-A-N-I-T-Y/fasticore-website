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

  const carousel = document.getElementById("hero-carousel");
  const carouselItem = document.getElementById("hero-carousel-item");
  const prevBtn = document.getElementById("prev");
  const nextBtn = document.getElementById("next");

  let currentIndex = 0;
  console.log(carouselItem.clientWidth);

  const updateCarousel = () => {
    const itemWidth =
      carouselItem[0].clientWidth;
    const offset = -currentIndex * itemWidth;
    carousel.style.transform = `translateX(${offset}px)`;
  };

  nextBtn.addEventListener("click", () => {
    if (currentIndex < carouselItem.length - 1) {
      currentIndex ++;
      updateCarousel();
    }
  });

  prevBtn.addEventListener("click", () => {
    if (currentIndex > 0) {
      currentIndex --;
      updateCarousel();
    }
  });

updateCarousel();