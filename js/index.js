document.addEventListener('DOMContentLoaded', function() {
    // Check if animations have already played
    var animationsPlayed = sessionStorage.getItem('animationsPlayed');

    // If animations have not played yet
    if (!animationsPlayed) {
        var title = document.querySelector('.title');
        var introParagraph2 = document.querySelector('.intro-paragraph2');
        var introParagraph3 = document.querySelector('.intro-paragraph3');
        var projectsButtonContainer = document.querySelector('.projects-button-container');

        anime({
            targets: title,
            translateY: ['100px', '0px'],
            opacity: [0, 1],
            easing: 'easeInOutQuad',
            duration: 1000,
            delay: 500
        });

        anime({
            targets: introParagraph2,
            translateY: ['100px', '0px'],
            opacity: [0, 1],
            easing: 'easeInOutQuad',
            duration: 1000,
            delay: 2000
        });

        anime({
            targets: introParagraph3,
            translateY: ['100px', '0px'],
            opacity: [0, 1],
            easing: 'easeInOutQuad',
            duration: 1000,
            delay: 3500
        });

        anime({
            targets: '.arrow-down',
            translateY: 20,
            opacity: [0, 1],
            easing: 'easeInOutSine',
            duration: 1500,
            delay: 4500
          });
          

        // Logging Animations (If User Has Already Opened the Webpage)

        var projectsButtonAnimation = anime({
            targets: projectsButtonContainer,
            scale: [0, 1],
            easing: 'easeOutExpo',
            duration: 1500,
            delay: 5500
        });

        projectsButtonAnimation.complete = function() {
            document.body.style.overflowY = 'scroll';
        };

        sessionStorage.setItem('animationsPlayed', true);
    }

// Scrolling Effect
    document.addEventListener('scroll', function() {
        var sections = document.querySelectorAll('section');
        var navItems = document.querySelectorAll('.nav-item');

        sections.forEach(function(section, index) {
            var top = section.offsetTop;
            var height = section.offsetHeight;

            if (window.scrollY >= top && window.scrollY < top + height) {
                navItems.forEach(function(navItem) {
                    navItem.classList.remove('active');
                });
                if (section.id !== 'welcome') {
                    navItems[index - 1].classList.add('active'); // Adjusting index for the welcome section
                }
            }
        });
    });
});

document.addEventListener('scroll', function() {
    var fuzzyCircle = document.querySelector('.fuzzy-circles');
    var scrollPosition = window.scrollY;

    // Adjust the position of the fuzzy circle based on scroll position
    fuzzyCircle.style.transform = 'translateY(' + (scrollPosition * 0.8) + 'px)';
});

function navigateTo(url) {
    window.location.href = url;
}
