var check1 = false,check2 = false, check3 = false, check4 = false, check5 = false, check6 = false, check7 = false, check8 = false, check9 = false;
let arrow = document.querySelectorAll('.arrow-img');
let show_box = document.querySelectorAll('.box-show');
let line = document.querySelectorAll('.white-line');
let circle = document.getElementById('circle');
let bg = document.getElementById('bg');
let bgwrap = document.getElementById('bg-wrap');
let hd = document.getElementById('header');
let hd1 = document.getElementById('header1');

let hd2 = document.getElementById('header2');
let hd22 = document.getElementById('header22');

let hd3 = document.getElementById('header3');
let hd33 = document.getElementById('header33');

let hd4 = document.getElementById('header4');
let hd44 = document.getElementById('header44');

function show1(){
    
    if($(window).width()>=760){
    if(check1 == false){
        hd.style.color = "#005cef";
        hd1.style.color = "#005cef";
        hd.style.transition = "0.5s ease";
        hd1.style.transition = "0.5s ease";
        arrow[0].style.animation = "spin 0.12s forwards ease-in 0.1s";
        show_box[0].style.animation = "showmore 0.5s forwards";
        line[1].style.display = 'none';
        check1 = true;
    }
    else{
        hd.style.color = "#ff1f25";
        hd1.style.color = "#ff1f25";
        hd.style.transition = "0.5s ease";
        hd1.style.transition = "0.5s ease";
        arrow[0].style.animation = "spin2 0.12s forwards ease-in";
        show_box[0].style.animation = "showmore2 0.5s forwards";
        setTimeout(function(){line[1].style.display = 'block'; }, 450);
        check1 = false;
    }
    }
    else{
        window.location.href = '';
    }
    
}
function show2(){
    if($(window).width()>=760){
    if(check2 == false){
        hd2.style.color = "#005cef";
        hd22.style.color = "#005cef";
        hd2.style.transition = "0.5s ease";
        hd22.style.transition = "0.5s ease";
        arrow[1].style.animation = "spin 0.12s forwards ease-in 0.1s";
        show_box[1].style.animation = "showmore 0.5s forwards";
        check2 = true;
        line[2].style.display = 'none';
    }
    else{
        hd2.style.color = "#ff1f25";
        hd22.style.color = "#ff1f25";
        hd2.style.transition = "0.5s ease";
        hd22.style.transition = "0.5s ease";
        arrow[1].style.animation = "spin2 0.12s forwards ease-in";
        show_box[1].style.animation = "showmore2 0.5s forwards";
        setTimeout(function(){line[2].style.display = 'block'; }, 450);
        check2 = false;
    }
    }
    else{
        window.location.href = '';
    }
}
function show3(){
    if($(window).width()>=760){
    if(check3 == false){
        hd3.style.color = "#005cef";
        hd33.style.color = "#005cef";
        hd3.style.transition = "0.5s ease";
        hd33.style.transition = "0.5s ease";
        arrow[2].style.animation = "spin 0.12s forwards ease-in 0.1s";
        show_box[2].style.animation = "showmore 0.5s forwards";
        line[3].style.display = 'none';
        check3 = true;
    }
    else{
        hd3.style.color = "#ff1f25";
        hd33.style.color = "#ff1f25";
        hd3.style.transition = "0.5s ease";
        hd33.style.transition = "0.5s ease";
        arrow[2].style.animation = "spin2 0.12s forwards ease-in";
        show_box[2].style.animation = "showmore2 0.5s forwards";
        setTimeout(function(){line[3].style.display = 'block'; }, 450);
        check3 = false;
    }
    }
    else{
        window.location.href = '';
    }
}
function show4(){
    if($(window).width()>=760){
    if(check4 == false){
        hd4.style.color = "#005cef";
        hd44.style.color = "#005cef";
        hd4.style.transition = "0.5s ease";
        hd44.style.transition = "0.5s ease";
        arrow[3].style.animation = "spin 0.12s forwards ease-in 0.1s";
        show_box[3].style.animation = "showmore 0.5s forwards";
        line[4].style.display = 'none';
        check4 = true;
    }
    else{
        hd4.style.color = "#ff1f25";
        hd44.style.color = "#ff1f25";
        hd4.style.transition = "0.5s ease";
        hd44.style.transition = "0.5s ease";
        arrow[3].style.animation = "spin2 0.12s forwards ease-in";
        show_box[3].style.animation = "showmore2 0.5s forwards";
        setTimeout(function(){line[4].style.display = 'block'; }, 450);
        check4 = false;
    }
    }
    else{
        window.location.href = '';
    }
}


function resize() {
    if ( $(window).width() < 760) {
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

}
