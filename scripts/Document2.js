"use strict";

$(document).ready(function()
{
    var d = new Date();
    var n = d.getHours();
    var grd;
    var main_canvas = document.getElementById("my_div_canvas");
    var main_canvas_context = main_canvas.getContext('2d');
    if($("#my_div").height() < ($("#my_div_content").height() + parseInt($("#my_div_content").css("margin-top")) + parseInt($("#my_div_content").css("margin-bottom"))))
    {
        $("#my_div").height($("#my_div_content").height() + parseInt($("#my_div_content").css("margin-top")) + parseInt($("#my_div_content").css("margin-bottom")));
    }
    
    main_canvas_context.canvas.width = $("#my_div").width();
    main_canvas_context.canvas.height = ($("#my_div").height());
    grd=main_canvas_context.createLinearGradient(0,0,0,main_canvas_context.canvas.height);
  
    
    if(n >= 0 && n < 12)
    {
        if(n >= 0 && n < 4)
        {
            grd.addColorStop(0, "rgb(0, 7, 18)");
            grd.addColorStop(1, "rgb(0, 11, 29)");
            $(".top_div_content").css("color", "rgb(235, 235, 235)");
            $("#my_div hr").css("background-color", "rgba(235, 235, 235, 0.65)");
            $("#github_logo").attr("src", "logos/github_logo_light.png");
            $("#linkedin_logo").attr("src", "logos/linkedin_logo_light.png");
        }
        else if(n >= 4 && n < 5)
        {
            grd.addColorStop(1, "rgb(0, 18, 46)");
            grd.addColorStop(0, "rgb(0, 8, 22)");
            $("#my_div hr").css("background-color", "rgba(12, 12, 12, 0.65)");
            $("#github_logo").attr("src", "logos/github_logo_dark.png");
            $("#linkedin_logo").attr("src", "logos/linkedin_logo_dark.png");
        }
        else if(n >= 5 && n < 7)
        {
            grd.addColorStop(0, "rgb(0, 101, 214)");
            grd.addColorStop(1, "rgb(0, 71, 150)");
            $("#my_div hr").css("background-color", "rgba(12, 12, 12, 0.65)");
            $("#github_logo").attr("src", "logos/github_logo_dark.png");
            $("#linkedin_logo").attr("src", "logos/linkedin_logo_dark.png");
        }
        else if(n >= 7 && n < 12)
        {
            grd.addColorStop(0, "rgb(108, 177, 255)");
            grd.addColorStop(1, "rgb(0, 101, 214)");
            $("#my_div hr").css("background-color", "rgba(12, 12, 12, 0.65)");
            $("#github_logo").attr("src", "logos/github_logo_dark.png");
            $("#linkedin_logo").attr("src", "logos/linkedin_logo_dark.png");
        }
        document.getElementById("greeting").innerHTML = "Good morning!";
    }
    else if(n >= 12 && n < 17)
    {
        grd.addColorStop(0, "rgb(108, 177, 255)");
        grd.addColorStop(1, "rgb(0, 101, 214)");
        document.getElementById("greeting").innerHTML = "Good afternoon!";
        $("#my_div hr").css("background-color", "rgba(12, 12, 12, 0.65)");
        $("#github_logo").attr("src", "logos/github_logo_dark.png");
        $("#linkedin_logo").attr("src", "logos/linkedin_logo_dark.png");
    }
    else if(n >= 17)
    {
        {
            grd.addColorStop(0, "rgb(0, 7, 18)");
            grd.addColorStop(1, "rgb(0, 11, 29)");
            $(".top_div_content").css("color", "rgb(235, 235, 235)");
            $("#my_div hr").css("background-color", "rgba(235, 235, 235, 0.65)");
            $("#github_logo").attr("src", "logos/github_logo_light.png");
            $("#linkedin_logo").attr("src", "logos/linkedin_logo_light.png");
        }
        document.getElementById("greeting").innerHTML = "Good evening!";
    }
    main_canvas_context.fillStyle=grd;
    main_canvas_context.fillRect(0, 0, main_canvas_context.canvas.width, main_canvas_context.canvas.height);
});