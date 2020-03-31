//primo click, appare il menù;
//se cliccko che è già visibile, invece scompare.


console.log("CIAO");

var a = $(".fa-bars");
var stateHamburgerMenu = "hidden";

a.click(
  function () {
    if (stateHamburgerMenu === "hidden") {
      $('.hamburger-menu').fadeIn();
      stateHamburgerMenu = "visible";
    }
    $(".fa-times").click(
      function(){
        $('.hamburger-menu').fadeOut();
          stateHamburgerMenu = "hidden";
      }
      )
    }
)
