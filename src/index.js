const menuButton = document.getElementById('menu-button');
const mobileMenu = document.getElementById('mobile-menu');
const closeMenu = document.getElementById('close-menu');

menuButton.addEventListener('click', () => {
  toggleMenu();
});

closeMenu.addEventListener('click', () => {
  toggleMenu();
});

function toggleMenu() {
  mobileMenu.classList.toggle('menu-visible');
  mobileMenu.classList.toggle('menu-hidden');
}

// Assuming the mobile menu starts hidden
mobileMenu.classList.add('menu-hidden');

    // slider

    

// scroll
// Assuming you have a button with id="scroll-button" that triggers the scroll
// gsap.from("#tracking",{
//     scale:0,
//     delay:1,
//     duration:1,
//     scrollTrigger:"#tracking"
// })

// gsap.from("#tracking",{
//     x:-100,
//     opacity:0,
//     duration:1.5,
//     delay:0.1,
//     scrollTrigger:
//     {
//         trigger:"#tracking",
//         scroller:"body",
//         markers:"true",
//         start:"top 50%"

//     }
// })

// gsap.registerPlugin(ScrollTrigger);

//     gsap.from("#tracking", {
//       x: -100,
//       opacity: 0,
//       duration: 1.5,
//       delay: 0.1,
//       scrollTrigger: {
//         trigger: "#tracking",
//         scroller: "body",
//         // markers: true,
//         start: "top 40%",
//         onEnter: () => {
//           gsap.fromTo("#tracking", {x: -100, opacity: 0}, {x: 0, opacity: 1, duration: 1.5});
//         },
//         onLeave: () => {
//           gsap.set("#tracking", {x: -100, opacity: 0});
//         },
//         onEnterBack: () => {
//           gsap.fromTo("#tracking", {x: -100, opacity: 0}, {x: 0, opacity: 1, duration: 1.5});
//         },
//         onLeaveBack: () => {
//           gsap.set("#tracking", {x: -100, opacity: 0});
//         }
//       }
//     });
// gsap.registerPlugin(ScrollTrigger);

//     gsap.from("#tracking1", {
//       x: -100,
//       opacity: 0,
//       duration: 1.5,
//       delay: 0.1,
//       scrollTrigger: {
//         trigger: "#tracking1",
//         scroller: "body",
//         // markers: true,
//         start: "top 60%",
//         onEnter: () => {
//           gsap.fromTo("#tracking1", {x: -100, opacity: 0}, {x: 0, opacity: 1, duration: 1.5});
//         },
//         onLeave: () => {
//           gsap.set("#tracking1", {x: -100, opacity: 0});
//         },
//         onEnterBack: () => {
//           gsap.fromTo("#tracking1", {x: -100, opacity: 0}, {x: 0, opacity: 1, duration: 1.5});
//         },
//         onLeaveBack: () => {
//           gsap.set("#tracking1", {x: -100, opacity: 0});
//         }
//       }
//     });
// gsap.registerPlugin(ScrollTrigger);

//     // Initial animation for the hero section
//     gsap.to("#hero", {
//       y: -100,
//       opacity: 0,
//       duration: 1.5,
//       delay: 0.1,
//       scrollTrigger: {
//         trigger: "#hero",
//         scroller: "body",
//         // markers: true,
//         start: "center 40%"
//         }
//       })
// gsap.registerPlugin(ScrollTrigger);

//     // Initial animation for the hero section
//     gsap.from("#new-section", {
//       y: 100,
//       opacity: 0,
//       duration: 1.5,
//       delay: 0.1,
//       scrollTrigger: {
//         trigger: "#new-section",
//         scroller: "body",
//         markers: true,
//         start: "top 90%"
//         }
//       })
    
//     // ScrollTrigger for the hero section
  
    
  // gsap.registerPlugin(ScrollTrigger);

  //   // Initial animation for the hero section
  //   gsap.to("v_card", {
  //     x: -100,
  //     opacity: 0,
  //     duration: 1.5,
  //     delay: 0.1,
      
  //     scrollTrigger: {
  //       trigger: "#v_card",
  //       scroller: "body",
  //       markers: true,
  //       start: "top 55%"
  //       }
  //     })
    
    // ScrollTrigger for the hero section
  
    
var main = document.getElementById("main")
var cursor = document.getElementById("cursor")

main.addEventListener("mousemove",function(dets){
  gsap.to(cursor,{
    x:dets.x,
    y:dets.y,
    duration:1,
    ease:"back.out"
  })

})