const menuButton = document.getElementById("menu-button");
const mobileMenu = document.getElementById("mobile-menu");
const closeMenu = document.getElementById("close-menu");

menuButton.addEventListener("click", () => {
  toggleMenu();
});

closeMenu.addEventListener("click", () => {
  toggleMenu();
});

function toggleMenu() {
  mobileMenu.classList.toggle("menu-visible");
  mobileMenu.classList.toggle("menu-hidden");
}

// Assuming the mobile menu starts hidden
mobileMenu.classList.add("menu-hidden");



gsap.registerPlugin(ScrollTrigger);

    gsap.from("#tracking", {
      x: -100,
      opacity: 0,
      duration: 1.5,
      delay: 0.1,
      scrollTrigger: {
        trigger: "#tracking",
        scroller: "body",
        // markers: true,
        start: "top 40%",
        onEnter: () => {
          gsap.fromTo("#tracking", {x: -100, opacity: 0}, {x: 0, opacity: 1, duration: 1.5});
        },
        onLeave: () => {
          gsap.set("#tracking", {x: -100, opacity: 0});
        },
        onEnterBack: () => {
          gsap.fromTo("#tracking", {x: -100, opacity: 0}, {x: 0, opacity: 1, duration: 1.5});
        },
        onLeaveBack: () => {
          gsap.set("#tracking", {x: -100, opacity: 0});
        }
      }
    });
gsap.registerPlugin(ScrollTrigger);

    gsap.from("#tracking1", {
      x: -100,
      opacity: 0,
      duration: 1.5,
      delay: 0.1,
      scrollTrigger: {
        trigger: "#tracking1",
        scroller: "body",
        // markers: true,
        start: "top 40%",
        onEnter: () => {
          gsap.fromTo("#tracking1", {x: -100, opacity: 0}, {x: 0, opacity: 1, duration: 1.5});
        },
        onLeave: () => {
          gsap.set("#tracking1", {x: -100, opacity: 0});
        },
        onEnterBack: () => {
          gsap.fromTo("#tracking1", {x: -100, opacity: 0}, {x: 0, opacity: 1, duration: 1.5});
        },
        onLeaveBack: () => {
          gsap.set("#tracking1", {x: -100, opacity: 0});
        }
      }
    });


var main = document.getElementById("main");
var cursor = document.getElementById("cursor");

main.addEventListener("mousemove", function (dets) {
  gsap.to(cursor, {
    x: dets.x,
    y: dets.y,
    duration: 0.3,
    ease: "power2.out",
  });
});


new SplitType("#Connecting", { types: "lines, words, chars", tagName: "span" });

// GSAP animations for each part
gsap.from("#Connecting .char", {
  opacity: 0,
  duration: 1.5, // Slower duration
  ease: "power1.out",
  stagger: 0.1, // Stagger for characters
  onComplete: function () {
    // Animation for comma after text animation completes
    gsap.to(".comma", { opacity: 1, duration: 0.5 });
  },
});

// Color animations for specific characters
gsap.from("#in .char", {
  // Start with transparent color
  duration: 1.5,
  ease: "power1.out",
  stagger: 0.1,

  onComplete: function () {
    gsap.to("#in .char", { color: "#FF671F", duration: 0.5 });
  },
});

gsap.from("#d .char", {
  duration: 1.5,
  ease: "power1.out",
  stagger: 0.1,
  onComplete: function () {
    gsap.to("#d .char", { color: "white", duration: 0.5 });
  },
});

gsap.from("#ia .char", {
  duration: 1.5,
  ease: "power1.out",
  stagger: 0.1,
  onComplete: function () {
    gsap.to("#ia .char", { color: "#046A38", duration: 0.5 });
  },
});

gsap.registerPlugin(ScrollTrigger);

// Function to navigate to a specific section
function navigateToSection(index) {
  const sections = gsap.utils.toArray(".section");
  if (index >= 0 && index < sections.length) {
    gsap.to(window, {
      duration: 1,
      scrollTo: {
        y: sections[index],
        autoKill: true,
      },
    });
  }
}

// Keyboard navigation
window.addEventListener("keydown", (e) => {
  const key = e.key;
  const currentSection = gsap.utils.toArray(".section").findIndex((section) => {
    const rect = section.getBoundingClientRect();
    return rect.top >= 0 && rect.bottom <= window.innerHeight;
  });

  if (key === "ArrowDown" || key === "ArrowRight") {
    navigateToSection(currentSection + 1);
  } else if (key === "ArrowUp" || key === "ArrowLeft") {
    navigateToSection(currentSection - 1);
  }
});
gsap.from("#section2 #tracking1 #tracking", {
  opacity: 0,
  y: 50,
  duration: 1,
  ease: "power3.out", // Smooth easing
  scrollTrigger: {
    trigger: "#section2 ",
    start: "top 70%", // Animation starts when top of section reaches center of viewport
    end: "bottom 70%", // Animation ends when bottom of section reaches center of viewport
    toggleActions: "play none none reverse", // Animation play/reverse behavior
  },
});
// Animations using ScrollTrigger
gsap.utils.toArray(".section").forEach((section) => {
  gsap.from(section, {
    opacity: 0,
    y: 50,
    duration: 1,
    ease: "power3.out", // Smooth easing
    scrollTrigger: {
      trigger: section,
      start: "top 95%", // Animation starts when top of section reaches center of viewport
      end: "bottom center", // Animation ends when bottom of section reaches center of viewport
      toggleActions: "play none none reverse", // Animation play/reverse behavior
    },
  });
});
document.addEventListener("DOMContentLoaded", function () {
  // Select the elements to animate
  const stamp = document.getElementById("stamp");
  const findPincode = document.getElementById("find-pincode");
  const clickBook = document.getElementById("click-book");
  //
  const Dak = document.getElementById("Dak");
  const Post = document.getElementById("Post");
  const India = document.getElementById("India");
  const Postal = document.getElementById("Postal");
  const gets = document.getElementById("gets");
  const know = document.getElementById("know");

  // Function to create hover animation
  function createHoverAnimation(element) {
    const hoverAnimation = gsap.timeline({
      paused: true, // Start paused
      defaults: { duration: 0.3, ease: "power2.out" }, // Animation defaults
    });

    hoverAnimation.to(element, {
      scale: 1.1, // Scale up to 1.1 on hover
      boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.2)", // Add a subtle box shadow
    });

    // Event listeners
    element.addEventListener("mouseenter", function () {
      hoverAnimation.play(); // Play the animation on mouse enter
    });

    element.addEventListener("mouseleave", function () {
      hoverAnimation.reverse(); // Reverse the animation on mouse leave
    });
  }

  // Apply hover animations to each element
  createHoverAnimation(stamp);
  createHoverAnimation(findPincode);
  createHoverAnimation(clickBook);
  //
  createHoverAnimation(Dak);
  createHoverAnimation(Post);
  createHoverAnimation(India);
  createHoverAnimation(Postal);
  createHoverAnimation(gets);
  createHoverAnimation(know);
});
