//burger menu
const burgerMenu = document.querySelector('.burger-menu');
const menuItems = document.querySelector('.menu-items');

burgerMenu.addEventListener('click', () => {
    menuItems.classList.toggle('active');
});
menuItems.addEventListener("click",()=>{
  menuItems.classList.remove("active")
})
//home slider
$(".sliders").slick({
    dots:true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
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
//counter
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

//courses slider
  $(document).ready(function(){
    $('.slider').slick({
      centerMode: true,
      centerPadding: '60px',
      slidesToShow: 3,
      autoplay: true,
      autoplaySpeed: 2000,
      responsive: [
        {
          breakpoint: 992,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '40px',
            slidesToShow: 2
          }
        },
        {
          breakpoint: 768,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '40px',
            slidesToShow: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '20px',
            slidesToShow: 1
          }
        }
      ]
    });
  });


  
const date=new Date();
const year=date.getFullYear();
const hour= date.getHours();
const min= date.getMinutes();
const sec= date.getSeconds();
document.getElementById("hours").innerHTML=`${hour}h`;
document.getElementById("minutes").innerHTML=`${min}m`;
document.getElementById("seconds").innerHTML=`${sec}s`;
document.getElementById("showyear").innerHTML= `©${year}`;
//select section
document.addEventListener('DOMContentLoaded', () => {
  // Check localStorage for the last active section
  const lastActiveSection = localStorage.getItem('activeSection') || 'home';
  setActive(lastActiveSection);
});

function setActive(selectedId) {
  // Hide all sections
  const sections = document.querySelectorAll('.section');
  sections.forEach(section => {
      section.classList.remove('active'); // Remove active class to hide
  });

  // Show the selected section
  const selectedSection = document.getElementById(selectedId + 'Section');
  selectedSection.classList.add('active'); // Add active class to show

  // Remove active class from all links
  const menuItems = document.querySelectorAll('.menu-items a');
  menuItems.forEach(item => {
      item.classList.remove('active');
  });

  // Add active class to the selected link
  const selectedItem = document.getElementById(selectedId);
  selectedItem.classList.add('active');

  // Store the active section in localStorage
  localStorage.setItem('activeSection', selectedId);
}

//contact form
function validateForm() {
  const form = document.getElementById('inquiryForm');
  if (form.checkValidity()) {
      alert("Form submitted successfully!");
      return true;
  } else {
      alert("Please fill out all required fields.");
      return false;
  }
}
//rating
$(".cardSlider").slick({
  dots:true,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: false,
  autoplaySpeed: 2000,
  arrows: false,
  responsive: [
    {
      breakpoint: 992,
      settings: {
       arrows:false,
       slidesToShow: 2,
      },
    },
    {
      breakpoint: 576,
      settings: {
       arrows:false,
       slidesToShow: 1,
      },
    },
   
  ],
});