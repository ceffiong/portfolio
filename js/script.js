AOS.init({
    once: true,
});

// Typewriter effect
const typewriterElement = document.getElementById('typewriter');
const typewriterCenteredElement = document.getElementById('typewriter-centered');
const lines = [
    { text: "Software Architect", hasSpan: false }
];
let lineIndex = 0;
let charIndex = 0;
let lineIndexCentered = 0;
let charIndexCentered = 0;

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

function typeWriterCentered() {
    if (typewriterCenteredElement && lineIndexCentered < lines.length) {
        const currentLine = lines[lineIndexCentered];

        if (charIndexCentered < currentLine.text.length) {
            const char = currentLine.text.charAt(charIndexCentered);

            if (charIndexCentered === 0 && lineIndexCentered > 0) {
                typewriterCenteredElement.innerHTML += '<br />';
            }

            if (currentLine.hasSpan && charIndexCentered === 0) {
                typewriterCenteredElement.innerHTML += '<span>' + char;
            } else if (currentLine.hasSpan && charIndexCentered === currentLine.text.length - 1) {
                const lastSpan = typewriterCenteredElement.lastChild;
                if (lastSpan && lastSpan.tagName === 'SPAN') {
                    lastSpan.textContent += char;
                } else {
                    typewriterCenteredElement.innerHTML += char;
                }
                typewriterCenteredElement.innerHTML += '</span>';
            } else if (currentLine.hasSpan) {
                const lastSpan = typewriterCenteredElement.lastChild;
                if (lastSpan && lastSpan.tagName === 'SPAN') {
                    lastSpan.textContent += char;
                } else {
                    typewriterCenteredElement.innerHTML += char;
                }
            } else {
                typewriterCenteredElement.innerHTML += char;
            }

            charIndexCentered++;
            setTimeout(typeWriterCentered, 100);
        } else {
            lineIndexCentered++;
            charIndexCentered = 0;
            setTimeout(typeWriterCentered, 100);
        }
    }
}

// Start typewriter effect when page loads
window.addEventListener('load', function() {
    // Force scroll to top on page load
    window.scrollTo(0, 0);

    setTimeout(typeWriter, 500);
    if (typewriterCenteredElement) {
        setTimeout(typeWriterCentered, 500);
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
const windowTitleCentered = document.querySelector('.home-centered .window-title');
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