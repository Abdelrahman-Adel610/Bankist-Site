/************** ELEMENTS **************/
let openAccountBtn = document.querySelector("nav ul li:last-child");
let overlay = document.querySelector(".overlay");
let modal = document.querySelector(".modal");
let learnMoreBtn = document.querySelector(".center a");
let openAccBtnFooter = document.querySelector("#OpenAccountNow a");
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
function scrollto(sectionid) {
  let section = document.getElementById(sectionid);
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
openAccBtnFooter.addEventListener("click", displayModal);
close_Modal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

learnMoreBtn.addEventListener("click", function (e) {
  scrollto(featuresSection);
});
nav.addEventListener("click", function (e) {
  let sectionId = e.target.getAttribute("href");
  console.log(sectionId);

  if (sectionId) {
    e.preventDefault();
    scrollto(sectionId.slice(1));
  }
});
