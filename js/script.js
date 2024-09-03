/************** ELEMENTS **************/
let openAccountBtn = document.querySelector("nav ul li:last-child");
let overlay = document.querySelector(".overlay");
let modal = document.querySelector(".modal");
let learnMoreBtn = document.querySelector(".center a");
let openAccBtnFooter = document.querySelector("#OpenAccountNow a");
let nav = document.querySelector(".nav");
let navBar = document.querySelector("nav");

let close_Modal = document.querySelector(".modal svg");
let operationsContainer = document.querySelector(".lables");
let operations = document.querySelectorAll(".lables div");
let msgs = document.querySelectorAll(".msg");
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

  window.scrollTo({
    left: section.getBoundingClientRect().x + window.scrollX,
    top:
      section.getBoundingClientRect().y +
      window.scrollY -
      Number.parseFloat(getComputedStyle(nav).height),
    behavior: "smooth",
  });
}
function changeNavOpacity(e) {
  let element = e.target;

  if (element.closest("li")) {
    let parent = e.target.closest(".nav");
    let links = parent.querySelectorAll("li");
    let logo = parent.querySelector(".logo");
    links.forEach((el) => {
      if (el !== element.closest("li")) el.style.opacity = `${this}`;
    });
    logo.style.opacity = `${this}`;
  }
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
  if (sectionId) {
    e.preventDefault();
    scrollto(sectionId.slice(1));
  }
});
operationsContainer.addEventListener("click", function (e) {
  if (e.target.classList.contains("btn")) {
    operations.forEach((op) => op.classList.remove("active"));
    e.target.classList.add("active");
    msgs.forEach(
      (msg) => !msg.classList.contains("hidden") && msg.classList.add("hidden")
    );
    document
      .querySelector(`.msg--${e.target.dataset.slide}`)
      .classList.remove("hidden");
  }
});
nav.addEventListener("mouseover", changeNavOpacity.bind(0.5));
nav.addEventListener("mouseout", changeNavOpacity.bind(1));
let navAnimation = function (enteries) {
  let header = enteries[0];
  navBar.classList.toggle("sticky", !header.isIntersecting);
};

let observer = new IntersectionObserver(navAnimation, {
  root: null,
  threshold: 0,
  rootMargin: `-${navBar.getBoundingClientRect().height}px`,
});
observer.observe(document.getElementById("header"));
