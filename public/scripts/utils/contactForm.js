// DOM Elements
const modal = document.querySelector(".contact");
const btnCloseModal = document.querySelector(".contact__content__close");
const inputFirstname = document.getElementById("prenom");

function disableScroll() {
    document.body.classList.add("stop-scrolling");
}

function enableScroll() {
    document.body.classList.remove("stop-scrolling");
}

function displayModal() {
    modal.style.display = "block";
    inputFirstname.focus()
    disableScroll();
    trapFocusContact();
}

function closeModal() {
    modal.style.display = "none";
    enableScroll();
}

btnCloseModal.addEventListener("click", closeModal);

