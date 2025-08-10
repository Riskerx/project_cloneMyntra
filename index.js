// index.js

// 1. Search Bar Interaction
const searchInput = document.querySelector('.search_input');

searchInput.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        const query = searchInput.value.trim();
        if (query.length > 0) {
            alert(`You searched for: ${query}`);
            searchInput.value = '';
        } else {
            alert('Please enter a search term.');
        }
    }
});

// 2. Action Bar (Profile, Wishlist, Bag) Click Handlers
document.querySelectorAll('.action_container').forEach(container => {
    container.addEventListener('click', () => {
        const action = container.querySelector('.action_name').innerText;
        alert(`You clicked on ${action}`);
    });
});

// 3. Nav Link Hover Enhancement
const navLinks = document.querySelectorAll('.nav_bar a');

navLinks.forEach(link => {
    link.addEventListener('mouseenter', () => {
        link.style.color = '#ff3f6c';
    });

    link.addEventListener('mouseleave', () => {
        link.style.color = '';
    });
});

// 4. Scroll to Top Button
const scrollToTopBtn = document.createElement('button');
scrollToTopBtn.innerText = '↑ Top';
scrollToTopBtn.style.position = 'fixed';
scrollToTopBtn.style.bottom = '20px';
scrollToTopBtn.style.right = '20px';
scrollToTopBtn.style.padding = '10px 15px';
scrollToTopBtn.style.backgroundColor = '#ff3f6c';
scrollToTopBtn.style.color = '#fff';
scrollToTopBtn.style.border = 'none';
scrollToTopBtn.style.borderRadius = '5px';
scrollToTopBtn.style.cursor = 'pointer';
scrollToTopBtn.style.display = 'none';
scrollToTopBtn.style.zIndex = '1000';
document.body.appendChild(scrollToTopBtn);

scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        scrollToTopBtn.style.display = 'block';
    } else {
        scrollToTopBtn.style.display = 'none';
    }
});

// index.js

// Inject header and footer into all pages
function loadLayout() {
    fetch('header.html')
        .then(res => res.text())
        .then(data => {
            document.getElementById('header').innerHTML = data;
        });

    fetch('footer.html')
        .then(res => res.text())
        .then(data => {
            document.getElementById('footer').innerHTML = data;
        });
}

// Call it once DOM is ready
document.addEventListener('DOMContentLoaded', loadLayout);
