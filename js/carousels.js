// Initialize all carousels when the DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Add loading class to body to prevent FOUC
    document.body.classList.add('carousel-loading');
    
    // Initialize carousels after a short delay to ensure DOM is ready
    setTimeout(initCarousels, 100);
});

function initCarousels() {
    // Initialize product carousels
    const productCarousels = document.querySelectorAll('.product-carousel');
    productCarousels.forEach(initProductCarousel);
    
    // Initialize shop by concern carousel if it exists
    const concernsGrid = document.querySelector('.concerns-grid');
    if (concernsGrid) {
        initConcernsCarousel(concernsGrid);
    }
    
    // Remove loading class when all carousels are initialized
    document.body.classList.remove('carousel-loading');
}

function initProductCarousel(carousel) {
    const track = carousel.querySelector('.carousel-track');
    const slides = Array.from(carousel.querySelectorAll('.carousel-slide'));
    const prevButton = carousel.querySelector('.prev');
    const nextButton = carousel.querySelector('.next');
    const dots = Array.from(carousel.querySelectorAll('.dot'));
    
    let currentIndex = 0;
    const slideCount = slides.length;
    const slideWidth = 100; // 100% of container width
    
    // Set initial position
    updateCarousel();
    
    // Event listeners for navigation buttons
    if (prevButton) {
        prevButton.addEventListener('click', () => {
            currentIndex = (currentIndex - 1 + slideCount) % slideCount;
            updateCarousel();
        });
    }
    
    if (nextButton) {
        nextButton.addEventListener('click', () => {
            currentIndex = (currentIndex + 1) % slideCount;
            updateCarousel();
        });
    }
    
    // Event listeners for dots
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            currentIndex = index;
            updateCarousel();
        });
    });
    
    // Auto-advance carousel
    let interval = setInterval(() => {
        currentIndex = (currentIndex + 1) % slideCount;
        updateCarousel();
    }, 5000);
    
    // Pause on hover
    carousel.addEventListener('mouseenter', () => {
        clearInterval(interval);
    });
    
    carousel.addEventListener('mouseleave', () => {
        clearInterval(interval);
        interval = setInterval(() => {
            currentIndex = (currentIndex + 1) % slideCount;
            updateCarousel();
        }, 5000);
    });
    
    // Touch support for mobile
    let touchStartX = 0;
    let touchEndX = 0;
    
    track.addEventListener('touchstart', e => {
        touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });
    
    track.addEventListener('touchend', e => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    }, { passive: true });
    
    function handleSwipe() {
        const difference = touchStartX - touchEndX;
        if (difference > 50) {
            // Swipe left
            currentIndex = (currentIndex + 1) % slideCount;
            updateCarousel();
        } else if (difference < -50) {
            // Swipe right
            currentIndex = (currentIndex - 1 + slideCount) % slideCount;
            updateCarousel();
        }
    }
    
    function updateCarousel() {
        // Update track position
        track.style.transform = `translateX(-${currentIndex * 100}%)`;
        
        // Update dots
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentIndex);
        });
        
        // Update ARIA attributes for accessibility and add animation classes
        slides.forEach((slide, index) => {
            const isActive = index === currentIndex;
            slide.setAttribute('aria-hidden', !isActive);
            slide.setAttribute('tabindex', isActive ? '0' : '-1');
            
            // Add animation classes based on slide direction
            if (isActive) {
                slide.classList.add('active');
                slide.style.animation = 'none';
                // Force reflow to ensure the animation restarts
                void slide.offsetWidth;
                slide.style.animation = '';
                
                // Determine animation direction based on previous index
                if (window.lastCarouselIndex !== undefined) {
                    const direction = currentIndex > window.lastCarouselIndex ? 'slide-in-right' : 'slide-in-left';
                    slide.classList.add(direction);
                    
                    // Remove animation class after it completes
                    setTimeout(() => {
                        slide.classList.remove('slide-in-right', 'slide-in-left');
                    }, 500);
                }
            } else {
                slide.classList.remove('active', 'slide-in-right', 'slide-in-left');
            }
        });
        
        // Store the current index for next animation
        window.lastCarouselIndex = currentIndex;
    }
}

function initConcernsCarousel(container) {
    // Add carousel wrapper if it doesn't exist
    if (!container.classList.contains('carousel-wrapper')) {
        const wrapper = document.createElement('div');
        wrapper.className = 'carousel-wrapper';
        wrapper.style.overflow = 'hidden';
        wrapper.style.position = 'relative';
        wrapper.style.width = '100%';
        
        // Move all cards into the wrapper
        while (container.firstChild) {
            wrapper.appendChild(container.firstChild);
        }
        container.appendChild(wrapper);
    }

    const cards = Array.from(container.querySelectorAll('.concern-card'));
    if (cards.length === 0) return;
    
    // Add carousel track
    const track = document.createElement('div');
    track.className = 'concerns-track';
    track.style.display = 'flex';
    track.style.transition = 'transform 0.5s ease-in-out';
    
    // Move cards into track
    cards.forEach(card => {
        card.style.flex = '0 0 33.333%';
        card.style.padding = '0 12px';
        card.style.boxSizing = 'border-box';
        track.appendChild(card);
    });
    
    // Clear container and add track
    container.innerHTML = '';
    container.appendChild(track);
    
    // Create and add carousel controls
    const controls = document.createElement('div');
    controls.className = 'concerns-carousel-controls';
    controls.innerHTML = `
        <button class="concerns-prev" aria-label="Previous">❮</button>
        <div class="concerns-dots"></div>
        <button class="concerns-next" aria-label="Next">❯</button>
    `;
    container.parentNode.insertBefore(controls, container.nextSibling);
    
    // Set up carousel
    let currentIndex = 0;
    const cardsPerSlide = 3;
    const totalSlides = Math.ceil(cards.length / cardsPerSlide);
    const dotsContainer = controls.querySelector('.concerns-dots');
    const prevButton = controls.querySelector('.concerns-prev');
    const nextButton = controls.querySelector('.concerns-next');
    
    // Create dots
    for (let i = 0; i < totalSlides; i++) {
        const dot = document.createElement('span');
        dot.className = `concerns-dot ${i === 0 ? 'active' : ''}`;
        dot.setAttribute('data-slide', i);
        dot.addEventListener('click', () => goToSlide(i));
        dotsContainer.appendChild(dot);
    }
    
    // Navigation functions
    function updateCarousel() {
        const cardWidth = 100 / cardsPerSlide;
        track.style.transform = `translateX(-${currentIndex * 100}%)`;
        
        // Update dots
        const dots = Array.from(dotsContainer.querySelectorAll('.concerns-dot'));
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentIndex);
        });
        
        // Update button states
        prevButton.disabled = currentIndex === 0;
        nextButton.disabled = currentIndex >= totalSlides - 1;
    }
    
    function goToSlide(index) {
        if (index >= 0 && index < totalSlides) {
            currentIndex = index;
            updateCarousel();
        }
    }
    
    // Event listeners
    prevButton.addEventListener('click', () => goToSlide(currentIndex - 1));
    nextButton.addEventListener('click', () => goToSlide(currentIndex + 1));
    
    // Touch support
    let touchStartX = 0;
    let touchEndX = 0;
    
    container.addEventListener('touchstart', e => {
        touchStartX = e.changedTouches[0].screenX;
        clearInterval(interval);
    }, { passive: true });
    
    container.addEventListener('touchend', e => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
        resetAutoSlide();
    }, { passive: true });
    
    function handleSwipe() {
        const difference = touchStartX - touchEndX;
        if (difference > 50) {
            // Swipe left - next slide
            goToSlide(Math.min(currentIndex + 1, totalSlides - 1));
        } else if (difference < -50) {
            // Swipe right - previous slide
            goToSlide(Math.max(currentIndex - 1, 0));
        }
    }
    
    // Auto-advance functionality
    let interval;
    
    function startAutoSlide() {
        clearInterval(interval);
        interval = setInterval(() => {
            goToSlide((currentIndex + 1) % totalSlides);
        }, 5000);
    }
    
    function resetAutoSlide() {
        clearInterval(interval);
        startAutoSlide();
    }
    
    // Initialize carousel
    updateCarousel();
    startAutoSlide();
    
    // Pause on hover
    container.addEventListener('mouseenter', () => clearInterval(interval));
    container.addEventListener('mouseleave', resetAutoSlide);
    
    // Handle window resize
    let resizeTimer;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => {
            updateCarousel();
        }, 250);
    });
}
