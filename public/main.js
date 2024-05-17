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
let cardImage = document.querySelector(".cardA-img");
let overlay = document.querySelector(".top")
cardImage.addEventListener('mouseenter', () =>{
    overlay.style.display ="block";
    cardImage.style.display ="none"
})
cardImage.addEventListener("mouseleave", () =>{
    overlay.style.display ="none";
    cardImage.style.display ="block";
})



//handling cart container//
let cartIcon = document.getElementById("cartbtn")
let body = document.querySelector("body")
// let addCartCon = document.getElementById("addCart-con")

cartIcon.addEventListener("click", (e) =>{
    e.preventDefault();
    alert("hello")
    body.classList.toggle("showCart")

    

})