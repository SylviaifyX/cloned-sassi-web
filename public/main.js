const dropMenu = document.querySelector("#drop-down-menu")
const openNav = document.querySelector("#open-menu-bar")
const closeMenu = document.querySelector("#close-menu-bar")


//handling the Nav-bar-section//
openNav.addEventListener("click", () =>{
    openNav.style.display ="none";
    closeMenu.style.display ="block"
    show()
})
closeMenu.addEventListener('click', () =>{
    openNav.style.display ="block";
    closeMenu.style.display ="none"
    close()
})
function show(){
    dropMenu.style.display = "flex";
    dropMenu.style.top = "48px"
}

function close(){
    dropMenu.style.top = "-100%"
}


// handling cart container/
let cartIcon = document.getElementById("cartbtn")
let addCartCon = document.getElementById("addCart-con")
let closeCart = document.getElementById("del")
let closeBtn = document.querySelector(".btn2")

cartIcon.addEventListener("click", (e) =>{
    e.preventDefault();
    addCartCon.style.opacity ="1"
    addCartCon.style.transition = '.9s ease-out'
    addCartCon.style.inset = '0 0 0 auto'
})
closeCart.addEventListener("click", () =>{
    addCartCon.style.opacity ="1"
    addCartCon.style.transition = '.9s ease-out'
    addCartCon.style.inset = '0 -500px 0 auto'
})
closeBtn.addEventListener("click", () =>{
    addCartCon.style.opacity ="1"
    addCartCon.style.transition = '.9s ease-out'
    addCartCon.style.inset = '0 -500px 0 auto'
})

//handling the product page to be able to add to cart//
let productList = document.querySelector(".fashion-item-container")
let listProduct = []


const showData = () =>{
    productList.innerHTML = "";

    if( listProduct.length > 0){
        listProduct.forEach(product =>{
            let newProductList = document.createElement('div')
            newProductList.classList.add('fashion-item')
            newProductList.innerHTML =`
            <div class="fashion-item p-4 flex flex-col md:grid-cols-3 sm:grid-cols-2 gap-2">
            <img src="${product.image}" class="image" alt=""></img>
            <h2 class="font-bold">${product.tittle}</h2>
            <div class="price text-[18px] text-slate-300 font-bold">${product.price}</div>
            <button class="addcart-button">Add To Cart</button>
            </div>
            `
            productList.appendChild(newProductList)

            // console.log(productList)
        })
    }
}
const getData = () =>{
    fetch('dummyData.json').then(response => response.json())
    .then(data =>{
        listProduct = data
        showData()
        // console.log(data)
    })
}
getData()