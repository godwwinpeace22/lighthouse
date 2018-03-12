//$('.home-banner').css({height:$(window).height()})
//console.log($(window).height())
$(document).ready(function() {

  /*<-----*Side Navigation controls ---->*/
  $('.openbtn').click(function(){
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
    //document.getElementById("main").style.backgroundColor = "red";
    //$('.darken').css({display:'block',height:$(document).height()});
    //document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
    
    $('.openbtn').css({opacity:'0'})
  });


  $('.dropdwn').click(function(){
    $('.dropdwn-content').toggle(500);
  })
  $('.closebtn').click(function(){
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
    //document.body.style.backgroundColor = "";
    $('.openbtn').css({opacity:'1'})
  });
    


    var movementStrength = 25;
    var height = movementStrength / $(window).height();
    var width = movementStrength / $(window).width();
    $("#top-image").mousemove(function(e){
              var pageX = e.pageX - ($(window).width() / 2);
              var pageY = e.pageY - ($(window).height() / 2);
              var newvalueX = width * pageX * -1 - 25;
              var newvalueY = height * pageY * -1 - 50;
              $('#top-image').css("background-position", newvalueX+"px     "+newvalueY+"px");
    });
    /*$(window).scroll(function() {
        var scroll = $(window).scrollTop();
          $(".zoom-me").css({
              width: (100 + scroll/5)  + "%",
              top: -(scroll/10)  + "%",
              //Blur suggestion from @janwagner: https://codepen.io/janwagner/ in comments
              "-webkit-filter": "blur(" + (scroll/200) + "px)",
              filter: "blur(" + (scroll/200) + "px)"
          });
      });
      */
      


      // Gallery Lightbox
      $('.column img').click(function(){
        $('#myModal').css({display:"block"})
      })
      $('.model .close').click(function(){
        $('#myModal').css({display:"none"})
      });
      
      var slideIndex = 1;
      showSlides(slideIndex);
      
      $('.prev').click(function(){
        showSlides(slideIndex += -1);
        //alert('Prev');
      })
      $('.next').click(function(){
        showSlides(slideIndex += 1);
        //alert('Next');
      })
      
      
      function currentSlide(n) {
        showSlides(slideIndex = n);
      }
      
      function showSlides(n) {
        var i;
        var slides = document.getElementsByClassName("mySlides");
        var dots = document.getElementsByClassName("demo");
        var captionText = document.getElementById("caption");
        if (n > slides.length) {slideIndex = 1}
        if (n < 1) {slideIndex = slides.length}
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
        slides[slideIndex-1].style.display = "block";
        dots[slideIndex-1].className += " active";
        captionText.innerHTML = dots[slideIndex-1].alt;
      }
 });