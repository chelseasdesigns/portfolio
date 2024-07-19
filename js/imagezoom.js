document.addEventListener("DOMContentLoaded", function() {
    Fancybox.bind("[data-fancybox]", {
        Toolbar: {
            display: [
                { id: "counter", position: "center" },
                "zoom",
                "slideshow",
                "fullscreen",
                "download",
                "thumbs",
                "close",
            ],
        },
        Thumbs: {
            autoStart: false,
        },
        Image: {
            zoom: true,
        },
        
    });
});
