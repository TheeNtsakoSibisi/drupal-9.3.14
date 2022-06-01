
window.addEventListener('load', function () {
    var pageUrl = window.location.href;
    var menuItemContainer = document.getElementsByClassName("main-menu").item(0);
    var menuItems = menuItemContainer.getElementsByTagName("a");
    menuItems = [...menuItems];


    menuItems.map(function(menuItem, index){
        var menuItemHref = menuItem.getAttribute("href");

        if (pageUrl === menuItemHref) {
            menuItem.classList.add("on-page")
        }
    })

    // for (var x = 0; x <= menuItems.length - 1; x++) {
    //     var menuItem = menuItems[x];
    //     // console.log(menuItem.getAttribute("href"));
    //     console.log(menuItem);

    // }

    // Display menu when burger icon is clicked
    function mobileMenu(e) {
    
        e.preventDefault();
    
        var show = document.getElementById("menu-items").parentNode;
        var structure = "col-lg-8 col-12 d-none d-lg-block";
    
        if (show.className === structure) {
            show.classList.remove("d-none", "d-lg-block");
        } else {
            show.className = structure;
        }
    }

    function stickyHeader() {
        var header = document.getElementById("header");
        var sticky = header.offsetTop;

        if (sticky >= 1) {
            header.classList.add("sticky");
        } else {
            header.classList.remove("sticky");
        }
    }
    
   
    
    (function () {
        // burger menu click action
        document.getElementById("burger-menu").addEventListener("click", mobileMenu);

        // Sticky header
        window.onscroll = function () { stickyHeader() };

    })();



})





