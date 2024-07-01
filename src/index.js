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

    document.addEventListener('DOMContentLoaded', function () {
        const slider = document.getElementById('slider');
        const dots = document.querySelectorAll('.dot');
        const totalSlides = slider.children.length;
        let index = 0;
    
        function showNextSlide() {
            index = (index + 1) % totalSlides;
            slider.style.transform = `translateX(-${index * 100}%)`;
            updateDots();
        }
    
        function updateDots() {
            dots.forEach((dot, i) => {
                dot.classList.toggle('active', i === index);
            });
        }
    
        setInterval(showNextSlide, 3000); // Change slide every 3 seconds
    
        // Dot navigation
        dots.forEach((dot, i) => {
            dot.addEventListener('click', () => {
                index = i;
                slider.style.transform = `translateX(-${index * 100}%)`;
                updateDots();
            });
        });
    });


// scroll
// Assuming you have a button with id="scroll-button" that triggers the scroll
// gsap.from("#tracking",{
//     scale:0,
//     delay:1,
//     duration:1,
//     scrollTrigger:"#tracking"
// })

// gsap.from("#tracking",{
//     y:10,
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