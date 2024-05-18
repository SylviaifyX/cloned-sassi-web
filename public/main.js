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

//first grid-card-section//
// let cardImage = document.querySelector(".cardA-img");
// let overlay = document.querySelector(".top")
// cardImage.addEventListener('mouseenter', () =>{
//     overlay.style.display ="block";
//     cardImage.style.display ="none"
// })
// cardImage.addEventListener("mouseleave", () =>{
//     overlay.style.display ="none";
//     cardImage.style.display ="block";
// })



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