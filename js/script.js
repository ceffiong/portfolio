AOS.init({
    once: false,
});

let mybutton = document.getElementById("btn-top");
let myNav = document.getElementById("mobile-nav");

function openNav() {
    myNav.style.width = "250px";
    document.body.style.overflow = "hidden";
}

function closeNav() {
    myNav.style.width = "0";
    document.body.style.overflow = "auto";
}

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

window.onscroll = function () {
    scrollFunction();
};

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    var subject = 'Contact Form Submission from ' + name;
    var body = 'Name: ' + name + '\n';
    body += 'Email: ' + email + '\n\n';
    body += 'Message: \n' + message;

    var mailtoLink = 'mailto:contact@ceffiong.dev?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);

    window.location.href = mailtoLink;
});

window.addEventListener('scroll', function() {
    const header = document.getElementById('header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});