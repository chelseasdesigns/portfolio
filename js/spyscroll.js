document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.side-nav-item a');
    const sideNavbar = document.querySelector('.side-navbar');

    const showAtPosition = 500; // Adjust this value to the scroll position you want

    function updateActiveLink() {
        let index = sections.length;

        // Find the section currently in view
        while (--index && window.scrollY + window.innerHeight / 2 < sections[index].offsetTop) {}

        // Remove active class from all links
        navLinks.forEach((link) => link.classList.remove('active'));

        // Add active class to the current link
        if (index >= 0) {
            navLinks[index].classList.add('active');
        }
    }

    function checkScrollPosition() {
        if (window.scrollY >= showAtPosition) {
            sideNavbar.classList.add('visible');
        } else {
            sideNavbar.classList.remove('visible');
        }
    }

    // Initial call to set the active link on load
    updateActiveLink();
    checkScrollPosition();

    // Add event listeners for scroll and resize to update active link and navbar visibility
    window.addEventListener('scroll', () => {
        updateActiveLink();
        checkScrollPosition();
    });
    window.addEventListener('resize', () => {
        updateActiveLink();
        checkScrollPosition();
    });
});
