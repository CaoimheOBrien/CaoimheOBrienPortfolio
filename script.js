// Open modal when a project card is clicked with animation
const projects = document.querySelectorAll(".project");

projects.forEach(project => {
    console.log("Opening modal"); 
    project.addEventListener("click", () => {
        const modalId = project.dataset.modal;
        const modal = document.getElementById(modalId);
        if (modal) {
            modal.style.display = "flex";
            modal.style.opacity = 0;
            modal.style.transform = "scale(0.95)";
            modal.style.transition = "opacity 0.3s ease, transform 0.3s ease";
            requestAnimationFrame(() => {
                modal.style.opacity = 1;
                modal.style.transform = "scale(1)";
            });
        }
    });
});

// Close modal when clicking X with animation
const closeButtons = document.querySelectorAll(".close");
closeButtons.forEach(btn => {
    btn.addEventListener("click", () => {
        const modal = btn.closest(".modal");
        modal.style.opacity = 0;
        modal.style.transform = "scale(0.95)";
        setTimeout(() => modal.style.display = "none", 300);
    });
});

// Close modal when clicking outside content
window.addEventListener("click", e => {
    document.querySelectorAll(".modal").forEach(modal => {
        if (e.target === modal) {
            modal.style.opacity = 0;
            modal.style.transform = "scale(0.95)";
            setTimeout(() => modal.style.display = "none", 300);
        }
    });
});


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
