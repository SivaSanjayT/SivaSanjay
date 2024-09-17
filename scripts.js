// Initialize AOS (Animate On Scroll)
AOS.init({
    duration: 1000, // Animation duration in ms
    once: true, // Animation occurs only once
});

// Initialize Smooth Scroll
const scroll = new SmoothScroll('a[href*="#"]', {
    speed: 300,
    speedAsDuration: true
});

// Modal functionality
function openModal(title, description, imgSrc) {
    const modal = document.getElementById('projectModal');
    const modalTitle = modal.querySelector('h2');
    const modalDescription = modal.querySelector('p');
    const modalImg = modal.querySelector('img');

    modalTitle.textContent = title;
    modalDescription.textContent = description;
    modalImg.src = imgSrc;

    modal.style.display = "block";
}

const closeModal = document.querySelector('.close');
closeModal.onclick = function () {
    document.getElementById('projectModal').style.display = "none";
}

window.onclick = function (event) {
    if (event.target === document.getElementById('projectModal')) {
        document.getElementById('projectModal').style.display = "none";
    }
}
