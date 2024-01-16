    window.onscroll = function () {
        // Get the header element
        var header = document.querySelector('.header');

        // Get the current scroll position
        var scrollPosition = window.scrollY || document.documentElement.scrollTop;

        // Add or remove the sticky class based on the scroll position
        if (scrollPosition > header.offsetTop) {
            header.classList.add('sticky');
            document.body.classList.add('sticky-header-padding');
        } else {
            header.classList.remove('sticky');
            document.body.classList.remove('sticky-header-padding');
        }
    };
