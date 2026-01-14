document.addEventListener("alpine:init", () => {
  Alpine.data("products", () => ({
    //ini untuk data produts
    items: [
      { id: 1, name: "Batteccreek Coffee", img: "1.jpg", price: 20000 },
      { id: 2, name: "Fiddle Heads", img: "2.jpg", price: 60000 },
      { id: 3, name: "Guatemala Coffee", img: "3.jpg", price: 70000 },
      { id: 4, name: "Small Batch Coffee", img: "4.jpg", price: 79000 },
      { id: 5, name: "Cultivate Coffee", img: "5.jpg", price: 90000 },
      { id: 6, name: "Go Africa Coffee", img: "6.jpg", price: 95000 },
      { id: 7, name: "Paradise Coffee", img: "7.jpg", price: 68000 },
      { id: 8, name: "Universal Coffee", img: "8.jpg", price: 70000 },
      { id: 9, name: "King Coffee", img: "9.jpg", price: 90000 },
    ],
  }));

  Alpine.store("cart", {
    //keranjang belanja
    items: [],
    total: 0,
    quantity: 0,
    add(newItem) {
      //cek ada barang yang sama di keranjang belanja
      const cartItem = this.items.find((item) => item.id === newItem.id);

      //jika belum ada atau cart/kranjang kosong maka masukin aja kita push
      if (!cartItem) {
        this.items.push({ ...newItem, quantity: 1, total: newItem.price }); //kita spread menjadi objek
        this.quantity++;
        this.total += newItem.price;
      } else {
        //kita cek barang sudah atau belum, cek apakah barang beda atau sama dengan di cart ya
        this.items = this.items.map((item) => {
          //jika barang ya berbeda (ini akan nambah barang baru di bawahnya)
          if (item.id !== newItem.id) {
            return item;
          } else {
            //jika barang sudah ada maka quantity dan sub totalnya
            item.quantity++;
            item.total = item.price * item.quantity;

            this.quantity++;
            this.total += item.price;
            return item;
          }
        });
      }
      //console.log(this.total);
    },
    // untuk remove item di kranjang
    remove(id) {
      const cartItem = this.items.find((item) => item.id === id); //ambil item yang akan diremove berdasarkan id ya

      //jika item dikeranjang lebih dari satu
      if (cartItem.quantity > 1) {
        //telusuri satu satu
        this.items = this.items.map((item) => {
          //jika barang bukan yang diklik(id ya tidak sama kita skip)
          if (item.id !== id) {
            return item;
          } else {
            //kalau bener
            item.quantity--;
            item.total = item.price * item.quantity; //kita hiitung ulang
            this.quantity--;
            this.total -= item.price;
            return item;
          }
        });
      } else if (cartItem.quantity === 1) {
        //jika cartItem quantity sama dengan 1
        //jika barang ya sisa 1
        this.items = this.items.filter((item) => item.id !== id);
        this.quantity--;
        this.total -= cartItem.price;
      }
    },
  });
});

// form Validation
const checkoutButton = document.querySelector(".checkout-button");
checkoutButton.disabled = true;

//form
const form = document.querySelector("#checkoutForm");

form.addEventListener("keyup", function () {
  for (let i = 0; i < form.elements.length; i++) {
    if (form.elements[i].value.length !== 0) {
      checkoutButton.classList.remove("disabled");
      checkoutButton.classList.add("disabled");
    } else {
      return false;
    }
  }
  checkoutButton.disabled = false;
  checkoutButton.classList.remove("disabled");
});

// Mengiirmkan data ketika tombol checkout di klick.
checkoutButton.addEventListener("click", function (e) {
  e.preventDefault();
  const formData = new FormData(form); //(form) ini dari atas
  const data = new URLSearchParams(formData);
  const objekData = Object.fromEntries(data);
  const pesan = formatMessage(objekData);

  window.open("http://wa.me/6285334343548?text=" + encodeURIComponent(pesan));
  //console.log(objekData);
});

// format pesan whatshapp
const formatMessage = (objek) => {
  return `Data Customer 
        Nama : ${objek.name}
        Email : ${objek.email}
        Phone : ${objek.phone}
    Data Pesanan
    ${JSON.parse(objek.items).map(
      (item) => `${item.name} (${item.quantity} x ${rupiah(item.price)}) \n `
    )}
   Total yang harus dibayar : ${rupiah(objek.total)}
   Terima Kasih Sudah Memesan`;
};

// merubah format ke rupiah
const rupiah = (number) => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0, //untuk menghilangkan nol dibelakang ya
  }).format(number);
};
