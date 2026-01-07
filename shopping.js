// shopping-zone.js - Combined functionality for shopping destination cards

/**
 * Toggle flip animation for cards
 * @param {number} id - The ID of the card to flip
 */
function toggleFlip(id) {
    const card = document.querySelector(`.flip-card[data-card-id="${id}"]`);
    if (card) {
        card.classList.toggle('flipped');
    }
}

/**
 * Get directions to a location using Google Maps
 * @param {number} lat - Destination latitude
 * @param {number} lng - Destination longitude
 * @param {Event} [event] - Optional click event to stop propagation
 */
function getDirections(lat, lng, event) {
    if (event) {
        event.stopPropagation();
    }

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                const userLat = position.coords.latitude;
                const userLng = position.coords.longitude;
                window.open(
                    `https://www.google.com/maps/dir/?api=1&origin=${userLat},${userLng}&destination=${lat},${lng}`,
                    '_blank'
                );
            },
            (error) => {
                console.error('Geolocation error:', error);
                alert('Please enable location access to get directions.');
                window.open(
                    `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`,
                    '_blank'
                );
            }
        );
    } else {
        alert('Geolocation is not supported by your browser.');
        window.open(
            `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`,
            '_blank'
        );
    }
}

/**
 * Initialize Bootstrap tooltips and other DOM enhancements
 */
document.addEventListener('DOMContentLoaded', function () {
    // Initialize Bootstrap tooltips
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });

    // Add click handlers for all flip cards
    document.querySelectorAll('.flip-card').forEach(card => {
        card.addEventListener('click', function () {
            const id = this.getAttribute('data-card-id');
            if (id) {
                toggleFlip(id);
            }
        });
    });

    // Add handler for all direction buttons
    document.querySelectorAll('.btn-directions').forEach(btn => {
        btn.addEventListener('click', function (e) {
            const lat = this.getAttribute('data-lat');
            const lng = this.getAttribute('data-lng');
            if (lat && lng) {
                getDirections(parseFloat(lat), parseFloat(lng), e);
            }
        });
    });
});
