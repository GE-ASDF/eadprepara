const btnOpenMenu = document.querySelector(".menu-mobile")      
const btnCloseMenu = document.querySelector(".nav-item.mobile")      
const navContent = document.querySelector(".nav-content")

function openMenu(target){
    document.querySelector(target).classList.add("show-menu")
}

function closeMenu(target){
    document.querySelector(target).classList.remove("show-menu")
}

btnOpenMenu.addEventListener("click", ()=>{
    openMenu(btnOpenMenu.dataset.target);
})
btnCloseMenu.addEventListener("click", ()=>{
    closeMenu(btnCloseMenu.dataset.target);
})
navContent.addEventListener("click", ()=>{
    console.log(navContent)
    closeMenu(navContent.dataset.target);
})