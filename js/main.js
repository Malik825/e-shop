$(() => {

    $('.openCart').on('click', e => {
        $('.cartPage').addClass('active');
        $('.shadow').addClass('active');
    })
    $('.modal-header').on('click', e => {

        $('.shadow').removeClass('active');
        $('.cartPage').removeClass('active')
    })
    $('#productHandler').on('click', e => {

        $('.shadow').removeClass('active');
        $('.left_sidebar').removeClass('active')
    })
    $('.left_sidebar .items li').on('click', e => {
        $('.shadow').removeClass('active');
        $('.left_sidebar').removeClass('active')
    })
    $('.view').on('click', e => {

        $('.shadow').addClass('active');
        $('.left_sidebar').addClass('active')
    })
    $('.closeCart').on('click', e => {

        $('.shadow').removeClass('active');
        $('.cartPage').removeClass('active')

    })
    $('.add-to-cart').click(() => {
        $('.cartPage').addClass('active');
    })
    $('.openShadow').on('mouseenter', e => {
        $('.shadow').addClass('active');
        // alert('hello World')
    })
    setTimeout(() => {

        $('.openShadow').on('mouseleave', e => {
            $('.shadow').removeClass('active');
        })
    }, 1000);
    $('.items-inner ul li a').click(function(e) {
        e.preventDefault();
        let activeLinkId = $(this).attr("href");
        // console.log(activeLinkId)
        $('.mainGrid').removeClass('active');
        $('.mainGrid' + activeLinkId).addClass('active');
    })

    $("#allProductSlider").owlCarousel({
        items: 1,
        autoplay: true,
        smartSpeed: 900,
        loop: true,
        nav: true,
        dots: false,
        navText: [$('.owl-navigation .owl-nav-prev4'), $('.owl-navigation .owl-nav-next4')],

        autoplayHoverPause: true,
        // responsive: {
        //     0: {
        //         items: 1
        //     },

        //     425: {
        //         items: 2
        //     },
        //     988: {
        //         items: 4
        //     },

        // }

    })
    $("#shoesSlider").owlCarousel({
        items: 1,
        autoplay: true,
        smartSpeed: 900,
        loop: true,
        nav: false,
        dots: true,
        // navText: [$('.owl-navigation .owl-nav-prev5'), $('.owl-navigation .owl-nav-next5')],

        autoplayHoverPause: true,

    })

    $("#testimonial-carousel").owlCarousel({

        autoplay: true,
        smartSpeed: 700,
        loop: true,
        delay: 10,
        margin: 20,
        nav: true,
        dots: false,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1
            },

            425: {
                items: 1
            },
            557: {
                items: 2,
            },
            768: {
                items: 2
            },
            1000: {
                items: 2
            },

        }

    });

    $("#shirtSlider").owlCarousel({
        items: 1,
        autoplay: true,
        smartSpeed: 900,
        loop: true,
        nav: true,
        dots: true,
        // navText: [$('.owl-navigation .owl-nav-prev4'), $('.owl-navigation .owl-nav-next4')],

        autoplayHoverPause: true,


    })



});
let header = document.querySelector('.header');
let homeSection = document.querySelector('.banner-section');
const homeOptions = {}
const aboutOptions = {
    rootMargin: '300px 0px 0px 0px'
}
const sectionObserver = new IntersectionObserver(function(entries, homeObserver) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            header.classList.remove('fixed')
        } else {
            header.classList.add('fixed');
        }
    })
}, homeOptions);

sectionObserver.observe(homeSection);

let aboutSection = document.querySelector('.about .container');
let aboutImage = document.querySelector('.about-image');
let aboutText = document.querySelector('.about-text');

const aboutSectionObserver = new IntersectionObserver(function(entries, aboutObserver) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            aboutImage.classList.add('active');
            aboutText.classList.add('active');

        } else {
            // aboutSectionObserver.unobserve()
        }
    })
}, aboutOptions)

aboutSectionObserver.observe(aboutSection);





let homeImage = document.querySelector('.home-image img');
let miniHomeImages = document.querySelectorAll('.homeRightImage  img');


miniHomeImages.forEach(image => image.addEventListener('click', e => {
    let src = image.getAttribute('src');
    homeImage.src = src
}))

// const countDown =()=>
setInterval(() => {
    const count_down = document.querySelector('.count_down');
    const countDate = new Date('May 25, 2022').getTime();
    const now = new Date().getTime();
    const gap = (countDate - now);

    const seconds = 1000;
    const minutes = 60 * seconds;
    const hours = minutes * 60;
    const days = hours * 24;

    const textDay = Math.floor(gap / days);
    const textHours = Math.floor((gap % days) / hours);
    const textMinutes = Math.floor((gap % hours) / minutes);
    const textSeconds = Math.floor((gap % minutes) / seconds);
    if (gap < 0) {
        count_down.style.display = "none";
    } else {
        document.querySelector('.days').innerText = textDay;
        document.querySelector('.hours').innerText = textHours;
        document.querySelector('.minutes').innerText = textMinutes;
        document.querySelector('.seconds').innerText = textSeconds;

    }

}, 1000);
(() => {
    let accountForm = document.querySelector('.accountForm');
    let signupHandler = document.querySelector('.signupHandler');
    let closeFormHandler = document.querySelector('.closeForm');

    let openForm = (e) => {
        accountForm.classList.add('active');
    }
    let closeForm = (e) => {
        accountForm.classList.remove('active');
    }
    signupHandler.addEventListener('click', openForm);
    closeFormHandler.addEventListener('click', closeForm);

})();
(() => {
    let container = document.querySelector('.accountForm .container'),
        showHidePassword = document.querySelectorAll('#eye'),
        pwFields = document.querySelectorAll('.inputPassword'),
        signUp = document.querySelector('.signup-text'),
        login = document.querySelector('.login-text');

    showHidePassword.forEach(eyeIcon => {
        eyeIcon.addEventListener('click', e => {
            pwFields.forEach(pwField => {
                if (pwField.type === "password") {
                    pwField.type = "text";
                    showHidePassword.forEach(icon => {
                        icon.classList.replace("fa-eye-slash", "fa-eye")
                    })

                } else {
                    pwField.type = "password"
                    showHidePassword.forEach(icon => {
                        icon.classList.replace("fa-eye", "fa-eye-slash")
                    })
                }
            })
        })
    })

    signUp.addEventListener('click', e => {
        container.classList.add('active');
    });
    login.addEventListener('click', e => {
        container.classList.remove('active');
    });
})();

(() => {


    const menu = document.querySelector(".menu");
    const menuMain = menu.querySelector(".menu-main");
    const goBack = menu.querySelector(".go-back");
    const menuTrigger = document.querySelector(".mobile-menu-trigger");
    const closeMenu = menu.querySelector(".mobile-menu-close");
    let subMenu;
    menuMain.addEventListener("click", (e) => {
        if (!menu.classList.contains("active")) {
            return;
        }
        if (e.target.closest(".menu-item-has-children")) {
            const hasChildren = e.target.closest(".menu-item-has-children");
            showSubMenu(hasChildren);
        }
    });
    goBack.addEventListener("click", () => {
        hideSubMenu();
    })
    menuTrigger.addEventListener("click", () => {
        toggleMenu();
    })
    closeMenu.addEventListener("click", () => {
        toggleMenu();
    })
    document.querySelector(".menu-overlay").addEventListener("click", () => {
        toggleMenu();
    })

    function toggleMenu() {
        menu.classList.toggle("active");
        document.querySelector(".menu-overlay").classList.toggle("active");
    }

    function showSubMenu(hasChildren) {
        subMenu = hasChildren.querySelector(".sub-menu");
        subMenu.classList.add("active");
        subMenu.style.animation = "slideLeft 0.5s ease forwards";
        const menuTitle = hasChildren.querySelector("i").parentNode.childNodes[0].textContent;
        menu.querySelector(".current-menu-title").innerHTML = menuTitle;
        menu.querySelector(".mobile-menu-head").classList.add("active");
    }

    function hideSubMenu() {
        subMenu.style.animation = "slideRight 0.5s ease forwards";
        setTimeout(() => {
            subMenu.classList.remove("active");
        }, 300);
        menu.querySelector(".current-menu-title").innerHTML = "";
        menu.querySelector(".mobile-menu-head").classList.remove("active");
    }

    window.onresize = function() {
        if (this.innerWidth > 991) {
            if (menu.classList.contains("active")) {
                toggleMenu();
            }

        }
    }

})();