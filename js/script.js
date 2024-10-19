//burger menu
const burgerMenu = document.querySelector('.burger-menu');
const menuItems = document.querySelector('.menu-items');

burgerMenu.addEventListener('click', () => {
    menuItems.classList.toggle('active');
});
menuItems.addEventListener("click",()=>{
  menuItems.classList.remove("active")
})

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



  
const date=new Date();
const year=date.getFullYear();
document.getElementById("showyear").innerHTML= `©${year}`;
function updateTime() {
  const now = new Date();
  const midnight = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1); // Next midnight
  const timeDifference = midnight - now; // Time left until midnight

  // Convert time difference to hours, minutes, and seconds
  const hours = Math.floor(timeDifference / (1000 * 60 * 60));
  const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

  // Update the HTML elements
  document.getElementById("hours").innerHTML = hours + "h";
  document.getElementById("minutes").innerHTML = minutes + "m";
  document.getElementById("seconds").innerHTML = seconds + "s";
}

// Update the countdown every second
setInterval(updateTime, 1000);

// Initial call to display immediately
updateTime();
//contact form



//sign up
function signUpForm() {
  const name = document.getElementById('name');
  const email = document.getElementById('email');
  const whatsapp = document.getElementById('whatsapp');
  const password = document.getElementById('password');
  const confirmPassword = document.getElementById('confirmPassword');

  // Reset error messages
  resetErrors();

  let isValid = true;

  // Name validation
  if (name.value.trim() === '') {
    displayError('nameError', 'Name is required.');
    isValid = false;
  }

  // Email validation
  if (email.value.trim() === '') {
    displayError('emailError', 'Email is required.');
    isValid = false;
  } else if (!validateEmail(email.value)) {
    displayError('emailError', 'Invalid email address.');
    isValid = false;
  }

  // WhatsApp validation
  if (whatsapp.value.trim() === '') {
    displayError('whatsappError', 'WhatsApp number is required.');
    isValid = false;
  }

  // Password validation
  if (password.value.trim() === '') {
    displayError('passwordError', 'Password is required.');
    isValid = false;
  } else if (password.value.length < 6) {
    displayError('passwordError', 'Password must be at least 6 characters long.');
    isValid = false;
  }

  // Confirm Password validation
  if (confirmPassword.value.trim() === '') {
    displayError('confirmPasswordError', 'Confirm Password is required.');
    isValid = false;
  } else if (password.value !== confirmPassword.value) {
    displayError('confirmPasswordError', 'Passwords do not match.');
    isValid = false;
  }

  // Log form data to console if valid
  if (isValid) {
    console.log({
      name: name.value,
      email: email.value,
      whatsapp: whatsapp.value,
      password: password.value,
      confirmPassword: confirmPassword.value,
    });
  }

  return false; // Prevent form submission
}

// Reset error messages
function resetErrors() {
  const errorElements = document.querySelectorAll('.error-message');
  errorElements.forEach((element) => {
    element.style.display = 'none';
  });
}

// Display error message
function displayError(elementId, message) {
  const errorElement = document.getElementById(elementId);
  errorElement.textContent = message;
  errorElement.style.display = 'block';
}

// Validate email
function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

// Function to toggle password visibility
function togglePassword(fieldId) {
  const field = document.getElementById(fieldId);
  if (field.type === 'password') {
    field.type = 'text';
  } else {
    field.type = 'password';
  }
}

//article detail page
// const articalDetail = () => {
//   console.log("fasoia");
  
//   window.location.href = "articleDetail.html";
// };
const questions = document.querySelectorAll('.question');

questions.forEach(question => {
    question.addEventListener('click', () => {
        const answer = question.nextElementSibling;   

        answer.style.display = answer.style.display === 'block' ? 'none' : 'block';   

    });
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
  const faqItems = document.querySelectorAll(".faq-item");
  const faqImage = document.getElementById("faq-images");
  const images = {
    "daily-live-sessions": "/images/hero/feature1.webp",
    "recorded-lectures": "/images/hero/feature2.webp",
    "study-notes": "/images/hero/feature3.webp",
    "teacher-support": "/images/hero/feature4.webp",
    "test-sessions": "/images/hero/feature5.webp",
    "syllabus-planning": "/images/hero/feature6.webp",
  };

  faqItems.forEach((item) => {
    const radio = item.querySelector('input[type="radio"]');

    radio.addEventListener("change", () => {
      faqItems.forEach((i) => i.classList.remove("active"));
      item.classList.add("active");
      faqImage.src = images[radio.value]; // Change the image based on selected FAQ
    });
  });
});