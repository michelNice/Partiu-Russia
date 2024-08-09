document.addEventListener('DOMContentLoaded', () => {
    // Function to show the popup and prevent scrolling
    const showPopup = (src) => {
        const popup = document.querySelector('.popup-image');
        popup.style.display = 'block';
        document.querySelector('.popup-image img').src = src;
        document.body.style.overflow = 'hidden'; // Prevent scrolling
    };
    const hidePopup = () => {
        const popup = document.querySelector('.popup-image');
        popup.style.display = 'none';
        document.body.style.overflow = ''; 
    };

    document.querySelectorAll('.clickable-image').forEach(image => {
        image.onclick = () => {
            showPopup(image.getAttribute('src'));
        };
    });

    // Set up click event for the close button
    document.querySelector('.popup-image span').onclick = () => {
        hidePopup();
    };

    // Set up click event for the overlay
    document.querySelector('.popup-image').onclick = (event) => {
        // Check if the click is on the overlay (not on the image itself)
        if (event.target === document.querySelector('.popup-image')) {
            hidePopup();
        }
    };
});








