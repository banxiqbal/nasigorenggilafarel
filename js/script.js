// //navbar aktif
const navbarNav = document.querySelector(".navbar-nav");
//ketika tombol hamburger di klik
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};
//ketika tombol search di klik
const searhForm = document.querySelector(".search-form");
const searchBox = document.querySelector("#search-box");
document.querySelector("#search-button").onclick = (e) => {
  searhForm.classList.toggle("active");
  searchBox.focus();
  e.preventDefault();
};
// ketika tombol shopping cart diklik
const shoppingCart = document.querySelector(".shopping-cart");
document.querySelector("#shopping-cart-button").onclick = (e) => {
  shoppingCart.classList.toggle("active");
  e.preventDefault();
};

//klik diluar untuk close elemen

const hm = document.querySelector("#hamburger-menu");
const sb = document.querySelector("#search-button");
const scb = document.querySelector("#shopping-cart-button");
document.addEventListener("click", function (e) {
  //hamburger
  if (!hm.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
  if (!searhForm.contains(e.target) && !sb.contains(e.target)) {
    searhForm.classList.remove("active");
  }
  if (!shoppingCart.contains(e.target) && !scb.contains(e.target)) {
    shoppingCart.classList.remove("active");
  }
});
// modal menu
const itemDetailModal = document.querySelector("#item-detail-modal");
const mdb = document.querySelectorAll(".detail-button");
mdb.forEach((btn) => {
  btn.onclick = (e) => {
    itemDetailModal.style.display = "flex";
    e.preventDefault();
  };
});
// klik tombol close
const closeDetailModal = document.querySelector(".close-menu-detail");
closeDetailModal.onclick = (e) => {
  itemDetailModal.style.display = "none";
  e.preventDefault();
};
//klik diluar modal
window.onclick = (e) => {
  if (e.target === itemDetailModal) {
    itemDetailModal.style.display = "none";
  }
};
