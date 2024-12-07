// Smooth scrolling for navigation links
document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        targetSection.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        });
    });
});

// Function to display game details dynamically
function showGameDetails(element, title, description, requirements) {
    // Clear existing details
    document.querySelectorAll('.game-details').forEach(details => {
        details.innerHTML = '';
        details.style.display = 'none';
    });

    // Populate details for the selected game
    const detailsDiv = element.querySelector('.game-details');
    detailsDiv.innerHTML = `
        <h3>${title}</h3>
        <p>${description}</p>
        <ul>
            ${requirements.map(req => `<li>${req}</li>`).join('')}
        </ul>
    `;
    detailsDiv.style.display = 'block';

    // Smooth expand animation
    detailsDiv.animate([{ opacity: 0 }, { opacity: 1 }], {
        duration: 300,
        easing: 'ease-in-out',
    });
}

// Highlight active navigation menu items on scroll
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav ul li a');

    sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 150 && rect.bottom >= 150) {
            navLinks.forEach(link => link.classList.remove('active'));
            navLinks[index].classList.add('active');
        }
    });
});

// Newsletter subscription alert
document.querySelector('.newsletter button').addEventListener('click', () => {
    const emailInput = document.querySelector('.newsletter input');
    const email = emailInput.value.trim();
    if (email) {
        alert(`Thank you for subscribing, ${email}! Stay tuned for updates.`);
        emailInput.value = ''; // Clear the input field
    } else {
        alert('Please enter a valid email address.');
    }
});

// Add hover effects to game cards
document.querySelectorAll('.game').forEach(game => {
    game.addEventListener('mouseenter', () => {
        game.style.transform = 'scale(1.05)';
        game.style.boxShadow = '0 15px 30px rgba(255, 0, 0, 0.4)';
    });

    game.addEventListener('mouseleave', () => {
        game.style.transform = 'scale(1)';
        game.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.2)';
    });
});

// Add icon glow effect on hover
document.querySelectorAll('.social-icons a i').forEach(icon => {
    icon.addEventListener('mouseenter', () => {
        icon.style.textShadow = '0 0 20px red, 0 0 30px red';
        icon.style.transform = 'scale(1.2)';
    });

    icon.addEventListener('mouseleave', () => {
        icon.style.textShadow = '0 0 10px red, 0 0 20px red';
        icon.style.transform = 'scale(1)';
    });
});

// Dynamic glow effect for Featured Games heading
const gamesHeading = document.querySelector('.games h2');
if (gamesHeading) {
    setInterval(() => {
        gamesHeading.style.textShadow =
            `0 0 15px rgba(255, 77, 77, 0.8),
             0 0 30px rgba(255, 77, 77, 0.6)`;
        setTimeout(() => {
            gamesHeading.style.textShadow = `0 0 10px rgba(255, 77, 77, 0.4)`;
        }, 500);
    }, 1000);
}
