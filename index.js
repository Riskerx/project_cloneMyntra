// index.js

// === Inject Header and Footer ===
function loadLayout() {
    // Load header
    fetch('header.html')
        .then(res => {
            if (!res.ok) throw new Error("Header not found");
            return res.text();
        })
        .then(data => {
            document.getElementById('header').innerHTML = data;

            // Attach events after header is injected
            attachHeaderEvents();
        })
        .catch(err => console.error("Header load error:", err));

    // Load footer
    fetch('footer.html')
        .then(res => {
            if (!res.ok) throw new Error("Footer not found");
            return res.text();
        })
        .then(data => {
            document.getElementById('footer').innerHTML = data;
        })
        .catch(err => console.error("Footer load error:", err));
}

// === Attach interactivity to header after it's injected ===
function attachHeaderEvents() {
    // Search bar functionality
    const searchInput = document.querySelector('.search_input');
    if (searchInput) {
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
    }

    // Action buttons (Profile, Wishlist, Bag)
    document.querySelectorAll('.action_container').forEach(container => {
        container.addEventListener('click', () => {
            const action = container.querySelector('.action_name').innerText;
            console.log(`Clicked on ${action}`);
        });
    });

    // Nav link hover effect
    const navLinks = document.querySelectorAll('.nav_bar a');
    navLinks.forEach(link => {
        link.addEventListener('mouseenter', () => {
            link.style.color = '#ff3f6c';
        });
        link.addEventListener('mouseleave', () => {
            link.style.color = '';
        });
    });
}

// === Scroll to Top Button ===
function createScrollButton() {
    const scrollBtn = document.createElement('button');
    scrollBtn.innerText = '↑ Top';
    scrollBtn.style.position = 'fixed';
    scrollBtn.style.bottom = '20px';
    scrollBtn.style.right = '20px';
    scrollBtn.style.padding = '10px 15px';
    scrollBtn.style.backgroundColor = '#ff3f6c';
    scrollBtn.style.color = '#fff';
    scrollBtn.style.border = 'none';
    scrollBtn.style.borderRadius = '5px';
    scrollBtn.style.cursor = 'pointer';
    scrollBtn.style.display = 'none';
    scrollBtn.style.zIndex = '1000';
    document.body.appendChild(scrollBtn);

    scrollBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    window.addEventListener('scroll', () => {
        scrollBtn.style.display = window.scrollY > 300 ? 'block' : 'none';
    });
}

// === On Page Load ===
document.addEventListener('DOMContentLoaded', () => {
    loadLayout();
    createScrollButton();
});
