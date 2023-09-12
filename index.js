$(document).ready(function() {
    function slideInSlogans() {
        var slogans = $(".slogan");
        var delay = 1500;

        slogans.each(function(index) {
            var slogan = $(this);
            setTimeout(function() {
                slogan.css("left", "0");
            }, index * delay);
        });
    }

    slideInSlogans();
});




document.addEventListener("DOMContentLoaded", function() {
    setTimeout(function() {
        const companyLogo = document.getElementById("companyLogo");
        companyLogo.style.opacity = "0.3";
    }, 8500);
});




$(document).ready(function() {
    var $div = $("#shopLink");
    var $link = $("#shopIcon");
  
    setTimeout(function() {
        $div.css("opacity", 1);
        $link.addClass("shake");
    }, 3000);
    
    $link.on("click", function() {
        $link.removeClass("shake");
    });
});