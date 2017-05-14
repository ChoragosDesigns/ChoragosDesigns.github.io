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
                    featured_projects.push(my_projects[project]);
                }
            }
        }
        for(var featured_project = 0; featured_project < featured_projects.length; featured_project++)
        {
            featured_projects_html += drawSelectedProject(featured_projects, featured_project);
            if(featured_project != (featured_projects.length - 1))
            {
                featured_projects_html += "<hr>";
            }
        }
        document.getElementById("featured_projects_section").innerHTML = featured_projects_html;
        hideText(false, null);
    }
    var url = "scripts/projects.json";
    xhr.open("GET", url, true);
    xhr.setRequestHeader("If-Modified-Since", "Mon, 3 Apr 2017 00:00:00 EST");
    xhr.send();
    
    $("#featured_projects_section").on("click", ".project_description_button", function(e)
    {
        hideText(true, this);
    });
    $("#featured_projects_section").on("click", ".image_gallery_icon", function(e)
    {
        if(e.target.id != "image_gallery_icon_selected")
        {
            var image_index = $(this).index();
            var project_index = $(this).parent().parent().parent().index(".project_content");
            $(this).parent().parent().find(".project_image_gallery_img").attr("src", featured_projects[project_index].imgs[image_index].src);
            $(this).parent().html(drawImageGalleryIcons(featured_projects[project_index].imgs, image_index));
        }
    });
});