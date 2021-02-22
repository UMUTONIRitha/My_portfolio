$(document).ready(function() {
    $("#one").submit(function(event){
        event.preventDefault();
        if($("input").val() ===""){
          alert('enter a valid data')
          return;
        }
          alert('Thank you for contacting us')
        this.reset();
      });
    });



    jQuery('.skillbar').each(function(){
        jQuery(this).find('.skillbar-bar').animate({
        width:jQuery(this).attr('data-percent')
        },6000);
        });
        $("#imgDes").click(function () {
            $("#imgDes").hide();
            $("#textDes").show().css({ "text-align": "justify", "font-family": "Shadows Into Light, cursive", "font-size": "20px" });
        }); $("#textDes").click(function () {
            $("#imgDes").show();
            $("#textDes").hide();
        });
        $("#imgDev").click(function () {
            $("#imgDev").hide();
            $("#textDev").show().css({ "text-align": "justify", "font-family": "Shadows Into Light, cursive", "font-size": "20px" });;
        }); $("#textDev").click(function () {
            $("#imgDev").show();
            $("#textDev").hide();
        });
        $("#imgProd").click(function () {
            $("#imgProd").hide();
            $("#textProd").show().css({ "text-align": "justify", "font-family": "Shadows Into Light, cursive", "font-size": "20px" });;
        }); $("#textProd").click(function () {
            $("#imgProd").show();
            $("#textProd").hide();
        });
        $('.black').mouseenter(function () {
            $('#overOne').show().css("background", "rgba(0, 0, 0, 0.9)");
            $('#detailOne').show().css({ "color": "white", "font-size": "40px", "border": "3px solid white", "padding": "35px 20px" });
        }); $('.black').mouseleave(function () {
            $('#overOne').hide();
            $('#detailOne').hide();
        })
        $('.sign').mouseenter(function () {
            $('#overTwo').show().css("background", "rgba(0, 0, 0, 0.8)");
            $('#detailTwo').show().css({ "color": "white", "font-size": "40px", "border": "3px solid white", "padding": "35px 20px" });
        }); $('.sign').mouseleave(function () {
            $('#overTwo').hide();
            $('#detailTwo').hide();
        })
        $('.colour').mouseenter(function () {
            $('#overThree').show().css("background", " rgba(129, 79, 13, 0.692)");
            $('#detailThree').show().css({ "color": "white", "font-size": "40px", "border": "3px solid white", "padding": "35px 20px" });
        }); $('.colour').mouseleave(function () {
            $('#overThree').hide();
            $('#detailThree').hide();
        })
        $('.webpage').mouseenter(function () {
            $('#overFive').show().css("background", " rgba(2, 83, 107, 0.7");
            $('#detailFive').show().css({ "border": "3px solid white", "color": "white", "padding": "30px 10px", "font-size": "50px" });
        }); $('.webpage').mouseleave(function () {
            $('#overFive').hide();
            $('#detailFive').hide();
        })
        $('.machine').mouseenter(function () {
            $('#overSix').show().css("background", "rgb(0, 0, 0, 0.7)");
            $('#detailSix').show().css({ "border": "3px solid white", "color": "white", "padding": "30px 10px", "font-size": "40px" });
        }); $('.machine').mouseleave(function () {
            $('#overSix').hide();
            $('#detailSix').hide();
        })
        $('.wood').mouseenter(function () {
            $('#overSeven').show().css("background", "rgba(185, 122, 3, 0.6)");
            $('#detailSeven').show().css({ "border": "3px solid white", "color": "white", "padding": "35px 50px", "font-size": "40px" });
        }); $('.wood').mouseleave(function () {
            $('#overSeven').hide();
            $('#detailSeven').hide();
        })
    


    
      