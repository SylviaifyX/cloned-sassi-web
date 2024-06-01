const dropMenu = document.querySelector("#drop-down-menu");
const openNav = document.querySelector("#open-menu-bar");
const closeMenu = document.querySelector("#close-menu-bar");

//handling the Nav-bar-section//
openNav.addEventListener("click", () => {
  openNav.style.display = "none";
  closeMenu.style.display = "block";
  show();
});
closeMenu.addEventListener("click", () => {
  openNav.style.display = "block";
  closeMenu.style.display = "none";
  close();
});
function show() {
  dropMenu.style.display = "flex";
  dropMenu.style.top = "48px";
}

function close() {
  dropMenu.style.top = "-100%";
}

// handling cart container/
let cartIcon = document.getElementById("cartbtn");
let addCartCon = document.getElementById("addCart-con");
let closeCart = document.getElementById("del");
let closeBtn = document.querySelector(".btn2");

cartIcon.addEventListener("click", (e) => {
  e.preventDefault();
  addCartCon.style.opacity = "1";
  addCartCon.style.transition = ".9s ease-out";
  addCartCon.style.inset = "0 0 0 auto";
});
closeCart.addEventListener("click", () => {
  addCartCon.style.opacity = "1";
  addCartCon.style.transition = ".9s ease-out";
  addCartCon.style.inset = "0 -500px 0 auto";
});
closeBtn.addEventListener("click", () => {
  addCartCon.style.opacity = "1";
  addCartCon.style.transition = ".9s ease-out";
  addCartCon.style.inset = "0 -500px 0 auto";
});

//handling the product page to be able to add to cart//
let productList = document.querySelector(".fashion-item-container");
let fashionCartList = document.querySelector(".cart-list-con");
let spanIconUpdate = document.querySelector(".spanIcon");
// let cardAdd = document.querySelector(".addcart-button")
let listProduct = [];
let cartOutList = [];

const getData = () => {
  fetch("dummyData.json")
    .then((response) => response.json())
    .then((data) => {
      listProduct = data;
      showData();
      // console.log(data)
    });
};
getData();
// productList.innerHTML = "";
// if (listProduct.length > 0) {
//   listProduct.forEach((product) => {
//     let newProductList = document.createElement("div");
//     newProductList.classList.add("fashion-item");
//     newProductList.dataset.id = product.id;
//     newProductList.innerHTML = `
//           <div class="fashion-item p-4 flex flex-col gap-2">
//           <img src="${product.image}" class="image" alt=""></img>
//           <h2 class="font-bold">${product.tittle}</h2>
//           <div class="price text-[18px] text-slate-300 font-bold">${product.price}</div>
//           <button class="addcart-button">Add To Cart</button>
//           </div>
//           `;
//     productList.appendChild(newProductList);

//   });
// }
const showData = () => {
  listProduct.forEach((products, id) => {
    // console.log(products);
    let newList = document.createElement("div");
    newList.classList.add("div");
    newList.innerHTML = `
      <div class="fashion-item p-4 flex flex-col gap-2 bg-[#f8f8e2] rounded-[10px]">
          <img src="${products.image}" class="image" alt=""></img>
          <h2 class="font-bold">${products.tittle}</h2>
          <div class="price text-[18px] text-slate-300 font-bold">${products.price}</div>
          <button onclick ="addToCart(${id})" class="addcart-button">Add To Cart</button>
      </div>
        `;
    productList.appendChild(newList);
  });
};

function addToCart(card_id) {
  // console.log(card_id)
  //  console.log(listProduct[card_id])
  if (cartOutList[card_id] == null) {
    cartOutList[card_id] = listProduct[card_id];
  }
  addingInCard();
}

function addingInCard() {
  fashionCartList.innerHTML = "";

  cartOutList.forEach((item, id) => {
    //  console.log(item)
    let newListing = document.createElement("section");
    newListing.innerHTML = `
        <section class="cart-list-con flex items-center mb-2">
        <div
        class="add-to-cart-list w-[50%]  flex items-center justify-between p-2"
       >
        <div class="w-[19%]">
        <img
          src="${item.image}"
          class="w-full object-cover block"
          alt=""
        />
      </div>
      </div>
      <div
      class="add-to-cart-info w-[50%] flex flex-col items-end  gap-3"
      >
      <h2 class="ml-[50px] text-[13px] font-bold">Silk Christon Dress</h2>
      <p class="ml-[50px] text-[13px] text-slate-400 font-bold">
        ${item.tittle}
      </p>
      <h3 class="ml-[50px] text-[13px] text-slate-400 font-bold">
        ${item.price}
      </h3>
     </div>
     </section>
    `;
    fashionCartList.appendChild(newListing)
  });
}

// productList.addEventListener("click", (e) => {
//   let clickProductButton = e.target;
//   if (clickProductButton.classList.contains("addcart-button")) {
//     let productId = clickProductButton.parentElement.parentElement.dataset.id;
//     addCartList(productId);
//   }
// });

// let addCartList = (productId) => {

//   if (cartValue.length <= 0) {
//     cartValue = [
//       {
//         productId: productId,
//         quantity: 1,
//       },
//     ];
//   }

//   addCartToHtml();
// };

// const addCartToHtml = () => {
//   fashionCartList.innerHTML = "";
//   if (cartValue.length > 0) {
//     cartValue.forEach((carts) => {
//       let newCart = document.createElement("div");
//       let productPosition = listProduct.findIndex(
//         (value) => value.id == carts.productId
//       );
//       let info = listProduct[productPosition];
//       newCart.classList.add("cart-list-con");
//       newCart.innerHTML = `
//       <div class="add-to-cart-list flex items-center justify-between p-2">
//            <div class="w-[20%]">
//             <img
//               src="${info.image}"
//               class="w-full object-cover block"
//               alt=""
//             />
//           </div>
//           <div class="add-to-cart-info w-[80%] flex flex-col gap-3">
//             <h2 class="ml-[50px] text-[18px] font-bold">${info.tittle}</h2>
//             <p class="ml-[50px] text-[14px] text-slate-400 font-bold">
//               Beautiful Silk Dress
//             </p>
//             <h3 class="ml-[50px] text-[14px] text-slate-400 font-bold">
//               ${info.price}
//             </h3>
//           </div>
//         </div>
//     `;
//       fashionCartList.appendChild(newCart);
//     });
//   }
// };
