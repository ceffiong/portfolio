// Animate on Scroll lib
AOS.init({
  once: false,
  mirror: true,
});

//scrolling
let mybutton = document.getElementById("btn-top");
let myNav = document.getElementById("mobile-nav");

let homePage = document.getElementById("home");
let portfolioPage = document.getElementById("portfolio");
let blogPage = document.getElementById("blog");
let connectPage = document.getElementById("connect");
let mobileNav = document.getElementById("mobile-nav");

document.body.addEventListener(
  "click",
  (e) => {
    if (e.target !== mobileNav && !mobileNav.contains(e.target)) {
      closeNav();
    }
  },
  true
);

// Mobile navigation function
function openNav() {
  mybutton.style.display = "none";
  myNav.style.width = "250px";
  homePage.classList.add("no-event");
  portfolioPage.classList.add("no-event");
  blogPage.classList.add("no-event");
  connectPage.classList.add("no-event");
  document.body.classList.add("body-no-scroll");
}

function closeNav() {
  myNav.style.width = "0";
  homePage.classList.remove("no-event");
  portfolioPage.classList.remove("no-event");
  blogPage.classList.remove("no-event");
  connectPage.classList.remove("no-event");
  document.body.classList.remove("body-no-scroll");
}

var prevScrollPos =
  document.documentElement.scrollTop || document.body.scrollTop;

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
