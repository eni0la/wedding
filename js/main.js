const mobileMenuTrigger = document.querySelector("header a.mobile-menu");
const menu = document.querySelector("header nav > ul");
const menuItemWithChildren = document.querySelectorAll(
  "header nav ul li.has-children"
);

mobileMenuTrigger.addEventListener("click", (event) => {
  event.preventDefault();
  menu.classList.toggle("expanded");

  if (menu.classList.contains("expanded")) {
    mobileMenuTrigger.innerHTML = "&#9746;";
  } else {
    mobileMenuTrigger.innerHTML = "&#8801;"; // &#8801;
  }
});

menuItemWithChildren.forEach((item) => {
  item.addEventListener("click", (event) => {
    event.preventDefault();
    const subMenu = event.currentTarget.querySelector("ul");
    subMenu.classList.toggle("expanded");
  });
});
