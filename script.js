var check1 = false,check2 = false, check3 = false, check4 = false, check5 = false, check6 = false, check7 = false, check8 = false, check9 = false;
let arrow = document.querySelectorAll('.arrow-img');
let show_box = document.querySelectorAll('.box-show');
let line = document.querySelectorAll('.white-line');
let circle = document.getElementById('circle');
let bg = document.getElementById('bg');
let bgwrap = document.getElementById('bg-wrap');

function show1(){
    if($(window).width()>=767){
    if(check1 == false){
        arrow[0].style.animation = "spin 0.12s forwards ease-in 0.1s";
        if($(window).width()<1680){
            show_box[0].style.animation = "showmore 0.5s forwards";
        }
        else{
            show_box[0].style.animation = "showmore3 0.5s forwards";
        }
        line[1].style.display = 'none';
        check1 = true;
    }
    else{
        arrow[0].style.animation = "spin2 0.12s forwards ease-in";
        if($(window).width()<1680){
            show_box[0].style.animation = "showmore2 0.5s forwards";
        }
        else{
            show_box[0].style.animation = "showmore4 0.5s forwards";
        }
        setTimeout(function(){line[1].style.display = 'block'; }, 450);
        check1 = false;
    }
    }
    else{
        window.location.href = '';
    }
}
function show2(){
    if($(window).width()>=767){
    if(check2 == false){
        arrow[1].style.animation = "spin 0.12s forwards ease-in 0.1s";
        if($(window).width()<1680){
            show_box[1].style.animation = "showmore 0.5s forwards";
        }
        else{
            show_box[1].style.animation = "showmore3 0.5s forwards";
        }
        check2 = true;
        line[2].style.display = 'none';
    }
    else{
        arrow[1].style.animation = "spin2 0.12s forwards ease-in";
        if($(window).width()<1680){
            show_box[1].style.animation = "showmore2 0.5s forwards";
        }
        else{
            show_box[1].style.animation = "showmore4 0.5s forwards";
        }
        setTimeout(function(){line[2].style.display = 'block'; }, 450);
        check2 = false;
    }
    }
    else{
        window.location.href = '';
    }
}
function show3(){
    if($(window).width()>=767){
    if(check3 == false){
        arrow[2].style.animation = "spin 0.12s forwards ease-in 0.1s";
        if($(window).width()<1680){
            show_box[2].style.animation = "showmore 0.5s forwards";
        }
        else{
            show_box[2].style.animation = "showmore3 0.5s forwards";
        }
        line[3].style.display = 'none';
        check3 = true;
    }
    else{
        arrow[2].style.animation = "spin2 0.12s forwards ease-in";
        if($(window).width()<1680){
            show_box[2].style.animation = "showmore2 0.5s forwards";
        }
        else{
            show_box[2].style.animation = "showmore4 0.5s forwards";
        }
        setTimeout(function(){line[3].style.display = 'block'; }, 450);
        check3 = false;
    }
    }
    else{
        window.location.href = '';
    }
}
function show4(){
    if($(window).width()>=767){
    if(check4 == false){
        arrow[3].style.animation = "spin 0.12s forwards ease-in 0.1s";
        if($(window).width()<1680){
            show_box[3].style.animation = "showmore 0.5s forwards";
        }
        else{
            show_box[3].style.animation = "showmore3 0.5s forwards";
        }
        line[4].style.display = 'none';
        check4 = true;
    }
    else{
        arrow[3].style.animation = "spin2 0.12s forwards ease-in";
        if($(window).width()<1680){
            show_box[3].style.animation = "showmore2 0.5s forwards";
        }
        else{
            show_box[3].style.animation = "showmore4 0.5s forwards";
        }
        setTimeout(function(){line[4].style.display = 'block'; }, 450);
        check4 = false;
    }
    }
    else{
        window.location.href = '';
    }
}
function show5(){
    if($(window).width()>=767){
    if(check5 == false){
        arrow[4].style.animation = "spin 0.12s forwards ease-in 0.1s";
        if($(window).width()<1680){
            show_box[4].style.animation = "showmore 0.5s forwards";
        }
        else{
            show_box[4].style.animation = "showmore3 0.5s forwards";
        }
        line[5].style.display = 'none';
        check5 = true;
    }
    else{
        arrow[4].style.animation = "spin2 0.12s forwards ease-in";
        if($(window).width()<1680){
            show_box[4].style.animation = "showmore2 0.5s forwards";
        }
        else{
            show_box[4].style.animation = "showmore4 0.5s forwards";
        }
        setTimeout(function(){line[5].style.display = 'block'; }, 450);
        check5 = false;
    }
    }
    else{
        window.location.href = '';
    }
}
function show6(){
    if($(window).width()>=767){
    if(check6 == false){
        arrow[5].style.animation = "spin 0.12s forwards ease-in 0.1s";
        if($(window).width()<1680){
            show_box[5].style.animation = "showmore 0.5s forwards";
        }
        else{
            show_box[5].style.animation = "showmore3 0.5s forwards";
        }
        line[6].style.display = 'none';
        check6 = true;
    }
    else{
        arrow[5].style.animation = "spin2 0.12s forwards ease-in";
        if($(window).width()<1680){
            show_box[5].style.animation = "showmore2 0.5s forwards";
        }
        else{
            show_box[5].style.animation = "showmore4 0.5s forwards";
        }
        setTimeout(function(){line[6].style.display = 'block'; }, 450);
        check6 = false;
    }
    }
    else{
        window.location.href = '';
    }
}
function show7(){
    if($(window).width()>=767){
    if(check7 == false){
        arrow[6].style.animation = "spin 0.12s forwards ease-in 0.1s";
        if($(window).width()<1680){
            show_box[6].style.animation = "showmore 0.5s forwards";
        }
        else{
            show_box[6].style.animation = "showmore3 0.5s forwards";
        }
        line[7].style.display = 'none';
        check7 = true;
    }
    else{
        arrow[6].style.animation = "spin2 0.12s forwards ease-in";
        if($(window).width()<1680){
            show_box[6].style.animation = "showmore2 0.5s forwards";
        }
        else{
            show_box[6].style.animation = "showmore4 0.5s forwards";
        }
        setTimeout(function(){line[7].style.display = 'block'; }, 450);
        check7 = false;
    }
    }
    else{
        window.location.href = '';
    }
}
function show8(){
    if($(window).width()>=767){
    if(check8 == false){
        arrow[7].style.animation = "spin 0.12s forwards ease-in 0.1s";
        if($(window).width()<1680){
            show_box[7].style.animation = "showmore 0.5s forwards";
        }
        else{
            show_box[7].style.animation = "showmore3 0.5s forwards";
        }
        line[8].style.display = 'none';
        check8 = true;
    }
    else{
        arrow[7].style.animation = "spin2 0.12s forwards ease-in";
        if($(window).width()<1680){
            show_box[7].style.animation = "showmore2 0.5s forwards";
        }
        else{
            show_box[7].style.animation = "showmore4 0.5s forwards";
        }
        setTimeout(function(){line[8].style.display = 'block'; }, 450);
        check8 = false;
    }
    }
    else{
        window.location.href = '';
    }
}
function show9(){
    if($(window).width()>=767){
    if(check9 == false){
        arrow[8].style.animation = "spin 0.12s forwards ease-in 0.1s";
        if($(window).width()<1680){
            show_box[8].style.animation = "showmore 0.5s forwards";
        }
        else{
            show_box[8].style.animation = "showmore3 0.5s forwards";
        }
        line[9].style.display = 'none';
        check9 = true;
    }
    else{
        arrow[8].style.animation = "spin2 0.12s forwards ease-in";
        if($(window).width()<1680){
            show_box[8].style.animation = "showmore2 0.5s forwards";
        }
        else{
            show_box[8].style.animation = "showmore4 0.5s forwards";
        }
        setTimeout(function(){line[9].style.display = 'block'; }, 450);
        check9 = false;
    }
    }
    else{
        window.location.href = '';
    }
}

let show = document.getElementById("navbarNav");
let shows = document.getElementById("navbar-nav");
    var x = window.matchMedia("only screen and (max-width: 990px)");
    var y = window.matchMedia("only screen and (max-width: 767px)");
    var z = window.matchMedia("only screen and (min-width: 990px)");


    i = true;
    function pic(){
        if (i == true) {
            if ($(window).width() < 990) {
                      document.getElementById("one").style="transform: translate3d(0px, 0px, 0px) scale3d(0, 0, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg); transform-style: preserve-3d; transition:0.3s ease";
                      document.getElementById("two").style="transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg); transform-style: preserve-3d; transition:0.3s ease";
                    //   show.style = "display : block;";
                    // setTimeout(function(){show.style.display = 'block'; }, 320);
                      setTimeout(function(){document.getElementById('three').style.display = 'block'; }, 200);
                      setTimeout(function(){document.getElementById('four').style.display = 'block'; }, 200);
                      setTimeout(function(){document.getElementById('five').style.display = 'block'; }, 200);
                      setTimeout(function(){document.getElementById('six').style.display = 'block'; }, 200);
                     show.style.animation = "sh1 0.5s forwards";
                     $("button").attr("aria-expanded","true");
                    i = false;
            }
             if ($(window).width() < 767) {
                      document.getElementById("one").style="transform: translate3d(0px, 0px, 0px) scale3d(0, 0, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg); transform-style: preserve-3d; transition:0.3s ease";
                      document.getElementById("two").style="transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg); transform-style: preserve-3d; transition:0.3s ease";
                      show.style = "display : block;";
                      setTimeout(function(){document.getElementById('three').style.display = 'block'; }, 200);
                      setTimeout(function(){document.getElementById('four').style.display = 'block'; }, 200);
                      setTimeout(function(){document.getElementById('five').style.display = 'block'; }, 200);
                      setTimeout(function(){document.getElementById('six').style.display = 'block'; }, 200);
                     show.style.animation = "sh2 0.5s forwards";
                     
                     $("button").attr("aria-expanded","true");
                    i = false;
            }
        }
        else if (i == false) {
            if ($(window).width() < 990) {
                    document.getElementById("one").style="transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg); transform-style: preserve-3d; transition:0.3s ease";
                    document.getElementById("two").style="transform: translate3d(0px, 0px, 0px) scale3d(0, 0, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg); transform-style: preserve-3d; transition:0.3s ease";
                    show.style.animation = "sh3 1.5s forwards";
                    $("button").attr("aria-expanded","false");
                    setTimeout(function(){document.getElementById('three').style.display = 'none'; }, 100);
                    setTimeout(function(){document.getElementById('four').style.display = 'none'; }, 200);
                    setTimeout(function(){document.getElementById('five').style.display = 'none'; }, 250);
                    setTimeout(function(){document.getElementById('six').style.display = 'none'; },300);
                    i = true;
            }
             if ($(window).width() < 767) {
                    document.getElementById("one").style="transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg); transform-style: preserve-3d; transition:0.3s ease";
                    document.getElementById("two").style="transform: translate3d(0px, 0px, 0px) scale3d(0, 0, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg); transform-style: preserve-3d; transition:0.3s ease";
                    show.style.animation = "sh4 0.5s forwards";
                    $("button").attr("aria-expanded","false");
                    setTimeout(function(){document.getElementById('three').style.display = 'none'; }, 200);
                    setTimeout(function(){document.getElementById('four').style.display = 'none'; }, 200);
                    setTimeout(function(){document.getElementById('five').style.display = 'none'; }, 200);
                    setTimeout(function(){document.getElementById('six').style.display = 'none'; }, 100);
                    i = true;
            }
            }
        
        }
        // let show = document.getElementById("navbarNav");
        let shownav = document.querySelector('#navbarNav');
        let i2 = false;

        function check(){
            if(i2==false){
                i2 = true;
            }
            else{
                i2 = false;
            }
        }

function resize() {
    if(i2){
        if($(window).width() < 767){
        shownav.style.animation = "none";
        shownav.style.height = "280px";
        shownav.style.top = "75px";
    }
    else if($(window).width() < 991){
        shownav.style.animation = "none";
        shownav.style.height = "620px";
        shownav.style.top = "140px";
    }
    else{
    }
    }
    if ($(window).width() > 990) {
        // shownav.style = "display : none;";
        shownav.style.height = "0";
        shownav.style.animation = "none";
        $("button").attr("aria-expanded","false");
        document.getElementById('three').style.display = 'none';
        document.getElementById('four').style.display = 'none';
        document.getElementById('five').style.display = 'none';
        document.getElementById('six').style.display = 'none';
        document.getElementById("one").style="transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg); transform-style: preserve-3d; transition:0.3s ease";
        document.getElementById("two").style="transform: translate3d(0px, 0px, 0px) scale3d(0, 0, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg); transform-style: preserve-3d; transition:0.3s ease";
        i2 = false;
        i=true;
    }
    
         
    if ( $(window).width() < 767) {
        for( var i=0;i<show_box.length;i++){
        show_box[i].style.animation = "none";
        line[i+1].style.display = 'block';
        arrow[i].style.animation = "none";
        }
        check1 = false;
        check2 = false;
        check3 = false;
        check4 = false;
        check5 = false;
        check6 = false;
        check7 = false;
        check8 = false;
        check9 = false;
    }

        clearTimeout(window.resizedFinished);
        window.resizedFinished = setTimeout(function(){
            if(circle_h != parseInt(getComputedStyle(circle).getPropertyValue('height'))){
                window.location.reload();
            }
        }, 0);
}

$("a[href='#top']", "#wrap-arrow").click(function() {
    $("html, body").animate({ scrollTop: 0 }, 1500, "swing");
    return false;
  });

var lastScrollTop = 0;
var cftop = parseInt(getComputedStyle(circle).getPropertyValue('margin-top'))
var circle_h = parseInt(getComputedStyle(circle).getPropertyValue('height'));
var bg_h = circle_h/2;

$(window).on("resize", resize);
resize();

window.addEventListener('scroll', function(){
    changebg();
});

function changebg(){
    var value = window.scrollY
    if($(window).width()>1679){
        if(value>=4000){
            // circle.style.marginTop = 2350+'px';
        }
        else{
            var change = bg_h +(cftop+value/2);
            circle.style.marginTop = cftop+value/2+'px';
            bg.style.backgroundImage = 'linear-gradient(to bottom, #005cef '+change+'px, #fff0 '+change+'px)';
        }
    }
    else{
        if(value>=2800){
            circle.style.marginTop = 1800+'px';
        }
        else{
            var change = bg_h +(cftop+value/1.75);
            circle.style.marginTop = cftop+value/1.75+'px';
            bg.style.backgroundImage = 'linear-gradient(to bottom, #005cef '+change+'px, #fff0 '+change+'px)';
        }
    }
}
