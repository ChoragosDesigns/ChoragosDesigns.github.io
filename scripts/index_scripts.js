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
        
        /*
        
        var image_gallery_section_height = $(".project_image_gallery").height();
        var project_description_height = $(".project_description").height();
        console.log(image_gallery_section_height);
        if(image_gallery_section_height > project_description_height)
        {
            var image_icon_wrapper_height = $(".project_image_gallery_icon_wrapper").height();
            var img_height = $(".project_image_gallery_img").height();
            var percentage = ((project_description_height - image_icon_wrapper_height)/img_height);
            var img_width = $(".project_image_gallery_img").width();
            var new_img_width = img_width * percentage;
            
            $(".project_image_gallery").height(project_description_height);
            $(".project_image_gallery_img").height(project_description_height - image_icon_wrapper_height);
            $(".project_image_gallery_img").width(new_img_width);
        }
        if($(".project_content").find(".project_description_hidden_text").length > 0)
        {
            $(".project_description_cell").append("<p class='project_description_button'>SHOW MORE</p>");
        }*/
        
        $(".project_content").each(function(i)
        {
            console.log(i);
            console.log($(i).find(".project_description_text"));
            if($(i).find(".project_description_hidden_text").length > 0)
            {
                console.log(".project_description_text");
                $(".project_description_cell").append("<p class='project_description_button'>SHOW MORE</p>");
            }
        });
        
        
        
        
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