// Typed.js Initialization
var typed = new Typed(".text", {
    strings: ["Data Visualization","Programming", "Data Analysis", "Machine Learning","IoT", "Web Designing"], // Corrected minor spelling error
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    
    loop: true
});

/* This will trigger when the user scrolls down */
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) { // Adjust this value as needed
      document.querySelector('header').style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
      document.querySelector('header').style.boxShadow = '0 0 10px rgba(0, 150, 255, 0.5), 0 0 20px rgba(0, 150, 255, 0.3)'; 
    } else {
      document.querySelector('header').style.backgroundColor = 'transparent';
      document.querySelector('header').style.boxShadow = 'none';
    }
  });
// Scroll-to-Top Button Visibility
const toTop = document.querySelector(".top"); // Select the scroll-to-top button
window.addEventListener("scroll", () => {
    if (window.pageYOffset > 100) { // Check if the user has scrolled down
        toTop.classList.add("active"); // Add the "active" class to make the button visible
    } else {
        toTop.classList.remove("active"); // Remove the "active" class to hide the button
    }
});


// Scroll-to-Top Functionality
toTop.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth" // Smooth scrolling back to the top
    });
});

// Three.js Starfield Background
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
);
const renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector("#bg"), // Links to the <canvas> element in your HTML
    antialias: true,
});

// Renderer Settings
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.setZ(30);

// Star Geometry
const starGeometry = new THREE.BufferGeometry();
const starMaterial = new THREE.PointsMaterial({
    color: 0xffffff,
    size: 0.5
});
const starVertices = [];
for (let i = 0; i < 10000; i++) {
    const x = (Math.random() - 0.5) * 2000;
    const y = (Math.random() - 0.5) * 2000;
    const z = (Math.random() - 0.5) * 2000;
    starVertices.push(x, y, z);
}
starGeometry.setAttribute(
    "position",
    new THREE.Float32BufferAttribute(starVertices, 3)
);
const stars = new THREE.Points(starGeometry, starMaterial);
scene.add(stars);

// Animation Loop
function animate() {
    requestAnimationFrame(animate);
    stars.rotation.x += 0.0005; // Add subtle rotation for effect
    stars.rotation.y += 0.0005;
    renderer.render(scene, camera);
}
animate();

// Adjust Canvas Size on Resize
window.addEventListener("resize", () => {
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
});
// Function to handle scroll-triggered animations
const uniqueScrollAnimations = () => {
    const animatedElements = document.querySelectorAll('.animate-from-left, .animate-from-right');

    animatedElements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (elementTop < windowHeight - 100) { // Adjust threshold as needed
            element.classList.add('in-view');
        } else {
            element.classList.remove('in-view');
        }
    });
};

// Trigger animations on scroll
window.addEventListener('scroll', uniqueScrollAnimations);

// Run once on page load
uniqueScrollAnimations();
// Function to animate Professional Skills and Certifications section on scroll
function animateProfessionalSkillsOnScroll() {
    const professionalElements = document.querySelectorAll(
        '.professional-animate-left, .professional-animate-right, .professional-animate-scale'
    );
    const windowHeight = window.innerHeight;

    professionalElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementBottom = element.getBoundingClientRect().bottom;

        // Trigger animation when the element enters the viewport
        if (elementTop < windowHeight - 100 && elementBottom > 100) {
            element.classList.add('professional-visible');
        } else {
            // Remove animation when the element leaves the viewport
            element.classList.remove('professional-visible');
        }
    });
}

// Trigger Professional Skills animations on scroll
window.addEventListener('scroll', animateProfessionalSkillsOnScroll);

// Trigger Professional Skills animations on page load
document.addEventListener('DOMContentLoaded', animateProfessionalSkillsOnScroll);
// Function to animate Projects section on scroll
function animateProjectsOnScroll() {
    const projectElements = document.querySelectorAll(
        '.project-animate-pop'
    );
    const windowHeight = window.innerHeight;

    projectElements.forEach((element, index) => {
        const elementTop = element.getBoundingClientRect().top;
        const elementBottom = element.getBoundingClientRect().bottom;

        // Trigger animation when the element enters the viewport
        if (elementTop < windowHeight - 100 && elementBottom > 100) {
            element.classList.add('project-visible');
        } else {
            // Remove animation when the element leaves the viewport
            element.classList.remove('project-visible');
        }
    });
}

// Trigger Projects animations on scroll
window.addEventListener('scroll', animateProjectsOnScroll);

// Trigger Projects animations on page load
document.addEventListener('DOMContentLoaded', animateProjectsOnScroll);
// Scroll Animations for Experience Section
const experienceItems = document.querySelectorAll('.timeline-item');

function checkExperienceScroll() {
    experienceItems.forEach((item) => {
        const itemPosition = item.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (itemPosition < windowHeight - 100) {
            item.classList.add('show-experience');
        } else {
            item.classList.remove('show-experience');
        }
    });
}

window.addEventListener('scroll', checkExperienceScroll);
// Scroll Animations for Dashboards Section
const dashboardItems = document.querySelectorAll('.dashboard');

function checkDashboardScroll() {
    dashboardItems.forEach((item) => {
        const itemPosition = item.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (itemPosition < windowHeight - 100) {
            item.classList.add('show-dashboard');
        } else {
            item.classList.remove('show-dashboard');
        }
    });
}

window.addEventListener('scroll', checkDashboardScroll);
// Scroll Animation for Contact Section
const contactSection = document.querySelector('.contacts');

function checkContactScroll() {
    const contactPosition = contactSection.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (contactPosition < windowHeight - 100) {
        contactSection.classList.add('show-contact');
    } else {
        contactSection.classList.remove('show-contact');
    }
}

window.addEventListener('scroll', checkContactScroll);



document.querySelectorAll('.timeline-item').forEach(item => {
    item.addEventListener('mouseenter', () => {
        const popup = document.createElement('div');
        popup.classList.add('popup');
        popup.innerText = item.getAttribute('data-description');
        item.appendChild(popup);
    });

    item.addEventListener('mouseleave', () => {
        const popup = item.querySelector('.popup');
        if (popup) popup.remove();
    });
});
