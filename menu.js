document.addEventListener('DOMContentLoaded', function () {
    var mobileMenu = document.getElementById('mobile-menu');
    var nav = document.querySelector('.nav');

    mobileMenu.addEventListener('click', function () {
        nav.classList.toggle('show');
    });

    // Agregamos este código para manejar la apertura de los submenús en dispositivos móviles
    var navItems = document.querySelectorAll('.nav > li');

    navItems.forEach(function (item) {
        item.addEventListener('click', function (e) {
            if (window.innerWidth <= 768) {
                var subMenu = item.querySelector('ul');
                if (subMenu) {
                    e.preventDefault();
                    item.classList.toggle('show-submenu');
                    subMenu.classList.toggle('show-submenu');
                }
            }
        });
    });
});