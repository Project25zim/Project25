const apiBaseUrl = 
     'http://localhost:5155'; // Development;

async function populateCarousel() {
    try {
        const response = await fetch(`${apiBaseUrl}/api/images/carousel`);
        const images = await response.json();

        const carouselInner = document.querySelector('.carousel-inner');
        const indicators = document.querySelector('.carousel-indicators');

        carouselInner.innerHTML = '';
        indicators.innerHTML = '';

        images.forEach((imageUrl, index) => {
            const carouselItem = document.createElement('div');
            carouselItem.className = `carousel-item ${index === 0 ? 'active' : ''}`;
            carouselItem.innerHTML = `<img src="${imageUrl}" class="d-block w-100" alt="Slide ${index + 1}">`;
            carouselInner.appendChild(carouselItem);

            const indicator = document.createElement('button');
            indicator.type = 'button';
            indicator.dataset.bsTarget = '#imageCarousel';
            indicator.dataset.bsSlideTo = index;
            indicator.className = `${index === 0 ? 'active' : ''}`;
            indicator.ariaLabel = `Slide ${index + 1}`;
            indicators.appendChild(indicator);
        });
    } catch (error) {
        console.error('Error loading carousel images:', error);
    }
}

document.addEventListener('DOMContentLoaded', populateCarousel);

    document.addEventListener('DOMContentLoaded', () => {
        const currentPath = window.location.pathname;
        const navLinks = document.querySelectorAll('.nav-link');

        navLinks.forEach(link => {
            const href = link.getAttribute('href');
            if (currentPath.includes(href)) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
    });

