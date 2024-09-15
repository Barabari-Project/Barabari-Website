document.addEventListener('DOMContentLoaded', function() {
    function checkScreenSize() {

        setTimeout(()=>{
            const element = document.getElementsByClassName('forcefullwidth_wrapper_tp_banner');
            const section = document.getElementsByClassName('for-small-size');
           
            if (window.innerWidth <= 999) {
                console.log("done done")
                section[0].style.display = 'block';
                element[0].style.display = 'none';
            } else {
                element[0].style.display = 'block';
                section[0].style.display = 'none';

            }
        },50);
        
    }
    
    setTimeout(()=>{
        document.getElementById("root").style.visibility='visible';
    },500);

    // Check screen size on load
    checkScreenSize();
    const menuHeader = document.getElementsByClassName('menuHeader')[0];
    const menuWrapper = document.getElementsByClassName('menuWrapper')[0];
    menuHeader.addEventListener('click', () => {
      
    });

    const serviceLink = document.getElementById("GoToService");
    serviceLink.addEventListener('click', ()=>{
        menuHeader.className = 'off-canvas-menu-area menuHeader';
        menuWrapper.className = 'offcanvas-menu-wraper clearfix menuWrapper';
    })

    menuWrapper.addEventListener('click', () => {
    
    });
    // Add event listener for resize
    window.addEventListener('resize', checkScreenSize);
});


