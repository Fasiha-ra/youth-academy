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

//aroojbatch show on click event
const batch = document.getElementById("aroojBatch");
batch.style.display = "none"; // Initially hidden
const modal = document.getElementById("exampleModalCenter"); // Modal element
const closeButton = document.getElementById("close");
const data = document.getElementById("text"); // Element to trigger display change

// Add a click event listener to the text element
data.addEventListener("click", function () {
  batch.style.display = "block"; // Show the Arooj Batch
  modal.style.display = "none"; // Hide the modal by setting display to none
  modal.classList.remove("show"); // Remove Bootstrap modal class
  document.body.classList.remove("modal-open"); // Remove modal-open class from body
  const backdrop = document.querySelector(".modal-backdrop");
  if (backdrop) {
    backdrop.remove(); // Remove the modal backdrop
  }
});

// Close button event listener (optional, to close the modal when clicking close button)
closeButton.addEventListener("click", function () {
  modal.style.display = "none"; // Hide the modal
  modal.classList.remove("show"); // Remove Bootstrap modal class
  document.body.classList.remove("modal-open"); // Remove modal-open class from body
  const backdrop = document.querySelector(".modal-backdrop");
  if (backdrop) {
    backdrop.remove(); // Remove the modal backdrop
  }
});
