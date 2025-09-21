//Author: Caoimhe O'Brien

//Filters projects shown based on the category button clicked --> default is "all"
document.addEventListener("DOMContentLoaded", function () {
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
});


// Modal Script 
// Get the modal
var modal = document.getElementById("thisPortfolioModal");
var btn = document.getElementById("readmoreButtonTP");// Get the button that opens the modal for "This Portfolio"
var span = document.getElementsByClassName("close")[0];// Get the <span> element that closes the modal


// When the user clicks the button, open the modal 
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Sage Academy Modal
var modalSgA = document.getElementById("SageAcademyModal");
var btnSgA = document.getElementById("readmoreButtonSgA");// Get the button that opens the modal for "Sage Academy"
var span2 = document.getElementsByClassName("close")[1];// Get the <span> element that closes the modal

// When the user clicks the button, open the modal
btnSgA.onclick = function() {
    modalSgA.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span2.onclick = function() {
    modalSgA.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modalSgA) {
        modalSgA.style.display = "none";
    }
}

//Old Portfolio Modal
var modalOP = document.getElementById("oldPortfolioModal");
var btnOP = document.getElementById("readmoreButtonOP");// Get the button that opens the modal for "Old Portfolio"
var span3 = document.getElementsByClassName("close")[2];// Get the <span> element that closes the modal

// When the user clicks the button, open the modal
btnOP.onclick = function() {
    modalOP.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span3.onclick = function() {
    modalOP.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modalOP) {
        modalOP.style.display = "none";
    }
}

//Enemy Animation Modal
var modalEA = document.getElementById("enemiesAnimationModal");
var btnEA = document.getElementById("readmoreButtonEA");// Get the button that opens the modal for "Enemy Animation"
var span4 = document.getElementsByClassName("close")[3];// Get the <span> element that closes the modal 

// When the user clicks the button, open the modal
btnEA.onclick = function() {
    modalEA.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span4.onclick = function() {
    modalEA.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modalEA) {
        modalEA.style.display = "none";
    }
}

//Coffee Utopia Modal
var modalCU = document.getElementById("coffeeUtopiaModal");
var btnCU = document.getElementById("readmoreButtonCU");// Get the button that opens the modal for "Coffee Utopia"
var span5 = document.getElementsByClassName("close")[4];// Get the <span> element that closes the modal 

// When the user clicks the button, open the modal
btnCU.onclick = function() {
    modalCU.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span5.onclick = function() {
    modalCU.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modalCU) {
        modalCU.style.display = "none";
    }
}

//Game Assets Modal
var modalGA = document.getElementById("gameAssetsModal");
var btnGA = document.getElementById("readmoreButtonGA");// Get the button that opens the modal for "Game Assets"
var span6 = document.getElementsByClassName("close")[5];// Get the <span> element that closes the modal

// When the user clicks the button, open the modal
btnGA.onclick = function() {
    modalGA.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span6.onclick = function() {
    modalGA.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modalGA) {
        modalGA.style.display = "none";
    }
}

//Optometry Poster Modal
var modalOptPos = document.getElementById("optometryPosterModal");
var btnOptPOs = document.getElementById("readmoreButtonOptPos");// Get the button that opens the modal for "Optometry Poster"
var span7 = document.getElementsByClassName("close")[6];// Get the <span> element that closes the modal 

// When the user clicks the button, open the modal
btnOptPOs.onclick = function() {
    modalOptPos.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span7.onclick = function() {
    modalOptPos.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modalOptPOs) {
        modalOptPos.style.display = "none";
    }
}