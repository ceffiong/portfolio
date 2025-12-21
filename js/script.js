AOS.init({
    once: true,
});

// ========================================
// Typing Animation for Roles
// ========================================

const typewriterElement = document.getElementById('typewriter');
const typewriterCenteredElement = document.getElementById('typewriter-centered');
const titles = [
    'Software Architect',
    'Full-Stack Developer',
    'GenAI Specialist',
    'Tech Mentor',
    'Mobile Developer'
];

let titleIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingDelay = 150;

function typeText() {
    const currentTitle = titles[titleIndex];

    if (isDeleting) {
        typewriterElement.textContent = currentTitle.substring(0, charIndex - 1);
        charIndex--;
        typingDelay = 50;
    } else {
        typewriterElement.textContent = currentTitle.substring(0, charIndex + 1);
        charIndex++;
        typingDelay = 150;
    }

    if (!isDeleting && charIndex === currentTitle.length) {
        // Pause at end
        typingDelay = 2000;
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        titleIndex = (titleIndex + 1) % titles.length;
        typingDelay = 500;
    }

    setTimeout(typeText, typingDelay);
}

// Centered typewriter for home section
let titleIndexCentered = 0;
let charIndexCentered = 0;
let isDeletingCentered = false;
let typingDelayCentered = 150;

function typeTextCentered() {
    if (!typewriterCenteredElement) return;

    const currentTitle = titles[titleIndexCentered];

    if (isDeletingCentered) {
        typewriterCenteredElement.textContent = currentTitle.substring(0, charIndexCentered - 1);
        charIndexCentered--;
        typingDelayCentered = 50;
    } else {
        typewriterCenteredElement.textContent = currentTitle.substring(0, charIndexCentered + 1);
        charIndexCentered++;
        typingDelayCentered = 150;
    }

    if (!isDeletingCentered && charIndexCentered === currentTitle.length) {
        // Pause at end
        typingDelayCentered = 2000;
        isDeletingCentered = true;
    } else if (isDeletingCentered && charIndexCentered === 0) {
        isDeletingCentered = false;
        titleIndexCentered = (titleIndexCentered + 1) % titles.length;
        typingDelayCentered = 500;
    }

    setTimeout(typeTextCentered, typingDelayCentered);
}

// Start typing animations after page loads
window.addEventListener('load', function() {
    // Force scroll to top on page load
    window.scrollTo(0, 0);

    setTimeout(typeText, 500);
    if (typewriterCenteredElement) {
        setTimeout(typeTextCentered, 500);
    }
});

// Also force scroll to top before page unload (for next load)
window.addEventListener('beforeunload', function() {
    window.scrollTo(0, 0);
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

// VS Code Tabs functionality
const tabs = document.querySelectorAll('.vscode-tabs .tab');
const tabContents = document.querySelectorAll('.editor-content');
const windowTitle = document.querySelector('.window-title');
const fileItems = document.querySelectorAll('.file-item');
const tabsContainer = document.querySelector('.vscode-tabs');

// File explorer functionality
fileItems.forEach(fileItem => {
    fileItem.addEventListener('click', () => {
        const fileName = fileItem.dataset.file;

        // Check if tab already exists
        let existingTab = document.querySelector(`.tab[data-tab="${fileName}"]`);

        if (existingTab) {
            // Tab exists, just click it to activate
            existingTab.click();
        } else {
            // Create new tab
            const newTab = createTab(fileName);
            tabsContainer.appendChild(newTab);

            // Activate the new tab
            newTab.click();
        }

        // Update file item active state
        fileItems.forEach(item => item.classList.remove('active'));
        fileItem.classList.add('active');
    });
});

// Function to create a new tab
function createTab(fileName) {
    const tab = document.createElement('div');
    tab.className = 'tab';
    tab.dataset.tab = fileName;

    tab.innerHTML = `
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <path d="M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z" stroke="#519ABA" stroke-width="1.5"/>
            <path d="M8 10H16M8 14H13" stroke="#519ABA" stroke-width="1.5" stroke-linecap="round"/>
        </svg>
        <span>${fileName}.ts</span>
        <svg class="tab-close" width="12" height="12" viewBox="0 0 12 12">
            <path d="M2 2L10 10M10 2L2 10" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
        </svg>
    `;

    // Add event listeners to the new tab
    attachTabListeners(tab);

    return tab;
}

// Function to attach listeners to a tab
function attachTabListeners(tab) {
    // Click on tab name/icon to switch
    tab.addEventListener('click', (e) => {
        // Don't switch if clicking the close button
        if (e.target.closest('.tab-close')) return;

        const tabName = tab.dataset.tab;

        // Remove active class from all tabs
        document.querySelectorAll('.vscode-tabs .tab').forEach(t => t.classList.remove('active'));

        // Add active class to clicked tab
        tab.classList.add('active');

        // Hide all content
        document.querySelectorAll('.editor-content').forEach(content => content.classList.remove('active'));

        // Show selected content
        const activeContent = document.querySelector(`[data-content="${tabName}"]`);
        if (activeContent) {
            activeContent.classList.add('active');
        }

        // Update window title
        const tabText = tab.querySelector('span').textContent;
        windowTitle.textContent = `${tabText} - Portfolio`;

        // Update file item active state
        fileItems.forEach(item => {
            if (item.dataset.file === tabName) {
                item.classList.add('active');
            } else {
                item.classList.remove('active');
            }
        });
    });

    // Tab closing
    const closeBtn = tab.querySelector('.tab-close');
    if (closeBtn) {
        closeBtn.addEventListener('click', (e) => {
            e.stopPropagation();

            // Don't close if it's the last tab
            const remainingTabs = document.querySelectorAll('.vscode-tabs .tab').length;
            if (remainingTabs <= 1) return;

            const tabName = tab.dataset.tab;
            const wasActive = tab.classList.contains('active');

            // Remove the tab
            tab.remove();

            // Update file item active state
            if (wasActive) {
                fileItems.forEach(item => {
                    if (item.dataset.file === tabName) {
                        item.classList.remove('active');
                    }
                });
            }

            // If closed tab was active, activate another tab
            if (wasActive) {
                const firstTab = document.querySelector('.vscode-tabs .tab');
                if (firstTab) {
                    firstTab.click();
                }
            }
        });
    }
}

// Attach listeners to initial tabs
tabs.forEach(tab => {
    attachTabListeners(tab);
});

// Set initial file item active state
const firstFileItem = document.querySelector('.file-item[data-file="charles"]');
if (firstFileItem) {
    firstFileItem.classList.add('active');
}

// VS Code Centered Tabs functionality
const tabsCentered = document.querySelectorAll('.vscode-tabs-centered .tab-centered');
const tabContentsCentered = document.querySelectorAll('.editor-content-centered');
const windowTitleCentered = document.querySelector('.home .window-title');
const fileItemsCentered = document.querySelectorAll('.file-item-centered');
const tabsContainerCentered = document.querySelector('.vscode-tabs-centered');

// File explorer functionality for centered section
fileItemsCentered.forEach(fileItem => {
    fileItem.addEventListener('click', () => {
        const fileName = fileItem.dataset.fileCentered;

        // Check if tab already exists
        let existingTab = document.querySelector(`.tab-centered[data-tab-centered="${fileName}"]`);

        if (existingTab) {
            // Tab exists, just click it to activate
            existingTab.click();
        } else {
            // Create new tab
            const newTab = createTabCentered(fileName);
            tabsContainerCentered.appendChild(newTab);

            // Activate the new tab
            newTab.click();
        }

        // Update file item active state
        fileItemsCentered.forEach(item => item.classList.remove('active'));
        fileItem.classList.add('active');
    });
});

// Function to create a new tab for centered section
function createTabCentered(fileName) {
    const tab = document.createElement('div');
    tab.className = 'tab-centered';
    tab.dataset.tabCentered = fileName;

    tab.innerHTML = `
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <path d="M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z" stroke="#519ABA" stroke-width="1.5"/>
            <path d="M8 10H16M8 14H13" stroke="#519ABA" stroke-width="1.5" stroke-linecap="round"/>
        </svg>
        <span>${fileName}.ts</span>
        <svg class="tab-close" width="12" height="12" viewBox="0 0 12 12">
            <path d="M2 2L10 10M10 2L2 10" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
        </svg>
    `;

    // Add event listeners to the new tab
    attachTabListenersCentered(tab);

    return tab;
}

// Function to attach listeners to a tab for centered section
function attachTabListenersCentered(tab) {
    // Click on tab name/icon to switch
    tab.addEventListener('click', (e) => {
        // Don't switch if clicking the close button
        if (e.target.closest('.tab-close')) return;

        const tabName = tab.dataset.tabCentered;

        // Remove active class from all tabs
        document.querySelectorAll('.vscode-tabs-centered .tab-centered').forEach(t => t.classList.remove('active'));

        // Add active class to clicked tab
        tab.classList.add('active');

        // Hide all content
        document.querySelectorAll('.editor-content-centered').forEach(content => content.classList.remove('active'));

        // Show selected content
        const activeContent = document.querySelector(`[data-content-centered="${tabName}"]`);
        if (activeContent) {
            activeContent.classList.add('active');
        }

        // Update window title
        const tabText = tab.querySelector('span').textContent;
        if (windowTitleCentered) {
            windowTitleCentered.textContent = `${tabText} - Portfolio`;
        }

        // Update file item active state
        fileItemsCentered.forEach(item => {
            if (item.dataset.fileCentered === tabName) {
                item.classList.add('active');
            } else {
                item.classList.remove('active');
            }
        });
    });

    // Tab closing
    const closeBtn = tab.querySelector('.tab-close');
    if (closeBtn) {
        closeBtn.addEventListener('click', (e) => {
            e.stopPropagation();

            // Don't close if it's the last tab
            const remainingTabs = document.querySelectorAll('.vscode-tabs-centered .tab-centered').length;
            if (remainingTabs <= 1) return;

            const tabName = tab.dataset.tabCentered;
            const wasActive = tab.classList.contains('active');

            // Remove the tab
            tab.remove();

            // Update file item active state
            if (wasActive) {
                fileItemsCentered.forEach(item => {
                    if (item.dataset.fileCentered === tabName) {
                        item.classList.remove('active');
                    }
                });
            }

            // If closed tab was active, activate another tab
            if (wasActive) {
                const firstTab = document.querySelector('.vscode-tabs-centered .tab-centered');
                if (firstTab) {
                    firstTab.click();
                }
            }
        });
    }
}

// Attach listeners to initial tabs for centered section
tabsCentered.forEach(tab => {
    attachTabListenersCentered(tab);
});

// Set initial file item active state for centered section
const firstFileItemCentered = document.querySelector('.file-item-centered[data-file-centered="charles"]');
if (firstFileItemCentered) {
    firstFileItemCentered.classList.add('active');
}

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var subject = document.getElementById('subject').value;
    var message = document.getElementById('message').value;

    var mailtoSubject = subject || 'Contact Form Submission from ' + name;
    var body = 'Name: ' + name + '\n';
    body += 'Email: ' + email + '\n\n';
    body += 'Message: \n' + message;

    var mailtoLink = 'mailto:contact@ceffiong.dev?subject=' + encodeURIComponent(mailtoSubject) + '&body=' + encodeURIComponent(body);

    window.location.href = mailtoLink;

    // Reset form after a short delay to ensure mailto link opens
    setTimeout(() => {
        this.reset();
    }, 100);
});

window.addEventListener('scroll', function() {
    const header = document.getElementById('header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }

    // Update scroll progress bar
    const scrollProgress = document.querySelector('.scroll-progress-bar');
    const scrollableHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (window.scrollY / scrollableHeight) * 100;
    scrollProgress.style.width = scrolled + '%';
});

// ========================================
// Animated Background - Floating Particles & Twinkling Stars
// ========================================

// Create floating particles
const particlesContainer = document.querySelector('.floating-particles-container');
const backgroundStars = document.querySelector('.background-stars');

if (particlesContainer && backgroundStars) {
    // Generate floating particles distributed across viewport
    for (let i = 0; i < 15; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';

        const size = Math.random() * 4 + 1; // 1-5px
        const x = Math.random() * 100; // 0-100%
        const y = Math.random() * 100; // 0-100% of viewport

        const delay = Math.random() * 25; // 0-25s delay
        const duration = Math.random() * 20 + 20; // 20-40s duration
        const horizontalMovement = (Math.random() - 0.5) * 300; // -150 to 150px

        particle.style.cssText = `
            width: ${size}px;
            height: ${size}px;
            left: ${x}%;
            top: ${y}%;
            --tx: ${horizontalMovement}px;
            animation: floatParticle ${duration}s infinite ease-in-out ${delay}s;
        `;

        particlesContainer.appendChild(particle);
    }

    // Generate twinkling stars across viewport
    for (let i = 0; i < 50; i++) {
        const star = document.createElement('div');
        star.className = 'star';

        const x = Math.random() * 100; // 0-100%
        const y = Math.random() * 100; // 0-100% of viewport

        const delay = Math.random() * 8; // 0-8s delay
        const duration = Math.random() * 4 + 2; // 2-6s duration

        // Vary star sizes for depth
        const size = Math.random() > 0.7 ? 3 : 2; // Some stars are bigger

        star.style.cssText = `
            left: ${x}%;
            top: ${y}%;
            width: ${size}px;
            height: ${size}px;
            --delay: ${delay}s;
            --duration: ${duration}s;
        `;

        particlesContainer.appendChild(star);
    }

    // Add particle clusters in viewport
    const clusterCount = 3;
    for (let cluster = 0; cluster < clusterCount; cluster++) {
        const clusterX = Math.random() * 80 + 10; // 10-90%
        const clusterY = Math.random() * 100; // 0-100% of viewport

        for (let i = 0; i < 3; i++) {
            const particle = document.createElement('div');
            particle.className = 'particle';

            const size = Math.random() * 3 + 1.5;
            const offsetX = (Math.random() - 0.5) * 25;
            const offsetY = (Math.random() - 0.5) * 30; // Cluster within 30% height
            const delay = Math.random() * 30;
            const duration = Math.random() * 25 + 20;
            const horizontalMovement = (Math.random() - 0.5) * 200;

            particle.style.cssText = `
                width: ${size}px;
                height: ${size}px;
                left: ${clusterX + offsetX}%;
                top: ${clusterY + offsetY}%;
                --tx: ${horizontalMovement}px;
                animation: floatParticle ${duration}s infinite ease-in-out ${delay}s;
            `;

            particlesContainer.appendChild(particle);
        }
    }

    console.log('✨ Total particles created:', particlesContainer?.children.length || 0);
    console.log('🌟 Particles positioned in fixed viewport - visible across ALL sections');
}

// Add parallax effect to gradient spheres on scroll
const gradientSpheres = document.querySelectorAll('.gradient-sphere');

window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;

    gradientSpheres.forEach((sphere, index) => {
        const speed = (index + 1) * 0.1;
        const yPos = scrolled * speed;
        sphere.style.transform = `translateY(${yPos}px)`;
    });
});

// Regenerate particles periodically for continuous effect
setInterval(() => {
    if (particlesContainer && particlesContainer.children.length < 80) {
        // Add 1 particle at a time for very subtle continuous effect
        const particle = document.createElement('div');
        particle.className = 'particle';

        const size = Math.random() * 4 + 1;
        const x = Math.random() * 100;
        const y = Math.random() * 100; // Random position in viewport
        const delay = 0;
        const duration = Math.random() * 20 + 20;
        const horizontalMovement = (Math.random() - 0.5) * 250;

        particle.style.cssText = `
            width: ${size}px;
            height: ${size}px;
            left: ${x}%;
            top: ${y}%;
            --tx: ${horizontalMovement}px;
            animation: floatParticle ${duration}s ease-in-out ${delay}s;
        `;

        particlesContainer.appendChild(particle);

        // Remove particle after animation completes
        setTimeout(() => {
            particle.remove();
        }, (duration + delay) * 1000);
    }
}, 8000); // Add particle every 8 seconds

console.log('✨ Starlight background with', particlesContainer?.children.length || 0, 'particles now visible everywhere!');

// ========================================
// Stats Counter Animation
// ========================================

function animateCounter(element, target, duration = 2000) {
    const start = 0;
    const increment = target / (duration / 16);
    let current = start;

    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            current = target;
            clearInterval(timer);
        }

        const displayValue = Math.floor(current);
        if (element.textContent.includes('+')) {
            element.textContent = displayValue + '+';
        } else {
            element.textContent = displayValue;
        }
    }, 16);
}

// Trigger counter animation when stats come into view
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.classList.contains('counted')) {
            entry.target.classList.add('counted');
            const statNumbers = entry.target.querySelectorAll('.stat-number, .mentor-stat-number');

            statNumbers.forEach(stat => {
                const text = stat.textContent;
                const num = parseInt(text.replace(/\D/g, ''));
                if (!isNaN(num)) {
                    animateCounter(stat, num);
                }
            });
        }
    });
}, { threshold: 0.5 });

// Observe stat sections
const statSections = document.querySelectorAll('.hero-stats, .blog-stats, .mentor-stats');
statSections.forEach(section => statsObserver.observe(section));