const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const navLink = document.querySelectorAll(".nav-link");

hamburger.addEventListener("click", mobileMenu);
navLink.forEach(n => n.addEventListener("click", closeMenu));

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}


// slider
  document.addEventListener('DOMContentLoaded', function() {
            const radios = document.querySelectorAll('input[name="slider"]');
            const dots = document.querySelectorAll('.status-dot');
            
            let currentIndex = 1; // Start with the second slide (index 1)
            const slideSpeed = 3000; // 3 seconds
            
            // Update active dot
            function updateActiveDot() {
                dots.forEach((dot, index) => {
                    if (index === currentIndex) {
                        dot.classList.add('active');
                    } else {
                        dot.classList.remove('active');
                    }
                });
            }
            
            // Move to next slide
            function nextSlide() {
                currentIndex = (currentIndex + 1) % radios.length;
                radios[currentIndex].checked = true;
                updateActiveDot();
            }
            
            // Set up click events for dots
            dots.forEach((dot, index) => {
                dot.addEventListener('click', () => {
                    currentIndex = index;
                    radios[currentIndex].checked = true;
                    updateActiveDot();
                    // Reset the auto-slide timer
                    clearInterval(intervalId);
                    intervalId = setInterval(nextSlide, slideSpeed);
                });
            });
            
            // Initialize the slider
            updateActiveDot();
            
            // Start auto-slide
            let intervalId = setInterval(nextSlide, slideSpeed);
        });