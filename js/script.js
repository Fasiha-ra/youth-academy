const burgerMenu = document.querySelector('.burger-menu');
const menuItems = document.querySelector('.menu-items');

burgerMenu.addEventListener('click', () => {
    menuItems.classList.toggle('active');
});


$(".sliders").slick({
    dots:true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    responsive: [
      {
        breakpoint: 992,
        settings: {
         arrows:false
        },
      },
     
    ],
  });

  const counters = document.querySelectorAll('.count');
    
  counters.forEach(counter => {
      const updateCount = () => {
          const target = +counter.getAttribute('data-target');  // Get target value
          const current = +counter.innerText;  // Get current value (starts from 0)
          const increment = target / 200;  // Adjust speed here (200 is the speed factor)

          if (current < target) {
              counter.innerText = Math.ceil(current + increment);
              setTimeout(updateCount, 100);  // Adjust speed here (15ms)
          } else {
              counter.innerText = target;  // Ensure exact value
          }
      };

      // When the user scrolls to the section, start the counting animation
      const section = document.querySelector('.counter-section');
      const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
              if (entry.isIntersecting) {
                  updateCount();  // Start animation when section is visible
              }
          });
      }, { threshold: 0.5 });  // 50% of the section should be visible

      observer.observe(section);
  });