// ******************** Navbar Start *********************

// Toggle function to show/hide the menu on small screens and change the icon
function toggleMenu() {
  const buttons = document.getElementById('navbarButtons');
  const toggleIcon = document.getElementById('navbarToggle').children[0];

  // Toggle the 'active' class to show/hide the buttons
  buttons.classList.toggle('active');

  // Switch the icon between hamburger (fa-bars) and close (fa-times)
  if (buttons.classList.contains('active')) {
      toggleIcon.classList.remove('fa-bars');
      toggleIcon.classList.add('fa-times'); // Show close (cancel) icon
  } else {
      toggleIcon.classList.remove('fa-times');
      toggleIcon.classList.add('fa-bars'); // Show hamburger icon
  }
}

// ******************** Navbar Start *********************


// ************** Hero Section Start *********************

const images = [
  'assets/images/hero section images/hero-img-1.jpeg',
  'assets/images/hero section images/hero-img-2.jpeg',
  'assets/images/hero section images/hero-img-3.jpeg',
];

const text = [
  "Enabling marginalized youth to build sustainable income through freelancing",
  "Community-rooted Tech & Design vocational programs",
  "Democratizing ownership of the digital economy",
];

const imageTrack = document.getElementById('image-track');
const slideCaption = document.getElementById('slide-caption');
const sliderContainer = document.getElementById('slider-container');
let currentIndex = 0;
let transition = false;
let autoSlideInterval;

// Function to dynamically push images into the carousel
function loadImages() {
  // Add the last image before the first image (for smooth transition)
  const lastImageClone = document.createElement('img');
  lastImageClone.src = images[images.length - 1];
  lastImageClone.classList.add('slide-image');
  lastImageClone.alt = `Slide Image ${images.length}`;
  imageTrack.appendChild(lastImageClone);

  // Dynamically add each image
  images.forEach((imageSrc, index) => {
      const imgElement = document.createElement('img');
      imgElement.src = imageSrc;
      imgElement.classList.add('slide-image');
      imgElement.alt = `Slide Image ${index + 1}`;
      imageTrack.appendChild(imgElement);
  });

  // Add the first image after the last image (for smooth transition)
  const firstImageClone = document.createElement('img');
  firstImageClone.src = images[0];
  firstImageClone.classList.add('slide-image');
  firstImageClone.alt = `Slide Image 1`;
  imageTrack.appendChild(firstImageClone);

  updateCaption();
}

function handleNext() {
  if (transition) return;
  transition = true;
  currentIndex = (currentIndex + 1) % (images.length + 2);
  updateSlider();
}

function updateSlider() {
  imageTrack.style.transition = 'transform 1s ease-in-out';
  imageTrack.style.transform = `translateX(-${currentIndex * 100}%)`;
  imageTrack.addEventListener('transitionend', handleTransitionEnd, { once: true });
  updateCaption();
}

function handleTransitionEnd() {
  if (currentIndex === 0) {
      imageTrack.style.transition = 'none';
      currentIndex = images.length;
      imageTrack.style.transform = `translateX(-${currentIndex * 100}%)`;
  } else if (currentIndex === images.length + 1) {
      imageTrack.style.transition = 'none';
      currentIndex = 1;
      imageTrack.style.transform = `translateX(-${currentIndex * 100}%)`;
  }
  transition = false;
}

// Function to update the slider caption
function updateCaption() {
  const textIndex = (currentIndex === 0) ? images.length - 1 : (currentIndex === images.length + 1) ? 0 : currentIndex - 1;
  slideCaption.innerHTML = text[textIndex];
}

// Auto slide every 5 seconds
function startAutoSlide() {
  autoSlideInterval = setInterval(handleNext, 2000);
}

function stopAutoSlide() {
  clearInterval(autoSlideInterval);
}

// Attach hover events to pause and resume auto slide
sliderContainer.addEventListener('mouseover', stopAutoSlide);
sliderContainer.addEventListener('mouseout', startAutoSlide);

loadImages();
startAutoSlide();

// ************** Hero Section End *********************

// ================================ Our-partners Section Start  ========================

// Clone the slider content to create an infinite loop effect
var copy = document.querySelector(".our-partners-slide").cloneNode(true);
document.querySelector(".our-partners").appendChild(copy);
  
  

// ================================ Our-partners Section Start  ========================

// ************** Metrics Section Start *********************

const numbers = document.querySelectorAll('.number h1');
      const speed = 100; // You can adjust the speed (higher number = slower)

      numbers.forEach(number => {
          const updateCount = () => {
              const target = +number.parentElement.getAttribute('data-target');
              const count = +number.innerText;

              // Calculate increment
              const increment = target / speed;

              // If count is less than target, increase the count
              if (count < target) {
                  number.innerText = Math.ceil(count + increment);
                  setTimeout(updateCount, 20);
              } else {
                  number.innerText = target;
              }
          };

          // Start the count update when the element is in view
          const observer = new IntersectionObserver((entries) => {
              entries.forEach(entry => {
                  if (entry.isIntersecting) {
                      updateCount();
                      observer.unobserve(number); // Stop observing once animation is triggered
                  }
              });
          }, { threshold: 0.6 });

          observer.observe(number);
      });

// ************** Metrics Section End *********************
