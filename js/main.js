//Toggle class Active untuk hamburger menu
const navbarNav = document.querySelector(".navbar-nav");

//ketika menu di click
document.querySelector("#hambureger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

//Toggle class active untuk hamberger search form
const searchForm = document.querySelector(".search-form");
const searchBox = document.querySelector("#search-box");

document.querySelector("#search-button").onclick = (e) => {
  searchForm.classList.toggle("active");
  searchBox.focus();
  e.preventDefault() //aksi default ya tidak di lakukakn
}

// toggle class active untuk shopping cart 
const shoppingCart = document.querySelector('.shopping-cart');
document.querySelector('#shopping-cart-button').onclick = (e) => {
  shoppingCart.classList.toggle("active");
  e.preventDefault()
}


//klik diluar sidebar untuk menghilangkan nav
const hmberMenu = document.querySelector("#hambureger-menu");
const searchBtn = document.querySelector('#search-button');
const cartBtn = document.querySelector('#shopping-cart-button');

document.addEventListener("click", function (e) {
  if (!hmberMenu.contains(e.target) && !navbarNav.contains(e.target)) { //ketika hmberMenu tidak di click dan navabar tidak diclik
    navbarNav.classList.remove("active"); //makan navbar hapus class active
  }
  if (!searchBtn.contains(e.target) && !searchForm.contains(e.target)) {
    searchForm.classList.remove("active");
  }
  if (!cartBtn.contains(e.target) && !shoppingCart.contains(e.target)) {
    shoppingCart.classList.remove("active");
  }
});



// Modal Box 1
const itemDetailModal1 = document.querySelector('#item-detail-modal-1');
const itemDetailButton1 = document.querySelector('.item-detail-button-1');

itemDetailButton1.onclick = (e) => {
  itemDetailModal1.style.display = 'flex';
  e.preventDefault();
}

//! looping satu2
//const itemDetailButton1 = document.querySelectorAll('.item-detail-button-1');
// itemDetailButton1.forEach((btn) =>{
//   btn.onclick = (e) => {
//     itemDetailModal1.style.display = 'flex';
//     e.preventDefault();
//   }
// })

//close tombol icon modal
document.querySelector("#item-detail-modal-1 .close-icon").onclick = (e) =>{
  itemDetailModal1.style.display = 'none';
  e.preventDefault();
}
// close modal dimana saja agar close
itemDetailModal1.onclick = (e) => {
  if (e.target === itemDetailModal1) {
    itemDetailModal1.style.display = 'none';
  }
}

// Modal Box 2
const itemDetailModal2 = document.querySelector('#item-detail-modal-2');
const itemDetailButton2 = document.querySelector('.item-detail-button-2');
itemDetailButton2.onclick = (e) => {
  itemDetailModal2.style.display = 'flex';
  e.preventDefault();
}
//close tombol icon modal
document.querySelector("#item-detail-modal-2 .close-icon").onclick = (e) =>{
  itemDetailModal2.style.display = 'none';
  e.preventDefault();
}
// close modal dimana saja agar close
window.onclick = (e) => {
  if (e.target === itemDetailModal2) {
    itemDetailModal2.style.display = 'none';
  }
}

// Modal Box 3
const itemDetailModal3 = document.querySelector('#item-detail-modal-3');
const itemDetailButton3 = document.querySelector('.item-detail-button-3');
itemDetailButton3.onclick = (e) => {
  itemDetailModal3.style.display = 'flex';
  e.preventDefault();
}
//close tombol icon modal
document.querySelector("#item-detail-modal-3 .close-icon").onclick = (e) =>{
  itemDetailModal3.style.display = 'none';
  e.preventDefault();
}
// close modal dimana saja agar close
itemDetailModal3.onclick = (e) => {
  if (e.target === itemDetailModal3) {
    itemDetailModal3.style.display = 'none';
  }
}

// Modal Box 4
const itemDetailModal4 = document.querySelector('#item-detail-modal-4');
const itemDetailButton4 = document.querySelector('.item-detail-button-4');
itemDetailButton4.onclick = (e) => {
  itemDetailModal4.style.display = 'flex';
  e.preventDefault();
}
//close tombol icon modal
document.querySelector("#item-detail-modal-4 .close-icon").onclick = (e) =>{
  itemDetailModal4.style.display = 'none';
  e.preventDefault();
}
// close modal dimana saja agar close
itemDetailModal4.onclick = (e) => {
  if (e.target === itemDetailModal4) {
    itemDetailModal4.style.display = 'none';
  }
}

// Modal Box 5
const itemDetailModal5 = document.querySelector('#item-detail-modal-5');
const itemDetailButton5 = document.querySelector('.item-detail-button-5');
itemDetailButton5.onclick = (e) => {
  itemDetailModal5.style.display = 'flex';
  e.preventDefault();
}
//close tombol icon modal
document.querySelector("#item-detail-modal-5 .close-icon").onclick = (e) =>{
  itemDetailModal5.style.display = 'none';
  e.preventDefault();
}
// close modal dimana saja agar close
itemDetailModal5.onclick = (e) => {
  if (e.target === itemDetailModal5) {
    itemDetailModal5.style.display = 'none';
  }
}


// Modal Box 6
const itemDetailModal6 = document.querySelector('#item-detail-modal-6');
const itemDetailButton6 = document.querySelector('.item-detail-button-6');
itemDetailButton6.onclick = (e) => {
  itemDetailModal6.style.display = 'flex';
  e.preventDefault();
}
//close tombol icon modal
document.querySelector("#item-detail-modal-6 .close-icon").onclick = (e) =>{
  itemDetailModal6.style.display = 'none';
  e.preventDefault();
}
// close modal dimana saja agar close
itemDetailModal6.onclick = (e) => {
  if (e.target === itemDetailModal6) {
    itemDetailModal6.style.display = 'none';
  }
}


// Modal Box 7
const itemDetailModal7 = document.querySelector('#item-detail-modal-7');
const itemDetailButton7 = document.querySelector('.item-detail-button-7');
itemDetailButton7.onclick = (e) => {
  itemDetailModal7.style.display = 'flex';
  e.preventDefault();
}
//close tombol icon modal
document.querySelector("#item-detail-modal-7 .close-icon").onclick = (e) =>{
  itemDetailModal7.style.display = 'none';
  e.preventDefault();
}
// close modal dimana saja agar close
itemDetailModal7.onclick = (e) => {
  if (e.target === itemDetailModal7) {
    itemDetailModal7.style.display = 'none';
  }
}

// Modal Box 8
const itemDetailModal8 = document.querySelector('#item-detail-modal-8');
const itemDetailButton8 = document.querySelector('.item-detail-button-8');
itemDetailButton8.onclick = (e) => {
  itemDetailModal8.style.display = 'flex';
  e.preventDefault();
}
//close tombol icon modal
document.querySelector("#item-detail-modal-8 .close-icon").onclick = (e) =>{
  itemDetailModal8.style.display = 'none';
  e.preventDefault();
}
// close modal dimana saja agar close
itemDetailModal8.onclick = (e) => {
  if (e.target === itemDetailModal8) {
    itemDetailModal8.style.display = 'none';
  }
}

// Modal Box 9
const itemDetailModal9 = document.querySelector('#item-detail-modal-9');
const itemDetailButton9 = document.querySelector('.item-detail-button-9');
itemDetailButton9.onclick = (e) => {
  itemDetailModal9.style.display = 'flex';
  e.preventDefault();
}
//close tombol icon modal
document.querySelector("#item-detail-modal-9 .close-icon").onclick = (e) =>{
  itemDetailModal9.style.display = 'none';
  e.preventDefault();
}
// close modal dimana saja agar close
itemDetailModal9.onclick = (e) => {
  if (e.target === itemDetailModal9) {
    itemDetailModal9.style.display = 'none';
  }
}
