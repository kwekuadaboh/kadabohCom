// const projectTitle = document.getElementById("project-title");
// const cloneProjectTitle = projectTitle.cloneNode(true);
const projectRevealClose = document.getElementById("project-reveal-close");

// projectRevealClose.prepend(
//   document.getElementById("project-title").cloneNode(true)
// );

const projectRevealOpen = document.querySelector("#project-item-reveal");
const projectTitle = document.querySelector("#project-item-title");
const projectImg = document.querySelector(".projects__img");

const activator = document.querySelector("#activator");

function projectReveal() {
  projectRevealOpen.classList.add("projects__item--shown");
}

function projectClose() {
  projectRevealOpen.classList.remove("projects__item--shown");
}

/* activator.addEventListener("click", function (e) {
  if ((e.currentTarget = projectTitle)) {
    projectReveal();
  } else {
    projectRevealClose.addEventListener("click", projectClose);
  }
}); */

projectTitle.addEventListener("click", projectReveal);
projectImg.addEventListener("click", projectReveal);

projectRevealClose.addEventListener("click", projectClose);

// console.log(stickyAction);
