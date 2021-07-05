const hamburger = document.querySelector("#hamburger");
const overlay = document.querySelector(".overlay");
const nav = document.querySelector(".header__links");
const header = document. querySelector(".header");





hamburger.addEventListener("click", ()=> {
    hamburger.classList.toggle("open");
    if(hamburger.classList.contains("open")){
        open();
        // function disableScroll() {
        //     // Get the current page scroll position
        //     scrollTop = window.pageYOffset;
        //     scrollLeft = window.pageXOffset ;
          
        //         // if any scroll is attempted, set this to the previous value
        //         window.onscroll = function() {
        //             window.scrollTo(scrollLeft, scrollTop);
        //         };
               
        // }
        // disableScroll();
    }
    else{
      close();
    }
} )

//functions
function open(){
    overlay.classList.remove("fade-out");
    overlay.classList.add("fade-in");
    nav.classList.remove("fade-out");
    nav.classList.add("fade-in");
}
function close(){
    overlay.classList.remove("fade-in");
    overlay.classList.add("fade-out");
    nav.classList.remove("fade-in");
    nav.classList.add("fade-out");
}