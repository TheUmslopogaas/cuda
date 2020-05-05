$(document).ready(function(){
  var mixer = mixitup(".portfolio-projects-wrapper")
})

var triggerButton = document.querySelector(".menu-btn");
var navBar = document.querySelector(".responsive-nav");

function navItemsAndTriggerButton(){  
  triggerButton.classList.toggle("rotate-button");
  navBar.classList.toggle("nav-show");
}
triggerButton.addEventListener("click", function(){
  navItemsAndTriggerButton();
});

