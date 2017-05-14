"use strict";

$(document).ready(function()
{
    var my_projects = [];
    var selected_project;
    var project_thumbnail_section_html = document.getElementById("projects_section").innerHTML;
    
    var xhr = new XMLHttpRequest();
    xhr.onload = function()
    {
        var myJSON = JSON.parse(xhr.responseText);
        my_projects = myJSON.projects;
        var section_width = (($(".section_title").width()) - (parseInt($("#projects_section").css("padding-left")) + parseInt($("#projects_section").css("padding-right"))));
        project_thumbnail_section_html += drawProjectThumbnail(my_projects, section_width);
        document.getElementById("projects_section").innerHTML = project_thumbnail_section_html;
        console.log($("#projects_section").width());
        
        $(".project_thumbnail").each(function(i)
        {
            $(this).width($("#projects_section").width()/4);
            $(this).height($("#projects_section").width()/4);
            $(this).css("margin", "0 " + (($("#projects_section").width()/4)/6) + "px " + (($("#projects_section").width()/4)/6) + "px " + (($("#projects_section").width()/4)/6) + "px ");
        });
        
        
        
        
        
        /*$(".project_thumbnail").each(function(i)
        {
            $(this).width(new_thumbnail_dimensions);
            $(this).height(new_thumbnail_dimensions);
            $(this).css("margin", "0 " + new_thumbnail_margin + "px " + new_thumbnail_margin + "px " + new_thumbnail_margin + "px ");
        });*/
        //$("#projects_section").width(section_width);
    }
    var url = "scripts/projects.json";
    xhr.open("GET", url, true);
    xhr.setRequestHeader("If-Modified-Since", "Mon, 3 Apr 2017 00:00:00 EST");
    xhr.send();
    
    $("#projects_section").on("mouseover", ".project_thumbnail", function(e)
    {
        var hovered_project_id = $(this).attr("id");
        var hovered_project_index = $(this).index();
        var hovered_project_info = $(this).find(".project_thumbnail_info").attr("id");
        document.getElementById(hovered_project_info).style.display = "block";
    });
    $("#projects_section").on("mouseleave", ".project_thumbnail", function(e)
    {
        var hovered_project_id = $(this).attr("id");
        var hovered_project_index = $(this).index();
        var hovered_project_info = $(this).find(".project_thumbnail_info").attr("id");
        document.getElementById(hovered_project_info).style.display = "none";
    });
    $("#projects_section").on("click", ".project_thumbnail", function(e)
    {
        test(this);
        var selected_project_index = $(this).index();
        var selected_project_html = "";
        selected_project = selected_project_index;
        selected_project_html += drawSelectedProject(my_projects, selected_project_index);
        selected_project_html +="<p id='more_projects_button'><u>Go Back</u></p>";
        document.getElementById("projects_section").innerHTML = selected_project_html;
        hideText(false, null);
    });
    $("#projects_section").on("click", ".project_description_button", function(e)
    {
        hideText(true, this);
    });
    $("#projects_section").on("click", ".image_gallery_icon", function(e)
    {
        if(e.target.id != "image_gallery_icon_selected")
        {
            var image_index = $(this).index();
            var project_index = $(this).parent().parent().parent().index(".project_content");
            console.log(project_index);
            $(this).parent().parent().find(".project_image_gallery_img").attr("src", my_projects[selected_project].imgs[image_index].src);
            $(this).parent().html(drawImageGalleryIcons(my_projects[selected_project].imgs, image_index));
        }
    });
    
    
    $("#projects_section").on("click", "#more_projects_button", function(e)
    {
        document.getElementById("projects_section").innerHTML = project_thumbnail_section_html;
    });
});

$(window).resize(function()
{
    var new_inner_width= (($(".section_title").width()) - (parseInt($("#projects_section").css("padding-left")) + parseInt($("#projects_section").css("padding-right"))));
    /*console.log($(window).innerWidth());
    console.log(new_inner_width);
    console.log(parseInt($("#projects_section").css("padding-left")) + parseInt($("#projects_section").css("padding-right")));*/
    
    var new_thumbnail_dimensions = (new_inner_width/4);
    var new_thumbnail_margin = (new_thumbnail_dimensions/6);
    $("#projects_section").width($(window).innerWidth());
    $(".project_thumbnail").each(function(i)
    {
        $(this).width(new_thumbnail_dimensions);
        $(this).height(new_thumbnail_dimensions);
        $(this).css("margin", "0 " + new_thumbnail_margin + "px " + new_thumbnail_margin + "px " + new_thumbnail_margin + "px ");
    });
});

function drawProjectThumbnail(all_projects_array, section_width)
{
    var thumbnail_dimensions = (section_width/4);
    var thumbnail_margin = (thumbnail_dimensions/6);
    var project_thumbnail_html = "";
    for(var thumbnail = 0; thumbnail < all_projects_array.length; thumbnail++)
    {
        project_thumbnail_html += "<div class='project_thumbnail' id='project_thumbnail_" + thumbnail + "' style='width:" + thumbnail_dimensions + "px; height:" + thumbnail_dimensions + "px; margin: 0 " + thumbnail_margin + "px " + thumbnail_margin + "px " + thumbnail_margin + "px; background-image:url(" + all_projects_array[thumbnail].imgs[0].src + ")'>";
        project_thumbnail_html += "<div class='project_thumbnail_info' id='project_thumbnail_info_" + thumbnail + "'>";
        project_thumbnail_html += "<p>" + all_projects_array[thumbnail].name + "</p>";
        project_thumbnail_html += "<p>";
        project_thumbnail_html += all_projects_array[thumbnail].languages;
        project_thumbnail_html += "</p>";
        project_thumbnail_html += "</div>"
        project_thumbnail_html += "</div>"
    }
    return project_thumbnail_html;
}