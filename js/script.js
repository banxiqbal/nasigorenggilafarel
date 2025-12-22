// //navbar aktif
const navbarNav = document.querySelector(".navbar-nav");
//ketika tombol hamburger di klik
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};
// ketika tombol search di klik
const searchForm = document.querySelector(".search-form"); // TAMBAHKAN INI
document.querySelector("#search-button").onclick = (e) => {
  const searchForm = document.querySelector(".search-form");
  const searchBox = document.querySelector("#search-box");
  const searchResults = document.querySelector("#search-results");

  searchForm.classList.toggle("active");

  if (searchForm.classList.contains("active")) {
    searchBox.focus();
    // Kosongkan hasil pencarian sebelumnya
    if (searchResults) {
      searchResults.innerHTML = "";
      searchResults.classList.remove("active");
    }
  } else {
    if (searchResults) {
      searchResults.classList.remove("active");
    }
  }
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
  // Perbaiki pengecekan searchForm
  if (searchForm && !searchForm.contains(e.target) && !sb.contains(e.target)) {
    searchForm.classList.remove("active");
  }
  if (!shoppingCart.contains(e.target) && !scb.contains(e.target)) {
    shoppingCart.classList.remove("active");
  }
});

//seacrh
document.addEventListener("alpine:init", () => {
  // Tunggu hingga products data siap
  setTimeout(() => {
    const productsComponent = document.querySelector('[x-data="products"]');
    if (productsComponent && Alpine.$data(productsComponent)) {
      const productsData = Alpine.$data(productsComponent);
      Alpine.store("productsData").setItems(productsData.items);
    }
  }, 500);
});
