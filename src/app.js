document.addEventListener("alpine:init", () => {
  Alpine.data("products", () => ({
    search: "",
    limit: 6,
    showAll: false,
    items: [
      { id: 1, name: "Nasi Goreng Gila ", img: "1.jpg", price: 22000, deskripsi: "Nasi Goreng dengan toping ayam baso sosis telur dan sayuran" },
      { id: 2, name: "Mie Goreng Gila", img: "2.jpg", price: 22000, deskripsi: "Mie Goreng dengan toping ayam baso sosis telur dan sayuran" },
      { id: 3, name: "Kwetiau Goreng Gila", img: "3.jpg", price: 22000, deskripsi: "Kwetiau Goreng dengan toping ayam baso sosis telur dan sayuran" },
      { id: 4, name: "Bihun Goreng Gila ", img: "4.jpg", price: 22000, deskripsi: "Bihun Goreng dengan toping ayam baso sosis telur dan sayuran" },
      { id: 5, name: "Capcay Goreng Gila", img: "5.jpg", price: 23000, deskripsi: "Capcay Goreng dengan toping ayam baso sosis telur dan sayuran" },
      { id: 6, name: "Capcay Rebus Komplit", img: "6.jpg", price: 23000, deskripsi: "Capcay Rebus dengan isian ayam baso sosis telur ati ampela" },
      { id: 7, name: "Nasi Goreng Ati Ampela ", img: "1.jpg", price: 20000, deskripsi: "Nasi Goreng dengan isian telur ayam dan ati ampela" },
      { id: 8, name: "Nasi Goreng Baso", img: "2.jpg", price: 16000, deskripsi: "Nasi Goreng dengan isian telur ayam dan baso" },
      { id: 9, name: "Nasi Goreng Sosis", img: "3.jpg", price: 16000, deskripsi: "Nasi Goreng dengan isian telur ayam dan sosis" },
      { id: 10, name: "Nasi Goreng Spesial", img: "4.jpg", price: 17000, deskripsi: "Nasi Goreng dengan isian telur ayam dan sosis baso" },
      { id: 11, name: "Nasi Goreng Mawud", img: "5.jpg", price: 18000, deskripsi: "Nasi Goreng dicampur dengan mie. 'opsi (kwetiau / bihun)'" },
      { id: 12, name: "Nasi Gila", img: "6.jpg", price: 18000, deskripsi: "Nasi Putih dengan toping ayam baso sosis telur dan sayuran" },
      { id: 13, name: "Nasi Goreng ikan teri", img: "1.jpg", price: 18000, deskripsi: "Nasi Goreng dengan isian telur ayam dan ikan teri medan" },
      { id: 14, name: "Nasi Goreng Pete", img: "2.jpg", price: 20000, deskripsi: "Nasi Goreng dengan isian telur ayam dan pete" },
      { id: 15, name: "Nasi Goreng Biasa", img: "3.jpg", price: 15000, deskripsi: "Nasi Goreng dengan isian telur ayam " },
      { id: 16, name: "Nasi Goreng Seafood", img: "4.jpg", price: 32000, deskripsi: "Nasi Goreng dengan isian telur ayam udang dan cumi" },
      { id: 17, name: "Mie Goreng Ati Ampela ", img: "5.jpg", price: 20000, deskripsi: "Mie Goreng dengan isian telur ayam dan ati ampela" },
      { id: 18, name: "Mie Goreng Baso", img: "6.jpg", price: 16000, deskripsi: "Mie Goreng dengan isian telur ayam dan baso" },
      { id: 19, name: "Mie Goreng Sosis", img: "1.jpg", price: 16000, deskripsi: "Mie Goreng dengan isian telur ayam dan sosis" },
      { id: 20, name: "Mie Goreng Spesial", img: "2.jpg", price: 17000, deskripsi: "Mie Goreng dengan isian telur ayam dan sosis baso" },
      { id: 21, name: "Mie Goreng Mawud", img: "3.jpg", price: 18000, deskripsi: "Mie Goreng dicampur dengan mie. 'opsi (kwetiau / bihun)'" },
      { id: 22, name: "Mie Goreng ikan teri", img: "4.jpg", price: 18000, deskripsi: "Mie Goreng dengan isian telur ayam dan ikan teri medan" },
      { id: 23, name: "Mie Goreng Pete", img: "5.jpg", price: 20000, deskripsi: "Mie Goreng dengan isian telur ayam dan pete" },
      { id: 24, name: "Mie Goreng Biasa", img: "6.jpg", price: 15000, deskripsi: "Mie Goreng dengan isian telur ayam " },
      { id: 25, name: "Mie Goreng Seafood", img: "1.jpg", price: 32000, deskripsi: "Mie Goreng dengan isian telur ayam udang dan cumi" },
      { id: 26, name: "Kwetiau Goreng Ati Ampela ", img: "2.jpg", price: 20000, deskripsi: "Kwetiau Goreng dengan isian telur ayam dan ati ampela" },
      { id: 27, name: "Kwetiau Goreng Baso", img: "3.jpg", price: 16000, deskripsi: "Kwetiau Goreng dengan isian telur ayam dan baso" },
      { id: 28, name: "Kwetiau Goreng Sosis", img: "4.jpg", price: 16000, deskripsi: "Kwetiau Goreng dengan isian telur ayam dan sosis" },
      { id: 29, name: "Kwetiau Goreng Spesial", img: "5.jpg", price: 17000, deskripsi: "Kwetiau Goreng dengan isian telur ayam dan sosis baso" },
      { id: 30, name: "Kwetiau Goreng Mawud", img: "6.jpg", price: 18000, deskripsi: "Kwetiau Goreng dicampur dengan Kwetiau. 'opsi (kwetiau / bihun)'" },
      { id: 31, name: "Kwetiau Goreng ikan teri", img: "1.jpg", price: 18000, deskripsi: "Kwetiau Goreng dengan isian telur ayam dan ikan teri medan" },
      { id: 32, name: "Kwetiau Goreng Pete", img: "2.jpg", price: 20000, deskripsi: "Kwetiau Goreng dengan isian telur ayam dan pete" },
      { id: 33, name: "Kwetiau Goreng Biasa", img: "3.jpg", price: 15000, deskripsi: "Kwetiau Goreng dengan isian telur ayam " },
      { id: 34, name: "Kwetiau Goreng Seafood", img: "4.jpg", price: 32000, deskripsi: "Kwetiau Goreng dengan isian telur ayam udang dan cumi" },
      { id: 35, name: "Bihun Goreng Ati Ampela ", img: "5.jpg", price: 20000, deskripsi: "Bihun Goreng dengan isian telur ayam dan ati ampela" },
      { id: 36, name: "Bihun Goreng Baso", img: "6.jpg", price: 16000, deskripsi: "Bihun Goreng dengan isian telur ayam dan baso" },
      { id: 37, name: "Bihun Goreng Sosis", img: "1.jpg", price: 16000, deskripsi: "Bihun Goreng dengan isian telur ayam dan sosis" },
      { id: 38, name: "Bihun Goreng Spesial", img: "2.jpg", price: 17000, deskripsi: "Bihun Goreng dengan isian telur ayam dan sosis baso" },
      { id: 39, name: "Bihun Goreng Mawud", img: "3.jpg", price: 18000, deskripsi: "Bihun Goreng dicampur dengan Bihun. 'opsi (kwetiau / bihun)'" },
      { id: 40, name: "Bihun Goreng ikan teri", img: "4.jpg", price: 18000, deskripsi: "Bihun Goreng dengan isian telur ayam dan ikan teri medan" },
      { id: 41, name: "Bihun Goreng Pete", img: "5.jpg", price: 20000, deskripsi: "Bihun Goreng dengan isian telur ayam dan pete" },
      { id: 42, name: "Bihun Goreng Biasa", img: "6.jpg", price: 15000, deskripsi: "Bihun Goreng dengan isian telur ayam " },
      { id: 43, name: "Bihun Goreng Seafood", img: "1.jpg", price: 32000, deskripsi: "Bihun Goreng dengan isian telur ayam udang dan cumi" },
      { id: 44, name: "Capcay Goreng/ Rebus Ati Ampela ", img: "2.jpg", price: 20000, deskripsi: "Capcay Goreng/ Rebus dengan isian telur ayam dan ati ampela" },
      { id: 45, name: "Capcay Goreng/ Rebus Baso", img: "3.jpg", price: 16000, deskripsi: "Capcay Goreng/ Rebus dengan isian telur ayam dan baso" },
      { id: 46, name: "Capcay Goreng/ Rebus Sosis", img: "4.jpg", price: 16000, deskripsi: "Capcay Goreng/ Rebus dengan isian telur ayam dan sosis" },
      { id: 47, name: "Capcay Goreng/ Rebus Spesial", img: "5.jpg", price: 17000, deskripsi: "Capcay Goreng/ Rebus dengan isian telur ayam dan sosis baso" },
      { id: 48, name: "Capcay Goreng/ Rebus Mawud", img: "6.jpg", price: 18000, deskripsi: "Capcay Goreng/ Rebus dicampur dengan Capcay. 'opsi/ Rebus (kwetiau / bihun)'" },
      { id: 49, name: "Capcay Goreng/ Rebus ikan teri", img: "1.jpg", price: 18000, deskripsi: "Capcay Goreng/ Rebus dengan isian telur ayam dan ikan teri medan" },
      { id: 50, name: "Capcay Goreng/ Rebus Pete", img: "2.jpg", price: 20000, deskripsi: "Capcay Goreng/ Rebus dengan isian telur ayam dan pete" },
      { id: 51, name: "Capcay Goreng/ Rebus Biasa", img: "3.jpg", price: 15000, deskripsi: "Capcay Goreng/ Rebus dengan isian telur ayam " },
      { id: 52, name: "Capcay Goreng/ Rebus Seafood", img: "4.jpg", price: 32000, deskripsi: "Capcay Goreng/ Rebus dengan isian telur ayam udang dan cumi" },
    ],
    get visibleItems() {
      return this.showAll ? this.items : this.items.slice(0, this.limit);
    },
    toggleShow() {
      this.showAll = !this.showAll;
    },
    // Tambahkan computed property untuk search
    searchResults(query) {
      if (!query || query.trim() === "") {
        return [];
      }
      const searchTerm = query.toLowerCase();
      return this.items.filter((item) => item.name.toLowerCase().includes(searchTerm) || item.deskripsi.toLowerCase().includes(searchTerm));
    },
  }));

  // Store untuk menyimpan products data global
  Alpine.store("productsData", {
    items: [], // Akan diisi nanti
    setItems(newItems) {
      this.items = newItems;
    },
  });

  //keranjang
  Alpine.store("cart", {
    items: [],
    total: 0,
    quantity: 0,
    add(newItem) {
      const cartItem = this.items.find((item) => item.id === newItem.id);
      if (!cartItem) {
        this.items.push({ ...newItem, quantity: 1, total: newItem.price });
        this.quantity++;
        this.total += newItem.price;
      } else {
        this.items = this.items.map((item) => {
          if (item.id !== newItem.id) {
            return item;
          } else {
            item.quantity++;
            item.total = item.price * item.quantity;
            this.quantity++;
            this.total += item.price;
            return item;
          }
        });
      }
    },
    remove(id) {
      const cartItem = this.items.find((item) => item.id === id);

      if (cartItem.quantity > 1) {
        this.items = this.items.map((item) => {
          if (item.id !== id) {
            return item;
          } else {
            item.quantity--;
            item.total = item.price * item.quantity;
            this.quantity--;
            this.total -= item.price;
            return item;
          }
        });
      } else if (cartItem.quantity === 1) {
        this.items = this.items.filter((item) => item.id !== id);
        this.quantity--;
        this.total -= cartItem.price;
      }
    },
  });

  //untuk modal
  Alpine.store("productModal", {
    show: false,
    selectedItem: {},
    open(item) {
      this.selectedItem = item;
      this.show = true;
    },
    close() {
      this.show = false;
      this.selectedItem = {};
    },
  });
});

// --- FUNGSI PENCARIAN ---

// Fungsi pencarian
function searchMenu(query) {
  if (!query || query.trim() === "") {
    return [];
  }

  const searchTerm = query.toLowerCase();
  let items = [];

  if (window.Alpine && Alpine.store("productsData") && Alpine.store("productsData").items) {
    items = Alpine.store("productsData").items;
  } else {
    const productsElement = document.querySelector('[x-data="products"]');
    if (productsElement && Alpine.$data(productsElement)) {
      items = Alpine.$data(productsElement).items || [];
    }
  }

  return items.filter((item) => {
    return item.name.toLowerCase().includes(searchTerm) || item.deskripsi.toLowerCase().includes(searchTerm);
  });
}

// Fungsi untuk memastikan semua item ditampilkan
function ensureAllItemsVisible() {
  const productsElement = document.querySelector('[x-data="products"]');
  if (productsElement && Alpine.$data(productsElement)) {
    const products = Alpine.$data(productsElement);

    if (!products.showAll) {
      console.log("Mengaktifkan showAll untuk menampilkan semua menu...");

      // Gunakan Alpine.js untuk update state
      products.showAll = true;

      // Paksa update dengan dispatch event
      const event = new CustomEvent("alpine-update", { detail: { showAll: true } });
      productsElement.dispatchEvent(event);

      // Juga update tombol show more jika ada
      const showMoreButton = document.querySelector(".tombol-show");
      if (showMoreButton) {
        // Update teks tombol
        const span = showMoreButton.querySelector("span");
        if (span) {
          span.textContent = "Show Less...";
        }
      }

      return true;
    }
  }
  return false;
}

// Fungsi untuk highlight menu item
function highlightMenuItem(element) {
  if (!element) return;

  // Gunakan class-based highlight
  element.classList.add("search-highlight");

  // Juga tambahkan style inline untuk backup
  element.style.boxShadow = "0 0 40px rgba(181, 0, 0, 0.9)";
  element.style.border = "3px solid var(--primary)";
  element.style.transition = "all 0.5s ease";

  // Hapus setelah 3 detik
  setTimeout(() => {
    element.classList.remove("search-highlight");
    element.style.boxShadow = "";
    element.style.border = "";
  }, 3000);
}

// Fungsi utama untuk scroll ke menu
function scrollToMenu(menuId) {
  console.log("Mencari menu dengan ID:", menuId);

  // Pastikan semua item ditampilkan terlebih dahulu
  const changed = ensureAllItemsVisible();

  // Delay berbeda berdasarkan apakah ada perubahan
  const delay = changed ? 1000 : 500;

  setTimeout(() => {
    // Coba dengan berbagai cara
    let element = null;

    // Cara 1: Cari dengan ID langsung
    element = document.getElementById(`product-${menuId}`);

    // Cara 2: Jika tidak ditemukan, cari manual di semua card
    if (!element) {
      console.log("Mencari dengan cara manual...");
      const allCards = document.querySelectorAll(".menu-card");
      for (const card of allCards) {
        // Cek data-id attribute jika ada
        if (card.getAttribute("data-id") === menuId.toString()) {
          element = card;
          break;
        }
        // Cek apakah ID mengandung angka menu
        if (card.id && card.id.includes(menuId)) {
          element = card;
          break;
        }
      }
    }

    // Cara 3: Cari berdasarkan data Alpine
    if (!element) {
      const productsElement = document.querySelector('[x-data="products"]');
      if (productsElement && Alpine.$data(productsElement)) {
        const products = Alpine.$data(productsElement);
        const item = products.items.find((item) => item.id === menuId);
        if (item) {
          // Cari element yang mengandung nama item
          const allCards = document.querySelectorAll(".menu-card");
          for (const card of allCards) {
            const title = card.querySelector("h3");
            if (title && title.textContent.includes(item.name)) {
              element = card;
              break;
            }
          }
        }
      }
    }

    if (element) {
      console.log("Menu ditemukan, melakukan scroll...", element);

      // Scroll ke element dengan offset untuk navbar
      const navbarHeight = document.querySelector(".navbar").offsetHeight || 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navbarHeight - 20;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });

      // Highlight efek
      highlightMenuItem(element);

      // Tambahkan kelas active sementara
      element.classList.add("search-highlight");
      setTimeout(() => {
        element.classList.remove("search-highlight");
      }, 3000);
    } else {
      console.log("Menu tidak ditemukan setelah pencarian menyeluruh");

      // Scroll ke section menu sebagai fallback
      const menuSection = document.getElementById("menu");
      if (menuSection) {
        const navbarHeight = document.querySelector(".navbar").offsetHeight || 80;
        const sectionPosition = menuSection.getBoundingClientRect().top;
        const offsetPosition = sectionPosition + window.pageYOffset - navbarHeight;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });

        // Tampilkan pesan
        setTimeout(() => {
          // Cari item untuk mendapatkan nama
          const productsElement = document.querySelector('[x-data="products"]');
          if (productsElement && Alpine.$data(productsElement)) {
            const products = Alpine.$data(productsElement);
            const item = products.items.find((item) => item.id === menuId);
            if (item) {
              alert(`Menu "${item.name}" telah ditampilkan. Silakan lihat di daftar menu.`);
            }
          }
        }, 1000);
      }
    }
  }, delay);
}

// Fungsi untuk menampilkan hasil pencarian
function displaySearchResults(results) {
  const searchResults = document.getElementById("search-results");
  if (!searchResults) return;

  searchResults.innerHTML = "";

  if (results.length === 0) {
    searchResults.innerHTML = '<div class="search-result-item">Tidak ada hasil ditemukan</div>';
    searchResults.classList.add("active");
    return;
  }

  results.forEach((item) => {
    const resultItem = document.createElement("div");
    resultItem.className = "search-result-item";
    resultItem.innerHTML = `
      <div class="search-result-content">
        <h4>${item.name}</h4>
        <p>${rupiah(item.price)}</p>
        <small class="search-hint">Klik untuk melihat menu</small>
      </div>
      <i data-feather="chevron-right"></i>
    `;

    resultItem.addEventListener("click", function () {
      const searchForm = document.querySelector(".search-form");
      if (searchForm) searchForm.classList.remove("active");
      const searchBox = document.getElementById("search-box");
      if (searchBox) searchBox.value = "";
      searchResults.classList.remove("active");

      scrollToMenu(item.id);
    });

    searchResults.appendChild(resultItem);
  });

  feather.replace();
  searchResults.classList.add("active");
}

// Inisialisasi search form setelah DOM siap
document.addEventListener("DOMContentLoaded", function () {
  const searchBox = document.getElementById("search-box");
  const searchResults = document.getElementById("search-results");

  if (searchBox) {
    let debounceTimer;

    searchBox.addEventListener("input", function (e) {
      clearTimeout(debounceTimer);

      debounceTimer = setTimeout(() => {
        const query = e.target.value.trim();

        if (searchResults) {
          searchResults.innerHTML = "";
          searchResults.classList.remove("active");
        }

        if (query.length > 0) {
          const results = searchMenu(query);
          displaySearchResults(results);
        }
      }, 300);
    });

    // Enter untuk langsung ke item pertama
    searchBox.addEventListener("keypress", function (e) {
      if (e.key === "Enter") {
        e.preventDefault();
        const query = e.target.value.trim();
        if (query.length > 0) {
          const results = searchMenu(query);
          if (results.length > 0) {
            const searchForm = document.querySelector(".search-form");
            if (searchForm) searchForm.classList.remove("active");
            searchBox.value = "";
            if (searchResults) {
              searchResults.innerHTML = "";
              searchResults.classList.remove("active");
            }

            // Langsung scroll ke item pertama
            scrollToMenu(results[0].id);
          }
        }
      }
    });

    // Tutup hasil pencarian ketika klik di luar
    document.addEventListener("click", function (e) {
      if (searchResults && !searchBox.contains(e.target) && !searchResults.contains(e.target)) {
        searchResults.classList.remove("active");
      }
    });
  }

  // Inisialisasi products data ke store
  setTimeout(() => {
    const productsElement = document.querySelector('[x-data="products"]');
    if (productsElement && Alpine.$data(productsElement)) {
      const productsData = Alpine.$data(productsElement);
      if (Alpine.store("productsData")) {
        Alpine.store("productsData").setItems(productsData.items || []);
        console.log("Data produk diinisialisasi:", productsData.items.length, "item");
      }
    }
  }, 1500);
});

// --- FUNGSI CHECKOUT DAN KONTAK ---

const rupiah = (number) => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(number);
};

// Validasi form checkout
const checkOutButton = document.querySelector("#checkout-button");
const form = document.querySelector("#checkoutForm");

if (checkOutButton) {
  checkOutButton.disabled = true;
}

const checkFormValidity = () => {
  let allFieldsFilled = true;
  const nameInput = form.querySelector("#name")?.value || "";
  const emailInput = form.querySelector("#email")?.value || "";
  const phoneInput = form.querySelector("#phone")?.value || "";

  if (nameInput.length === 0 || emailInput.length === 0 || phoneInput.length === 0) {
    allFieldsFilled = false;
  }

  if (checkOutButton) {
    checkOutButton.disabled = !allFieldsFilled;
    if (allFieldsFilled) {
      checkOutButton.classList.remove("disabled");
    } else {
      checkOutButton.classList.add("disabled");
    }
  }
};

if (form) {
  form.addEventListener("input", checkFormValidity);
}

if (checkOutButton && form) {
  checkOutButton.addEventListener("click", function (e) {
    e.preventDefault();
    const formData = new FormData(form);
    const data = new URLSearchParams(formData);

    const objData = Object.fromEntries(data);
    const message = formatMessage(objData);
    window.open("https://wa.me/62895800365761?text=" + encodeURIComponent(message));
  });
}

const formatMessage = (obj) => {
  return `Data Customer
 Nama: ${obj.name}
 Email: ${obj.email}
 Phone: ${obj.phone}
 Data Pesanan
 ${JSON.parse(obj.items)
   .map((item) => `${item.name} (${item.quantity} x ${rupiah(item.total)})`)
   .join("\n        ")}
 TOTAL: ${rupiah(obj.total)}
Terimkasih `;
};

// Contact form
const contactForm = document.querySelector("#contactForm");

if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("nama")?.value.trim() || "";
    const email = document.getElementById("email")?.value.trim() || "";
    const phone = document.getElementById("nomor")?.value.trim() || "";
    const message = document.getElementById("message")?.value.trim() || "";

    const phoneNumber = "62895800365761";

    const whatsappMessage = `Halo, saya ingin mengirim pesan melalui form kontak:
    Nama: ${name}
    Email: ${email}
    No HP: ${phone}
    Pesan: ${message}`;

    const encodedMessage = encodeURIComponent(whatsappMessage);
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappURL, "_blank");
  });
}
