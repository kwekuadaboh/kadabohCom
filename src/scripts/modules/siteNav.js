/// hightlight current selected li

const currentLocation = location.href;
const menuItem = document.querySelectorAll(".nav__link");
const menuLength = menuItem.length;
for (var i = 0; i < menuLength; i++) {
  if (menuItem[i].href === currentLocation) {
    menuItem[i].classList.add("active");
  }
}
console.log("from sitNav.js");
