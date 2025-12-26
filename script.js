const hamburgerIcon = document.querySelector(".hamburger-icon");
const featuredImg = document.querySelector(".featured__img");
const overlay = document.getElementById("overlay");
const nav = document.getElementById("nav");
const closeMenu = document.querySelector(".close");

function openHamburgerMenu() {
  overlay.classList.remove("none");
  nav.classList.add("active");
}

function closeHamburgerMenu() {
  overlay.classList.add("none");
  nav.classList.remove("active");
}

function updateFeaturedImage() {
  const windowWidth = window.innerWidth;
  if (windowWidth >= 768) {
    featuredImg.setAttribute("src", "assets/images/image-web-3-desktop.jpg");
  } else {
    featuredImg.setAttribute("src", "assets/images/image-web-3-mobile.jpg");
  }
  closeHamburgerMenu();
}

window.addEventListener("resize", updateFeaturedImage);
hamburgerIcon.addEventListener("click", openHamburgerMenu);
closeMenu.addEventListener("click", closeHamburgerMenu);
updateFeaturedImage();
