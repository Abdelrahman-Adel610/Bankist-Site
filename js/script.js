/************** ELEMENTS **************/
let openAccountBtn = document.querySelector("nav ul li:last-child");
let overlay = document.querySelector(".overlay");
let modal = document.querySelector(".modal");
let learnMoreBtn = document.querySelector(".center a");
let featuresNav = document.querySelectorAll("nav a")[0];
let OperationsNav = document.querySelectorAll("nav a")[1];
let TestimonialNav = document.querySelectorAll("nav a")[2];
let featuresSection = document.getElementById("Features");
let OperationsSection = document.getElementById("Operations");
let TestimonialsSection = document.getElementById("Testimonials");
let nav = document.querySelector(".nav");

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
function scrollto(section) {
  console.log(Number.parseFloat(getComputedStyle(nav).height));

  window.scrollTo({
    left: section.getBoundingClientRect().x + window.pageXOffset,
    top:
      section.getBoundingClientRect().y +
      window.pageYOffset -
      Number.parseFloat(getComputedStyle(nav).height),
    behavior: "smooth",
  });
}
/************** EVENTS **************/
openAccountBtn.addEventListener("click", displayModal);
close_Modal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

learnMoreBtn.addEventListener("click", function (e) {
  scrollto(featuresSection);
});
featuresNav.addEventListener("click", function (e) {
  scrollto(featuresSection);
});
OperationsNav.addEventListener("click", function (e) {
  scrollto(OperationsSection);
});
TestimonialNav.addEventListener("click", function (e) {
  scrollto(TestimonialsSection);
});
