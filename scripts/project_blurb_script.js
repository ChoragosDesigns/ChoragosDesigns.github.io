"use strict";

function test(t)
{
    console.log(t)
    ////////////project_description_hidden_text
}
function drawSelectedProject(all_projects_array, project_index)
{
    var selected_project_html = "";
    selected_project_html += "<div class='project_content'>";
    selected_project_html += "<div class='project_description'>";
    selected_project_html += "<div class='project_description_cell'>";
    selected_project_html += "<p class='project_title'>" + all_projects_array[project_index].name + "</p>";
    selected_project_html += "<p class='project_dates'>" + all_projects_array[project_index].dates + "</p>";
    for(var p = 0; p < all_projects_array[project_index].description.length; p++)
    {
        selected_project_html += "<p class='project_description_text'>" + all_projects_array[project_index].description[p] + "</p>";
    }
    selected_project_html += "<p class='ui_button project_description_button'>SHOW MORE</p>"
    selected_project_html += "</div>";
    selected_project_html += "</div>";
    selected_project_html += "<div class='project_image_gallery'>";
    selected_project_html += "<img class='project_image_gallery_img' id='selected_project_img' src='" + all_projects_array[project_index].imgs[0].src + "'/>";
    selected_project_html += "<div class='project_image_gallery_icon_wrapper'>";
    selected_project_html += drawImageGalleryIcons(all_projects_array[project_index].imgs, 0);
    selected_project_html += "</div>";
    selected_project_html += "</div>";
    selected_project_html += "</div>";
    selected_project_html += "</div>";
    return selected_project_html;
}
function drawImageGalleryIcons(set_images, selected_image)
{
	var image_gallery_icons_html = "";
	for(var x = 0; x < set_images.length; x++)
	{
		if(x == selected_image)
		{
			image_gallery_icons_html += "<div class='image_gallery_icon' id='image_gallery_icon_selected'></div>";
		}
		else
		{
			image_gallery_icons_html += "<div class='image_gallery_icon'></div>";
		}
	}
	return image_gallery_icons_html;
}
function hideText()
{
    $(".project_description_hidden_text").each(function(i)
    {
        $(this).parent().parent().find(".project_description_hidden_text").css('display', 'none');
    });
}