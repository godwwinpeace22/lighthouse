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
 });