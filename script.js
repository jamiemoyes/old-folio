function circularText (text, radius, index) {
    text = text.split(""),
        index = document.getElementsByClassName("circTxt")[index];

    var deg = 360 / text.length,
        origin = 0;

    text.forEach((l) => {
        l = `<p style='height:${radius}px;position:absolute;transform:rotate(${origin}deg);transform-origin:0 100%'>${l}</p>`;
        index.innerHTML += l;
        origin += deg;
    });
}
circularText("jamie moyes ", 100, 0);

$(window).on("load",function() {
    $(window).scroll(function() {
        var windowBottom = $(this).scrollTop() + $(this).innerHeight();
        $("#secondaryText2").each(function() {
            /* Check the location of each desired element */
            var objectBottom = $(this).offset().top + $(this).outerHeight();

            /* If the element is completely within bounds of the window, fade it in */
            if (objectBottom < windowBottom) { //object comes into view (scrolling down)
                if ($(this).css("opacity")==0) {$(this).fadeTo(500,1);}
            } else { //object goes out of view (scrolling up)
                if ($(this).css("opacity")==1) {$(this).fadeTo(500,0);}
            }
        });
    }).scroll(); //invoke scroll-handler on page-load
});

$(function() {
    $('a[href="#section02"]').on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top}, 500, 'linear');
    });
});


$(window).on("load",function() {
    $(window).scroll(function() {
        var windowBottom = $(this).scrollTop() + $(this).innerHeight();
        $("#writingText").each(function() {
            /* Check the location of each desired element */
            var objectBottom = $(this).offset().top + $(this).outerHeight();

            if (objectBottom < windowBottom) { //object comes into view (scrolling down)
                typeWriter();
            }
        });
    }).scroll(); //invoke scroll-handler on page-load
});

var i = 0;
    var text = "I'm Jamie, I'm in my fourth year of MEng Computer Science at Strathclyde.";
    var speed = 20;
function typeWriter() {
    if (i < text.length) {
        document.getElementById("writingText").innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}
