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









(function($) { 
    $(function() { 
  
      //  open and close nav 
      $('#navbar-toggle').click(function() {
        $('nav ul').slideToggle();
      });
  
  
      // Hamburger toggle
      $('#navbar-toggle').on('click', function() {
        this.classList.toggle('active');
      });
  
  
      // If a link has a dropdown, add sub menu toggle.
      $('nav ul li a:not(:only-child)').click(function(e) {
        $(this).siblings('.navbar-dropdown').slideToggle("slow");
  
        // Close dropdown when select another dropdown
        $('.navbar-dropdown').not($(this).siblings()).hide("slow");
        e.stopPropagation();
      });
  
  
      // Click outside the dropdown will remove the dropdown class
      $('html').click(function() {
        $('.navbar-dropdown').hide();
      });
    }); 
  })(jQuery); 
  
  







