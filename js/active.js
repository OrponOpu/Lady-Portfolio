//For Owlcarousel slider

$(document).ready(function(){
  $(".service-all").owlCarousel({

    items: 4,
    dots: true,
    loop:true,
    autoplay:true,
    margin:20,
  });
  $(".testimonial-slider").owlCarousel({

    items: 3,
    dots: true,
    loop:true,
    autoplay:true,
    margin:20,
    nav:false,
      responsive:{
        0:{
          items:1
        },
        600:{
          items:2
        },
        1000:{
          items:3
        }
      }
  });
});

//For Any tabs 

let tabBtn = document.querySelectorAll(".tab-btn");
let tabList = document.querySelectorAll(".tab-list");

tabBtn.forEach((element, index) => {
  element.addEventListener("click", function () {
    element.classList.add("tab-btn-active");
    tabList[index].classList.add("tab-list-active");
    for (let i = 0; i < tabBtn.length; i++) {
      if (i !== index) {
        tabBtn[i].classList.remove("tab-btn-active");
        tabList[i].classList.remove("tab-list-active");
      }
    }
  });
});

// Any Sticky Header

// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the header
var header = document.getElementById("myheader");

// Get the offset position of the navbar
var sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}