// Open modal when a project card is clicked with animation
const projects = document.querySelectorAll(".project");

// Opening the modals
projects.forEach(project => {

    project.addEventListener("click", () => {

        const modalId = project.dataset.modal;
        const modal = document.getElementById(modalId);

        if (modal) {

            modal.style.display = "flex";

            // ADD THIS
            modal.classList.add("open");

            modal.style.opacity = 0;
            modal.style.transform = "scale(0.95)";
            modal.style.transition = "opacity 0.3s ease, transform 0.3s ease";

            requestAnimationFrame(() => {
                modal.style.opacity = 1;
                modal.style.transform = "scale(1)";
            });

            //Gallery reset
            currentImageIndex = 0;
            showSlide(currentImageIndex);
        }
    });
});

// Close modal when clicking X with animation
const closeButtons = document.querySelectorAll(".close");

// The actual close button
closeButtons.forEach(btn => {
    btn.addEventListener("click", () => {
        const modal = btn.closest(".modal");
        closeModal(modal);
    });
});

// Close modal when clicking outside content
window.addEventListener("click", e => {
    document.querySelectorAll(".modal").forEach(modal => {
        if (e.target === modal) {
            closeModal(modal);
        }
    });
}
);

// Actually close the modal
function closeModal(modal) {
    modal.style.opacity = 0;
    modal.style.transform = "scale(0.95)";
    setTimeout(() => {
        modal.style.display = "none";
        modal.classList.remove("open");
    }, 300);
}

// Project filtering
const filterButtons = document.querySelectorAll(".filterButton"); // gets all the filter buttons
const section = document.querySelectorAll(".section"); // gets all the sections 

function filterProjects(filter) {
    section.forEach(item => {
        const category = item.getAttribute("data-category"); // gets the category of the project
        if (filter === "all" || filter === category) { // if "all" or the filter's categopry is selected then display 
            item.style.display = ""; // shows the item if it matches the filter or if 'all' is selected
        }
        else {
            item.style.display = "none"; //  or else don't display
        }
    });
}

filterButtons.forEach(button => {
    button.addEventListener("click", function () {
        const filter = this.getAttribute("data-filter"); // gets the filter from the button clicked
        filterProjects(filter); // calls the function to filter projects based on the button clicked
    });
});

// Initial display of all projects when the page loads
filterProjects("all");

// Gallery 
let currentImageIndex = 0;

function showSlide(index) {
    const openModal = document.querySelector(".modal.open"); // which modal is open
    if (!openModal) return; // if no modal is open, exit the function

    let slides = openModal.querySelectorAll(".modal-slide, [class^='modalImage']");

    if (slides.length === 0) return; // if no slides found, exit the function

    if (index >= slides.length) {
        currentImageIndex = 0; // loop back to the first image
    }
    else if (index < 0) {
        currentImageIndex = slides.length - 1; // loop to the last image
    }

    slides.forEach(slide => slide.classList.remove("active")); // hide all images
    slides[currentImageIndex].classList.add("active"); // show the current image
}

window.changeSlide = function(direction){
    showSlide(currentImageIndex += direction);
}

// Responsiveness stuff for nav
const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector("nav ul");

    hamburger.addEventListener("click", () => {
        navMenu.classList.toggle("show");
    });