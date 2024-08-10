document.addEventListener('DOMContentLoaded', () => {
    
    const showPopup = (src) => {
        const popup = document.querySelector('.popup-image');

        popup.style.display = 'block';

        document.querySelector('.popup-image img').src = src;
        
        document.body.style.overflow = 'hidden'; 
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

    document.querySelector('.popup-image span').onclick = () => {
        hidePopup();
    };

    document.querySelector('.popup-image').onclick = (event) => {
       
        if (event.target === document.querySelector('.popup-image')) {
            hidePopup();

        }
    };
});








