gsap.registerPlugin(ScrollTrigger);

// Select all image sections
const images = gsap.utils.toArray('.image-section');

// Create a timeline
let tl = gsap.timeline({
  scrollTrigger: {
    trigger: '.container',
    start: 'top top',
    end: 'bottom bottom',
    scrub: true,
    pin: '.container',
    anticipatePin: 1
  }
});

// Animate each image section
images.forEach((image, i) => {
  // Calculate the duration based on the number of images
  let duration = 1 / images.length;
  tl.fromTo(image, {opacity: 0}, {opacity: 1, duration: duration}, i * duration)
    .to(image, {opacity: 0, duration: duration}, (i + 1) * duration);
});
