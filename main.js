let navMenuIcon=document.querySelector("#menu-icon");
let mobileNav=document.querySelector(".nav-menu-mobile");

navMenuIcon.addEventListener("click", ()=>{
    
    console.log("clicked")
    mobileNav.style.display="flex";
})