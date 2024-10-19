//rating
$(".cardSlider").slick({
  dots: true,
  slidesToShow: 2,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  arrows: false,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        arrows: false,
        slidesToShow: 1,
      },
    },
    {
      breakpoint: 576,
      settings: {
        arrows: false,
        slidesToShow: 1,
      },
    },
  ],
});
//team
$(".teamSlider").slick({
  dots: true,
  slidesToShow: 2,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  arrows: false,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        arrows: false,
        slidesToShow: 1,
      },
    },
    {
      breakpoint: 576,
      settings: {
        arrows: false,
        slidesToShow: 1,
      },
    },
  ],
});
//courses slider
$(document).ready(function () {
  $(".slider").slick({
    centerMode: true,
    centerPadding: "60px",
    slidesToShow: 3,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "40px",
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "40px",
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "20px",
          slidesToShow: 1,
        },
      },
    ],
  });
});
//home slider
$(".sliders").slick({
  dots: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  arrows: false,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        arrows: false,
      },
    },
  ],
});
$("#myModal").on("shown.bs.modal", function () {
  $("#myInput").trigger("focus");
});
const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach((item) => {
  const radioButton = item.querySelector('input[type="radio"]');

  radioButton.addEventListener("change", () => {
    // Remove active class from all items
    faqItems.forEach((i) => {
      i.classList.remove("active");
      i.querySelector(".faq-answer").style.display = "none"; // Hide all answers
    });

    // Add active class to the selected item
    item.classList.add("active");
    item.querySelector(".faq-answer").style.display = "block"; 
  });
});
document.addEventListener("DOMContentLoaded", () => {
  const faqItems = document.querySelectorAll('.faq-item');
  const faqImage = document.getElementById('faq-images');
  const images = {
      'daily-live-sessions': '/images/hero/feature1.webp',
      'recorded-lectures': '/images/hero/feature2.webp',
      'study-notes': '/images/hero/feature3.webp',
      'teacher-support': '/images/hero/feature4.webp',
      'test-sessions': '/images/hero/feature5.webp',
      'syllabus-planning': '/images/hero/feature6.webp'
  };

  faqItems.forEach(item => {
      const radio = item.querySelector('input[type="radio"]');

      radio.addEventListener('change', () => {
          faqItems.forEach(i => i.classList.remove('active'));
          item.classList.add('active');
          faqImage.src = images[radio.value]; // Change the image based on selected FAQ
      });
  });
});
//aroojbatch show on click event
const batch = document.getElementById("aroojBatch");
batch.style.display = "none";
const closeButton = document.getElementById("close");
// Get the element that will trigger the display change
const data = document.getElementById("btn-secondary");

// Add a click event listener to the element
data.addEventListener("click", function() {
  closeButton.style.display = "none";
    // Change the display style of aroojBatch to "block" when the element is clicked
    batch.style.display = "block";

});
closeButton.addEventListener("click", function() {
  modal.style.display = "none"; // Hide the modal
});

// Optional: Close the modal when clicking outside the modal content
// window.addEventListener("click", function(event) {
//   if (event.target === modal) {
//       modal.style.display = "none"; // Hide the modal
//   }
// });