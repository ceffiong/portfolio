AOS.init({
    once: true,
});

// Typewriter effect
const typewriterElement = document.getElementById('typewriter');
const typewriterAltElement = document.getElementById('typewriter-alt');
const lines = [
    { text: "Software Architect", hasSpan: false }
];
let lineIndex = 0;
let charIndex = 0;
let lineIndexAlt = 0;
let charIndexAlt = 0;

function typeWriter() {
    if (lineIndex < lines.length) {
        const currentLine = lines[lineIndex];

        if (charIndex < currentLine.text.length) {
            const char = currentLine.text.charAt(charIndex);

            if (charIndex === 0 && lineIndex > 0) {
                typewriterElement.innerHTML += '<br />';
            }

            if (currentLine.hasSpan && charIndex === 0) {
                typewriterElement.innerHTML += '<span>' + char;
            } else if (currentLine.hasSpan && charIndex === currentLine.text.length - 1) {
                const lastSpan = typewriterElement.lastChild;
                if (lastSpan && lastSpan.tagName === 'SPAN') {
                    lastSpan.textContent += char;
                } else {
                    typewriterElement.innerHTML += char;
                }
                typewriterElement.innerHTML += '</span>';
            } else if (currentLine.hasSpan) {
                const lastSpan = typewriterElement.lastChild;
                if (lastSpan && lastSpan.tagName === 'SPAN') {
                    lastSpan.textContent += char;
                } else {
                    typewriterElement.innerHTML += char;
                }
            } else {
                typewriterElement.innerHTML += char;
            }

            charIndex++;
            setTimeout(typeWriter, 100);
        } else {
            lineIndex++;
            charIndex = 0;
            setTimeout(typeWriter, 100);
        }
    }
}

function typeWriterAlt() {
    if (typewriterAltElement && lineIndexAlt < lines.length) {
        const currentLine = lines[lineIndexAlt];

        if (charIndexAlt < currentLine.text.length) {
            const char = currentLine.text.charAt(charIndexAlt);

            if (charIndexAlt === 0 && lineIndexAlt > 0) {
                typewriterAltElement.innerHTML += '<br />';
            }

            if (currentLine.hasSpan && charIndexAlt === 0) {
                typewriterAltElement.innerHTML += '<span>' + char;
            } else if (currentLine.hasSpan && charIndexAlt === currentLine.text.length - 1) {
                const lastSpan = typewriterAltElement.lastChild;
                if (lastSpan && lastSpan.tagName === 'SPAN') {
                    lastSpan.textContent += char;
                } else {
                    typewriterAltElement.innerHTML += char;
                }
                typewriterAltElement.innerHTML += '</span>';
            } else if (currentLine.hasSpan) {
                const lastSpan = typewriterAltElement.lastChild;
                if (lastSpan && lastSpan.tagName === 'SPAN') {
                    lastSpan.textContent += char;
                } else {
                    typewriterAltElement.innerHTML += char;
                }
            } else {
                typewriterAltElement.innerHTML += char;
            }

            charIndexAlt++;
            setTimeout(typeWriterAlt, 100);
        } else {
            lineIndexAlt++;
            charIndexAlt = 0;
            setTimeout(typeWriterAlt, 100);
        }
    }
}

// Start typewriter effect when page loads
window.addEventListener('load', function() {
    setTimeout(typeWriter, 500);
    setTimeout(typeWriterAlt, 500);
});

// Portfolio filtering
const filterButtons = document.querySelectorAll('.filter-btn');
const portfolioCards = document.querySelectorAll('.portfolio-bottom .card');

filterButtons.forEach(button => {
    button.addEventListener('click', function(event) {
        event.preventDefault();
        const filterValue = this.getAttribute('data-filter');

        // Remove active class from all buttons
        filterButtons.forEach(btn => btn.classList.remove('active'));

        // Add active class to clicked button
        this.classList.add('active');

        // Filter cards
        portfolioCards.forEach(card => {
            const category = card.getAttribute('data-category');

            if (filterValue === 'all' || category === filterValue) {
                card.style.display = 'block';
                // Reset AOS animation
                card.classList.remove('aos-animate');
                setTimeout(() => {
                    card.classList.add('aos-animate');
                }, 10);
            } else {
                card.style.display = 'none';
            }
        });
    });
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