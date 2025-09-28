document.addEventListener("alpine:init", () => {
  Alpine.data("products", () => ({
    items: [
      { id: 1, name: "Nasi Goreng Gila ", img: "1.jpg", price: 22000 },
      { id: 2, name: "Mie Goreng Gila", img: "2.jpg", price: 25000 },
      { id: 3, name: "Kwetiau Goreng Gila", img: "3.jpg", price: 30000 },
      { id: 4, name: "Bihun Goreng Gila ", img: "4.jpg", price: 35000 },
      { id: 5, name: "Capcay Goreng Gila", img: "5.jpg", price: 40000 },
      { id: 6, name: "Capcay Rebus Komplit", img: "6.jpg", price: 40000 },
    ],
  }));
  Alpine.store("cart", {
    items: [],
    total: 0,
    quantity: 0,
    add(newItem) {
      //cek apakah ada barang yang sama dicart
      const cartItem = this.items.find((item) => item.id === newItem.id);
      //jika belum ada/cart masih kosong
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
      const cartItem = this.items.find((item) => item.id === id);

      //jika item > 1
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
});
// form validation

const checkOutButton = document.querySelector(".checkout-button");
checkOutButton.disabled = true;

const form = document.querySelector("#checkoutForm");

form.addEventListener("keyup", function () {
  for (let i = 0; i < form.elements.length; i++) {
    if (form.elements[i].value.length !== 0) {
      checkOutButton.classList.remove("disabled");
      checkOutButton.classList.add("disabled");
    } else {
      return false;
    }
  }

  checkOutButton.disabled = false;
  checkOutButton.classList.remove("disabled");
});
//kirim data ketika tombol CO di klik
checkOutButton.addEventListener("click", function (e) {
  e.preventDefault();
  const formData = new FormData(form);
  const data = new URLSearchParams(formData);

  const objData = Object.fromEntries(data);
  // console.log(objData);
  const message = formatMessage(objData);
  window.open("https://wa.me/62895800365761?text=" + encodeURIComponent(message));
});

// format pesan yang akan dikirim ke WA
const formatMessage = (obj) => {
  return `Data Customer
        Nama: ${obj.name}
        Email: ${obj.email}
        Phone: ${obj.phone}
    Data Pesanan
        ${JSON.parse(obj.items).map((item) => `${item.name} (${item.quantity} x ${rupiah(item.total)}) \n`)}
    TOTAL: ${rupiah(obj.total)}
    Terimkasih `;
};
//konversi harga ke rupiah
const rupiah = (number) => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(number);
};
