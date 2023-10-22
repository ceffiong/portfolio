// Animate on Scroll lib
AOS.init({
  debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
  once: false, // whether animation should happen only once - while scrolling down
  mirror: true, // whether elements should animate out while scrolling past them
});

// Mobile navigation function

function openNav() {
  document.getElementById("mobile-nav").style.width = "250px";
  document.body.style.backgroundColor = "rgba(0,0,0,0.5)";
  getElementById("contact").style.pointerEvents = "none";
}

function closeNav() {
  document.getElementById("mobile-nav").style.width = "0";
  document.body.style.backgroundColor = "white";
}

var prevScrollPos =
  document.documentElement.scrollTop || document.body.scrollTop;

//scrolling
let mybutton = document.getElementById("btn-top");

//show or hide "scroll to top button"
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

//scroll to top
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

document.addEventListener(
  "scroll",
  (event) => {
    document.getElementById("header").display = "none";
    scrollFunction();
    // handle scroll event
    var currScrollPosition =
      window.pageYOffset || document.documentElement.scrollTop;

    document.documentElement.scrollTop || document.body.scrollTop;
    if (currScrollPosition > prevScrollPos) {
      //scrolling down
      document.getElementById("header").style.transform = "translateY(-200px)";
    } else if (currScrollPosition < prevScrollPos) {
      //scrolling up
      document.getElementById("header").style.transform = "translateY(0)";
    }

    prevScrollPos = currScrollPosition;
  },
  { passive: true }
);
