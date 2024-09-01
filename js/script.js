/************** ELEMENTS **************/
let openAccountBtn = document.querySelector("nav ul li:last-child");
let overlay = document.querySelector(".overlay");
let modal = document.querySelector(".modal");

let close_Modal = document.querySelector(".modal svg");
/************** UTILITIES **************/
function displayModal() {
  overlay.classList.toggle("hidden");
  modal.classList.toggle("hidden");
}
function closeModal() {
  overlay.classList.toggle("hidden");
  modal.classList.toggle("hidden");
}
/************** EVENTS **************/
openAccountBtn.addEventListener("click", displayModal);
close_Modal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);
