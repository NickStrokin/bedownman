let darkThemeButton = document.querySelector(".theme-button-dark");
let lightThemeButton = document.querySelector(".theme-button-light");
let serifFontButton = document.querySelector(".font-button-serif");
let sansSerifFontButton = document.querySelector(".font-button-sans-serif");
let articleSections = document.querySelectorAll(".blog-article.short");
let tileViewButton = document.querySelector(".card-view-button-grid");
let standardViewButton = document.querySelector(".card-view-button-list");
let cardsList = document.querySelector(".cards");
let mainImage = document.querySelector(".active-photo");
let previews = document.querySelectorAll(".preview-list li a");

for (let activeImage of previews) {
  activeImage.onclick = function (evt) {
    evt.preventDefault();
    mainImage.src = activeImage.href;
    let currentActive = document.querySelector(".preview-list .active-item");
    currentActive.classList.remove("active-item");
    activeImage.classList.add("active-item");
  };
}

standardViewButton.onclick = function () {
  cardsList.classList.add("list");
  standardViewButton.classList.add("active");
  tileViewButton.classList.remove("active");
};
tileViewButton.onclick = function () {
  cardsList.classList.remove("list");
  standardViewButton.classList.remove("active");
  tileViewButton.classList.add("active");
};

for (let articleSection of articleSections) {
  let moreButton = articleSection.querySelector(".more");
  moreButton.onclick = function () {
    articleSection.classList.remove("short");
  };
}

lightThemeButton.onclick = function () {
  document.body.classList.remove("dark");
  darkThemeButton.classList.remove("active");
  lightThemeButton.classList.add("active");
};
darkThemeButton.onclick = function () {
  document.body.classList.add("dark");
  darkThemeButton.classList.add("active");
  lightThemeButton.classList.remove("active");
};

sansSerifFontButton.onclick = function () {
  document.body.classList.remove("serif");
  serifFontButton.classList.remove("active");
  sansSerifFontButton.classList.add("active");
};
serifFontButton.onclick = function () {
  document.body.classList.add("serif");
  serifFontButton.classList.add("active");
  sansSerifFontButton.classList.remove("active");
};
