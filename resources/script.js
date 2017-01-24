$(document).ready(function() {
    
    var t;
    
    //drop menus
    
    
    
    $('.info').hover(function () {
        clearTimeout(t);
        $('.d-info').show(500).dequeue();
        $('.d-skills').stop().hide(250);
        $('.d-exp').stop().hide(250);
    }, function(){
        t=setTimeout(function(){$('.d-info').hide(500);}, 300)
    }); 

    $('.skills').hover(function () {
        clearTimeout(t);
        $('.d-skills').show(500).dequeue();
        $('.d-info').stop().hide(250);
        $('.d-exp').stop().hide(250);
    }, function(){
        t=setTimeout(function(){$('.d-skills').hide(500);}, 300)
    });
    
    $('.exp').hover(function () {
        clearTimeout(t);
        $('.d-exp').show(500).dequeue();
        $('.d-info').stop().hide(250);
        $('.d-skills').stop().hide(250);
    }, function(){
        t=setTimeout(function(){$('.d-exp').hide(500);}, 300)
    });
    
    
    
    
    
  //Skrolling  
    
    
    
    
    
    $('.basic-info').click(function() {
        $('html, body').animate({
        scrollTop: $('#basic-info').offset().top
        }, 1500);
    });
    
    $('.experience').click(function() {
        $('html, body').animate({
        scrollTop: $('#experience').offset().top
        }, 1500);
    });
    
    $('.languages').click(function() {
        $('html, body').animate({
        scrollTop: $('#languages').offset().top
        }, 1500);
    });
    
    $('.hobbies').click(function() {
        $('html, body').animate({
        scrollTop: $('#hobbies').offset().top
        }, 1500);
    });
    
    $('.education').click(function() {
        $('html, body').animate({
        scrollTop: $('#education').offset().top
        }, 1500);
    });
    
    $('.personal').click(function() {
        $('html, body').animate({
        scrollTop: $('#personal').offset().top
        }, 1500);
    });
    
    $('.managment').click(function() {
        $('html, body').animate({
        scrollTop: $('#managment').offset().top
        }, 1500);
    });
    
    $('.tech').click(function() {
        $('html, body').animate({
        scrollTop: $('#tech').offset().top
        }, 1500);
    });
    
    
    
    
});