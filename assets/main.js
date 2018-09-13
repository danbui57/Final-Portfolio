$(document).ready(function () {
    $(".portfolio__title").on('click', function (event) {

        if (this.hash !== "") {
            event.preventDefault()
            ;

            // Store hash
            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function () {

                window.location.hash = hash;
            });
        }
    });

//     $(".selection").hover(function() {
// const isHovered = $(".selection").is(":hover");

//     if (isHovered)  {
//         $(this).addClass("animated fadeIn") 
//     } 
//         else {$(this).removeClass("animated fadeIn")}
//     }) 
});