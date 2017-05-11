"use strict";

$(document).ready(function()
{
    console.log("im ready");
    var my_projects = [];
    var selected_project;
    //var section_width = $("#projects_section").width();
    var project_thumbnail_section_html = document.getElementById("projects_section").innerHTML;
    
    var xhr = new XMLHttpRequest();
    xhr.onload = function()
    {
        var myJSON = JSON.parse(xhr.responseText);
        my_projects = myJSON.projects;
        var section_width = $("#projects").width();
        project_thumbnail_section_html += drawProjectThumbnail(my_projects, section_width);
        document.getElementById("projects_section").innerHTML = project_thumbnail_section_html;
        $("projects").width(section_width);
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