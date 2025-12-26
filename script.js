const featuredImg = document.querySelector(".featured__img");

function updateImage() {
  const windowWidth = window.innerWidth;
  if (windowWidth >= 1024) {
    featuredImg.setAttribute("src", "assets/images/image-web-3-desktop.jpg");
  } else {
    featuredImg.setAttribute("src", "assets/images/image-web-3-mobile.jpg");
  }
}

window.addEventListener("resize", updateImage);
updateImage();
