/* base utilsié
function trapFocus() {
    const element = lightboxModal;
    const focusableEls = element.querySelectorAll('a[href]:not([disabled]), button:not([disabled]), textarea:not([disabled]), input[type="text"]:not([disabled]), input[type="radio"]:not([disabled]), input[type="checkbox"]:not([disabled]), select:not([disabled])');
    const firstFocusableEl = focusableEls[0]; 
    const lastFocusableEl = focusableEls[focusableEls.length - 1]; 
    const nextFocusableEl = focusableEls[0+1];  
    const prevFocusableEl = focusableEls[0-1];  
    const KEYCODE_TAB = 9;
  
    element.addEventListener('keydown', function(e) {
        const isTabPressed = (e.key === 'Tab' || e.keyCode === KEYCODE_TAB);
  
      if (!isTabPressed) { 
        return; 
      }
  
      if ( e.shiftKey ) { // shift + tab
        if (document.activeElement === firstFocusableEl) {
            lastFocusableEl.focus();
            e.preventDefault();
          }
        } else  { // tab
        if (document.activeElement === lastFocusableEl) {
            firstFocusableEl.focus();
            e.preventDefault();
          }
        }
    });
  }

*/


function trapFocusContact(/* element */) {
    const element = modal;
    const focusableEls = element.querySelectorAll('a[href]:not([disabled]), button:not([disabled]), textarea:not([disabled]), input[type="text"]:not([disabled]), input[type="radio"]:not([disabled]), input[type="checkbox"]:not([disabled]), select:not([disabled])');
    const firstFocusableEl = focusableEls[0]; // par defaut il est sur prenom le focus mais on peut aussi mettre le premier élément focusable sur 1 est le dernier sur 0
    const lastFocusableEl = focusableEls[focusableEls.length - 1]; 
    const KEYCODE_TAB = 9;
  
    element.addEventListener('keydown', function(e) {
        const isTabPressed = (e.key === 'Tab' || e.keyCode === KEYCODE_TAB);
  
      if (!isTabPressed) { 
        return; 
      }
  
      if ( e.shiftKey ) /* shift + tab */ {
        if (document.activeElement === firstFocusableEl) {
            lastFocusableEl.focus();
            e.preventDefault();
          }
        } else /* tab */ {
        if (document.activeElement === lastFocusableEl) {
            firstFocusableEl.focus();
            e.preventDefault();
          }
        }
    });
  }

  function trapFocusLightbox(/* element */) {
    const element = lightboxModal;
    const focusableEls = element.querySelectorAll('a[href]:not([disabled]), button:not([disabled]), textarea:not([disabled]), input[type="text"]:not([disabled]), input[type="radio"]:not([disabled]), input[type="checkbox"]:not([disabled]), select:not([disabled])');
    const firstFocusableEl = focusableEls[0]; 
    const lastFocusableEl = focusableEls[focusableEls.length - 1]; 
    const nextFocusableEl = focusableEls[0+1];  
    const prevFocusableEl = focusableEls[0-1];  
    const KEYCODE_TAB = 9;
  
    element.addEventListener('keydown', function(e) {
        const isTabPressed = (e.key === 'Tab' || e.keyCode === KEYCODE_TAB);
  
      if (!isTabPressed) { 
        return; 
      }
  
      if ( e.shiftKey ) /* shift + tab */ {
        if (document.activeElement === btnPrevLightbox) {
            btnCloseLightbox.focus();
            e.preventDefault();
          }
        } else /* tab */ {
        if (document.activeElement === btnCloseLightbox) {
            btnPrevLightbox.focus();
            e.preventDefault();
          }
        }
    });
  }
