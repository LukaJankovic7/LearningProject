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
    
    
    
    //tooltips
    
  /*  
    
    $('.html5-o').hover(
        function(){  t = setTimeout(function() {
                    $('.html5-tt').show(500);
                    }, 500);},
        function(){clearTimeout(t); 
                $('.html5-tt').stop().hide(300);
     });
    
    $('.css3-o').hover(
        function(){  t = setTimeout(function() {
                        $('.css3-tt').show(500);
                    }, 500);},
        function(){ clearTimeout(t);
                   $('.css3-tt').stop().hide(300);
     });
    
    $('.sass-o').hover(
        function(){  t = setTimeout(function() {
                        $('.sass-tt').show(500);
                    }, 500);},
        function(){ clearTimeout(t);
                   $('.sass-tt').stop().hide(300);
     });
    
    $('.git-o').hover(
        function(){  t = setTimeout(function() {
                        $('.git-tt').show(500);
                    }, 500);},
        function(){ clearTimeout(t);
                   $('.git-tt').stop().hide(300);
     });
    
    $('.java-script-o').hover(
        function(){  t = setTimeout(function() {
                        $('.java-script-tt').show(500);
                    }, 500);},
        function(){ clearTimeout(t);
                   $('.java-script-tt').stop().hide(300);
     });
    
    $('.php-o').hover(
        function(){  t = setTimeout(function() {
                        $('.php-tt').show(500);
                    }, 500);},
        function(){ clearTimeout(t);
                   $('.php-tt').stop().hide(300);
     });
    
    $('.project-managment-o').hover(
        function(){  t = setTimeout(function() {
                        $('.project-managment-tt').show(500);
                    }, 500);},
        function(){ clearTimeout(t);
                   $('.project-managment-tt').stop().hide(300);
     });
    
    $('.agile-o').hover(
        function(){  t = setTimeout(function() {
                        $('.agile-tt').show(500);
                    }, 500);},
        function(){ clearTimeout(t);
                   $('.agile-tt').stop().hide(300);
     });
    
    $('.jira-o').hover(
        function(){  t = setTimeout(function() {
                        $('.jira-tt').show(500);
                    }, 500);},
        function(){ clearTimeout(t);
                   $('.jira-tt').stop().hide(300);
     });
    
    $('.trello-o').hover(
        function(){  t = setTimeout(function() {
                        $('.trello-tt').show(500);
                    }, 500);},
        function(){ clearTimeout(t);
                   $('.trello-tt').stop().hide(300);
     });
    
    $('.writing-effective-tasks-o').hover(
        function(){  t = setTimeout(function() {
                        $('.writing-effective-tasks-tt').show(500);
                    }, 500);},
        function(){ clearTimeout(t);
                   $('.writing-effective-tasks-tt').stop().hide(300);
     });
    
    $('.learning-o').hover(
        function(){  t = setTimeout(function() {
                        $('.learning-tt').show(500);
                    }, 500);},
        function(){ clearTimeout(t);
                   $('.learning-tt').stop().hide(300);
     });
    
    $('.organisation-o').hover(
        function(){  t = setTimeout(function() {
                        $('.organisation-tt').show(500);
                    }, 500);},
        function(){ clearTimeout(t);
                   $('.organisation-tt').stop().hide(300);
     });
    
    $('.creativity-o').hover(
        function(){  t = setTimeout(function() {
                        $('.creativity-tt').show(500);
                    }, 500);},
        function(){ clearTimeout(t);
                   $('.creativity-tt').stop().hide(300);
     });
    
    $('.communication-o').hover(
        function(){  t = setTimeout(function() {
                        $('.communication-tt').show(500);
                    }, 500);},
        function(){clearTimeout(t);
                   $('.communication-tt').stop().hide(300);
     });
    
    $('.teamwork-o').hover(
        function(){  t = setTimeout(function() {
                        $('.teamwork-tt').show(500);
                    }, 500);},
        function(){clearTimeout(t); 
            $('.teamwork-tt').stop().hide(300);
     });
    */
});