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
      { id: 7, name: "Nasi Goreng Ati Ampela ", img: "7.jpg", price: 20000, deskripsi: "Nasi Goreng dengan isian telur ayam dan ati ampela" },
      { id: 8, name: "Nasi Goreng Baso", img: "8.jpg", price: 16000, deskripsi: "Nasi Goreng dengan isian telur ayam dan baso" },
      { id: 9, name: "Nasi Goreng Sosis", img: "9.jpg", price: 16000, deskripsi: "Nasi Goreng dengan isian telur ayam dan sosis" },
      { id: 10, name: "Nasi Goreng Spesial", img: "10.jpg", price: 17000, deskripsi: "Nasi Goreng dengan isian telur ayam dan sosis baso" },
      { id: 11, name: "Nasi Goreng Mawud", img: "11.jpg", price: 18000, deskripsi: "Nasi Goreng dicampur dengan mie. 'opsi (kwetiau / bihun)'" },
      { id: 12, name: "Nasi Gila", img: "12.jpg", price: 18000, deskripsi: "Nasi Putih dengan toping ayam baso sosis telur dan sayuran" },
      { id: 13, name: "Nasi Goreng ikan teri", img: "13.jpg", price: 18000, deskripsi: "Nasi Goreng dengan isian telur ayam dan ikan teri medan" },
      { id: 14, name: "Nasi Goreng Pete", img: "14.jpg", price: 20000, deskripsi: "Nasi Goreng dengan isian telur ayam dan pete" },
      { id: 15, name: "Nasi Goreng Biasa", img: "15.jpg", price: 15000, deskripsi: "Nasi Goreng dengan isian telur ayam " },
      { id: 16, name: "Nasi Goreng Seafood", img: "16.jpg", price: 32000, deskripsi: "Nasi Goreng dengan isian telur ayam udang dan cumi" },
      { id: 17, name: "Mie Goreng Ati Ampela ", img: "17.jpg", price: 20000, deskripsi: "Mie Goreng dengan isian telur ayam dan ati ampela" },
      { id: 18, name: "Mie Goreng Baso", img: "18.jpg", price: 16000, deskripsi: "Mie Goreng dengan isian telur ayam dan baso" },
      { id: 19, name: "Mie Goreng Sosis", img: "19.jpg", price: 16000, deskripsi: "Mie Goreng dengan isian telur ayam dan sosis" },
      { id: 20, name: "Mie Goreng Spesial", img: "20.jpg", price: 17000, deskripsi: "Mie Goreng dengan isian telur ayam dan sosis baso" },
      { id: 21, name: "Mie Goreng Mawud", img: "21.jpg", price: 18000, deskripsi: "Mie Goreng dicampur dengan mie. 'opsi (kwetiau / bihun)'" },
      { id: 22, name: "Mie Goreng ikan teri", img: "22.jpg", price: 18000, deskripsi: "Mie Goreng dengan isian telur ayam dan ikan teri medan" },
      { id: 23, name: "Mie Goreng Pete", img: "23.jpg", price: 20000, deskripsi: "Mie Goreng dengan isian telur ayam dan pete" },
      { id: 24, name: "Mie Goreng Biasa", img: "24.jpg", price: 15000, deskripsi: "Mie Goreng dengan isian telur ayam " },
      { id: 25, name: "Mie Goreng Seafood", img: "25.jpg", price: 32000, deskripsi: "Mie Goreng dengan isian telur ayam udang dan cumi" },
      { id: 26, name: "Kwetiau Goreng Ati Ampela ", img: "26.jpg", price: 20000, deskripsi: "Kwetiau Goreng dengan isian telur ayam dan ati ampela" },
      { id: 27, name: "Kwetiau Goreng Baso", img: "27.jpg", price: 16000, deskripsi: "Kwetiau Goreng dengan isian telur ayam dan baso" },
      { id: 28, name: "Kwetiau Goreng Sosis", img: "28.jpg", price: 16000, deskripsi: "Kwetiau Goreng dengan isian telur ayam dan sosis" },
      { id: 29, name: "Kwetiau Goreng Spesial", img: "29.jpg", price: 17000, deskripsi: "Kwetiau Goreng dengan isian telur ayam dan sosis baso" },
      { id: 30, name: "Kwetiau Goreng Mawud", img: "30.jpg", price: 18000, deskripsi: "Kwetiau Goreng dicampur dengan Kwetiau. 'opsi (kwetiau / bihun)'" },
      { id: 31, name: "Kwetiau Goreng ikan teri", img: "31.jpg", price: 18000, deskripsi: "Kwetiau Goreng dengan isian telur ayam dan ikan teri medan" },
      { id: 32, name: "Kwetiau Goreng Pete", img: "32.jpg", price: 20000, deskripsi: "Kwetiau Goreng dengan isian telur ayam dan pete" },
      { id: 33, name: "Kwetiau Goreng Biasa", img: "33.jpg", price: 15000, deskripsi: "Kwetiau Goreng dengan isian telur ayam " },
      { id: 34, name: "Kwetiau Goreng Seafood", img: "34.jpg", price: 32000, deskripsi: "Kwetiau Goreng dengan isian telur ayam udang dan cumi" },
      { id: 35, name: "Bihun Goreng Ati Ampela ", img: "35.jpg", price: 20000, deskripsi: "Bihun Goreng dengan isian telur ayam dan ati ampela" },
      { id: 36, name: "Bihun Goreng Baso", img: "36.jpg", price: 16000, deskripsi: "Bihun Goreng dengan isian telur ayam dan baso" },
      { id: 37, name: "Bihun Goreng Sosis", img: "37.jpg", price: 16000, deskripsi: "Bihun Goreng dengan isian telur ayam dan sosis" },
      { id: 38, name: "Bihun Goreng Spesial", img: "38.jpg", price: 17000, deskripsi: "Bihun Goreng dengan isian telur ayam dan sosis baso" },
      { id: 39, name: "Bihun Goreng Mawud", img: "39.jpg", price: 18000, deskripsi: "Bihun Goreng dicampur dengan Bihun. 'opsi (kwetiau / bihun)'" },
      { id: 40, name: "Bihun Goreng ikan teri", img: "40.jpg", price: 18000, deskripsi: "Bihun Goreng dengan isian telur ayam dan ikan teri medan" },
      { id: 41, name: "Bihun Goreng Pete", img: "41.jpg", price: 20000, deskripsi: "Bihun Goreng dengan isian telur ayam dan pete" },
      { id: 42, name: "Bihun Goreng Biasa", img: "42.jpg", price: 15000, deskripsi: "Bihun Goreng dengan isian telur ayam " },
      { id: 43, name: "Bihun Goreng Seafood", img: "43.jpg", price: 32000, deskripsi: "Bihun Goreng dengan isian telur ayam udang dan cumi" },
      { id: 44, name: "Capcay Goreng/ Rebus Ati Ampela ", img: "44.jpg", price: 20000, deskripsi: "Capcay Goreng/ Rebus dengan isian telur ayam dan ati ampela" },
      { id: 45, name: "Capcay Goreng/ Rebus Baso", img: "45.jpg", price: 16000, deskripsi: "Capcay Goreng/ Rebus dengan isian telur ayam dan baso" },
      { id: 46, name: "Capcay Goreng/ Rebus Sosis", img: "46.jpg", price: 16000, deskripsi: "Capcay Goreng/ Rebus dengan isian telur ayam dan sosis" },
      { id: 47, name: "Capcay Goreng/ Rebus Spesial", img: "47.jpg", price: 17000, deskripsi: "Capcay Goreng/ Rebus dengan isian telur ayam dan sosis baso" },
      { id: 48, name: "Capcay Goreng/ Rebus Mawud", img: "48.jpg", price: 18000, deskripsi: "Capcay Goreng/ Rebus dicampur dengan Capcay. 'opsi/ Rebus (kwetiau / bihun)'" },
      { id: 49, name: "Capcay Goreng/ Rebus ikan teri", img: "49.jpg", price: 18000, deskripsi: "Capcay Goreng/ Rebus dengan isian telur ayam dan ikan teri medan" },
      { id: 50, name: "Capcay Goreng/ Rebus Pete", img: "50.jpg", price: 20000, deskripsi: "Capcay Goreng/ Rebus dengan isian telur ayam dan pete" },
      { id: 51, name: "Capcay Goreng/ Rebus Biasa", img: "51.jpg", price: 15000, deskripsi: "Capcay Goreng/ Rebus dengan isian telur ayam " },
      { id: 52, name: "Capcay Goreng/ Rebus Seafood", img: "52.jpg", price: 32000, deskripsi: "Capcay Goreng/ Rebus dengan isian telur ayam udang dan cumi" },
    ],
    get visibleItems() {
      return this.showAll ? this.items : this.items.slice(0, this.limit);
    },
    toggleShow() {
      this.showAll = !this.showAll;
    },
  }));
  //keranjang
  Alpine.store("cart", {
    items: [],
    total: 0,
    quantity: 0,
    add(newItem) {
      //cek apakah ada barang yang sama dicart
      const cartItem = this.items.find((item) => item.id === newItem.id); //jika belum ada/cart masih kosong
      if (!cartItem) {
        this.items.push({ ...newItem, quantity: 1, total: newItem.price });
        this.quantity++;
        this.total += newItem.price;
      } else {
        //jika barang sudah ada, cek apakah barang beda atau sama dengan yang ada dicart
        this.items = this.items.map((item) => {
          //jika barang berbeda
          if (item.id !== newItem.id) {
            return item;
          } else {
            //jika barang sudah ada, tambah quantity dan totalnya
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
      //ambil item yang mau di hapus berdasarkan id
      const cartItem = this.items.find((item) => item.id === id); //jika item > 1

      if (cartItem.quantity > 1) {
        //telusuri per item
        this.items = this.items.map((item) => {
          //jika bukan barang yang di klik
          if (item.id !== id) {
            return item;
          } else {
            //jika item tersebut di click
            item.quantity--;
            item.total = item.price * item.quantity;
            this.quantity--;
            this.total -= item.price;
            return item;
          }
        });
      } else if (cartItem.quantity === 1) {
        //jika barang sisa 1
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
      this.selectedItem = {}; // Opsional, untuk membersihkan data
    },
  });
  //konversi uang
  // Alpine.magic("rupiah", () => rupiah);
});
// --- KOREKSI: PENGGUNAAN ID & LOGIKA VALIDASI ---

// Gunakan ID agar konsisten, dan berikan fallback jika form/button belum ada di DOM
const checkOutButton = document.querySelector("#checkout-button");
const form = document.querySelector("#checkoutForm");

if (checkOutButton) {
  checkOutButton.disabled = true; // Set default disabled
}

// Fungsi validasi yang benar
const checkFormValidity = () => {
  let allFieldsFilled = true;
  // Cek semua input yang relevan
  const nameInput = form.querySelector("#name")?.value || "";
  const emailInput = form.querySelector("#email")?.value || "";
  const phoneInput = form.querySelector("#phone")?.value || "";

  // Cek apakah semua terisi
  if (nameInput.length === 0 || emailInput.length === 0 || phoneInput.length === 0) {
    allFieldsFilled = false;
  }

  // Update status tombol
  if (checkOutButton) {
    checkOutButton.disabled = !allFieldsFilled;
    if (allFieldsFilled) {
      checkOutButton.classList.remove("disabled");
    } else {
      checkOutButton.classList.add("disabled");
    }
  }
};

// Gunakan event 'input' pada form agar lebih responsif
if (form) {
  form.addEventListener("input", checkFormValidity);
}

// kirim data ketika tombol CO di klik
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

// format pesan yang akan dikirim ke WA
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
const rupiah = (number) => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(number);
};

//contact
const contactForm = document.querySelector("#contactForm");

contactForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("nama").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("nomor").value.trim();
  const message = document.getElementById("message").value.trim();

  // ganti nomor di bawah dengan nomor WA kamu
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
