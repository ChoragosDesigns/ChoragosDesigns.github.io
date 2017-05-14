"use strict";

$(document).ready(function(e)
{
    var my_projects = [];
    var featured_projects = [];
    var featured_project_indexes = [1, 2, 3];
    var home_page_html = "";
    
    var xhr = new XMLHttpRequest();
    xhr.onload = function()
    {
        var featured_projects_html = "";
        var myJSON = JSON.parse(xhr.responseText);
        my_projects = myJSON.projects;
        for(var project = 0; project < my_projects.length; project++)
        {
            for(var featured_project = 0; featured_project < featured_project_indexes.length; featured_project++)
            {
                if(project == featured_project_indexes[featured_project])
                {
                    //featured_projects.pusg(my_projects[project]);
                    featured_projects_html += drawSelectedProject(my_projects, project);
                }
            }
        }
        document.getElementById("featured_projects_section").innerHTML = featured_projects_html;
        hideText(false, null);
        //featured_projects_html += drawSelectedProject(featured_projects, selected_project_index);
        //featured_projects_html += drawProjectThumbnail(my_projects, section_width);
        //document.getElementById("projects_section").innerHTML = project_thumbnail_section_html;
        
        /*
        
        var featured_projects_html =  "";
        for(var my_featured_project = 0; my_featured_project < featured_projects.length; my_featured_project++)
    	{
            featured_projects_html += "<div class='featured_project' id='featured_project_" + my_featured_project + "'>";
            featured_projects_html += "<div class='featured_project_main_content'>";
            featured_projects_html += "<div class='featured_project_description'>";
            featured_projects_html += "<div class='pasta'>";
            featured_projects_html += "<p class='featured_project_title'>" + featured_projects[my_featured_project].name + "</p>";
            featured_projects_html += "<p class='featured_project_dates'>" + featured_projects[my_featured_project].dates + "</p>";
            for(var p = 0; p < featured_projects[my_featured_project].description.length; p++)
            {
                featured_projects_html += "<p class='featured_project_description_text'>" + featured_projects[my_featured_project].description[p] + "</p>";
            }
            featured_projects_html += "<p class='featured_project_description_button'>SHOW MORE</p>"
            featured_projects_html += "</div>";
            featured_projects_html += "</div>";
            featured_projects_html += "<div class='featured_project_image_gallery'>";
            featured_projects_html += "<img class='featured_project_image_gallery_img' src='" + featured_projects[my_featured_project].imgs[0].src + "'/>";
            featured_projects_html += "<div class='featured_project_image_gallery_icon_wrapper'>";
            featured_projects_html += drawImageGalleryIcons(featured_projects[my_featured_project].imgs, 0);
            featured_projects_html += "</div>";
            featured_projects_html += "</div>";
            featured_projects_html += "</div>";
            featured_projects_html += "</div>";
            
            if(my_featured_project != (featured_projects.length-1))
            {
                featured_projects_html += "<hr class='featured_project_divider'>";
            }
        }
        document.getElementById("featured_projects_div").innerHTML += featured_projects_html;
        
        for(var featured_project = 0; featured_project < featured_projects.length; featured_project++)
        {
            var image_gallery_section_height = $("#featured_project_" + featured_project).find(".featured_project_image_gallery").height();
            var description_section_height = $("#featured_project_" + featured_project).find(".featured_project_description").height();
            
            if(image_gallery_section_height > description_section_height)
            {
                var image_icon_wrapper_height = $("#featured_project_" + featured_project).find(".featured_project_image_gallery_icon_wrapper").height();
                var img_height = $("#featured_project_" + featured_project).find(".featured_project_image_gallery_img").height();
                var percentage = ((description_section_height - image_icon_wrapper_height)/img_height);
                var img_width = $("#featured_project_" + featured_project).find(".featured_project_image_gallery_img").width();
                var new_img_width = img_width * percentage;
                
                $("#featured_project_" + featured_project).find(".featured_project_image_gallery").height(description_section_height);
                $("#featured_project_" + featured_project).find(".featured_project_image_gallery_img").height(description_section_height-image_icon_wrapper_height);
                $("#featured_project_" + featured_project).find(".featured_project_image_gallery_img").width(new_img_width);
            }
            else
            {
                console.log("views");
                
            }
        }
        
        
        
        
        $(".featured_project_description_hidden_text").each(function(i)
        {
            $(this).parent().parent().find(".featured_project_description_hidden_text").css('display', 'none');
        });
        
        */
        
        
        
    }
    var url = "scripts/projects.json";
    xhr.open("GET", url, true);
    xhr.setRequestHeader("If-Modified-Since", "Mon, 3 Apr 2017 00:00:00 EST");
    xhr.send();
    
    $("#featured_projects_section").on("click", ".project_description_button", function(e)
    {
        hideText(true, this);
    });
    $("#projects_section").on("click", ".image_gallery_icon", function(e)
    {
        //changeCurrentImageGalleryImg(my_projects, e, this);
    });
});