// Sticky Navigation
let navbar = $(".navbar");
$(window).scroll(function() {
    
    // console.log(window.innerHeight);
    // console.log($(".section-2").offset().top);


    // let oTop = $(".section-2").offset().top - window.innerHeight;
    // console.log(oTop);
    
    
    let oTop = $(".section-2").offset().top - window.innerHeight;
    if ($(window).scrollTop() > oTop) {
        navbar.addClass("sticky");
    }
    else {
        navbar.removeClass("sticky");
    }
})


// Counter Animation

let nCount = function(selector) {
    $(selector).each(function() {
        $(this).animate({
            Counter: $(this).text()
        },
        {
            duration: 5000,
            easing: "swing",
            step: function(value) {
                $(this).text(Math.ceil(value));
            }
        }
        );
    });
};


let a = 0;
$(window).scroll(function(){
    let oTop = $(".numbers").offset().top - window.innerHeight;  
    if(a==0 && $(window).scrollTop() >= oTop ){
        a++;
        nCount(".rect > h1");
    }
    
}
);