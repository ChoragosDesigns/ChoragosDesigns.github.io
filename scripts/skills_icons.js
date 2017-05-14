"use strict";

var is_wordprss_hovering = false;
var is_wordress_animating = false;


var current_front_end_group = 0;
var front_end_hovering = false;
var is_front_end_animating = false;

var is_dynamic_animating = false;
var is_dynamic_hovering = false;





$(document).ready(function()
{
    console.log("helloooo");
    /*console.log("im ready im ready");
    var front_end_canvas = document.getElementById("icon_canvas_front_end");
    var front_end_canvas_context = front_end_canvas.getContext("2d");
    var interactive_app_canvas = document.getElementById("icon_canvas_interactive_app");
    var interactive_app_context = interactive_app_canvas.getContext("2d");
    var dynamic_canvas = document.getElementById("icon_canvas_dynamic");
    var dynamic_canvas_context = dynamic_canvas.getContext("2d");*/
    var wordpress_canvas = document.getElementById("icon_canvas_wordpress");
    var wordpress_context = wordpress_canvas.getContext("2d");
    
    //front_end_canvas_context.canvas.width = interactive_app_context.canvas.width = dynamic_canvas_context.canvas.width = wordpress_context.canvas.width = $(".skill").width();
    wordpress_context.canvas.width = $(".skill").width();
    //front_end_canvas_context.canvas.height = interactive_app_context.canvas.height = dynamic_canvas_context.canvas.height = wordpress_context.canvas.height = ($(".skill").width() * 0.7);
    wordpress_context.canvas.height = ($(".skill").width() * 0.7);
    //$(".skill_icon_canvas")
    
    //top_canvas_context.canvas.width = main_canvas_context.canvas.width = $(document).width();
    
    
    
    
    /*
        main_canvas_context.fillStyle = '#ffffff';
        main_canvas_context.lineWidth = 0.5;
        main_canvas_context.fillRect(0, 0, main_canvas_context.canvas.width, main_canvas_context.canvas.height);
    */
    
//    front_end_canvas_context.fillStyle = "#ff001c";
   // front_end_canvas_context.fillRect(0,0, front_end_canvas,100);
//    drawFrontEndIcon(front_end_canvas_context);
    //drawInteractiveAppIcon(interactive_app_context);
    
    
    
    
    
    
    var gear_rotation_step = 0;
    var gear_rotation_step_control_int = 0;
    drawWordpressIcon(wordpress_context, gear_rotation_step);
    $("#icon_canvas_wordpress").on("mouseover", function(e)
    {
        var gear_updater = setInterval(function()
       {
            gear_rotation_step = (gear_rotation_step_control_int/100);
            drawWordpressIcon(wordpress_context, gear_rotation_step);
            gear_rotation_step_control_int = gear_rotation_step_control_int + 1;
            $("#icon_canvas_wordpress").on("mouseout", function(e)
            {
                stoppa(gear_updater);
            });
        }, ((1500/100)));
    });
    $("#icon_canvas_wordpress").on("mouseout", function(e)
    {
        var gear_updater = setInterval(function()
       {
            gear_rotation_step = (gear_rotation_step_control_int/100);
            drawWordpressIcon(wordpress_context, gear_rotation_step);
            gear_rotation_step_control_int = gear_rotation_step_control_int + 1;
            if(gear_rotation_step%1 == 0)
            {
                stoppa(gear_updater);
            }
        }, ((1500/100)));
    });
    /*
    drawFrontEndIcon(front_end_canvas_context, 0);
    $("#icon_canvas_front_end").on("mouseover", function(e)
    {
        front_end_hovering = true;
        if(is_front_end_animating == false)
        {
            is_front_end_animating = true;
            frontEndIconIterval(front_end_canvas_context, false);
        }
    });
    $("#icon_canvas_front_end").on("mouseout", function(e)
    {
        front_end_hovering = false;
    });
    
    
    
    
    
    
    
   //     var is_dynamic_animating = false;
//var is_dynamic_hovering = false;
    
    drawDynamicIcon(dynamic_canvas_context, 0, 0);
    $("#icon_canvas_dynamic").on("mouseover", function(e)
    {
        is_dynamic_hovering = true;
        if(is_dynamic_animating == false)
        {
            is_dynamic_animating = true;
            dynamicInterval(dynamic_canvas_context)
        }
    });*/
    
});

function dynamicInterval(ctx)
{
    var a = 0;
    var interval = setInterval(function()
    {
        //console.log("helllooooo");
        var ys = a * 3;
        drawDynamicIcon(ctx, 0, ys);
        a = a + 1;
        /*if(is_rendering == false)
        {
            var s = (a/100);
            a = a + 2;
            drawFrontEndIcon(ctx, s);
        }
        else
        {
            var s = ((100 - a)/100);
            a =  a + 2;
            drawFrontEndIcon(ctx, s);
        }
        if(a == 100)
        {
            clearFrontEndInterval(ctx, interval, is_rendering);
        }*/
    }, 750/100);   
}

function drawDynamicIcon(ctx, xstep, ystep)
{
    var icon_y_offset = 20;
    
    ctx.fillStyle = "rgb(255, 0, 0)";
    ctx.fillRect(0 , 0, ctx.canvas.width, ctx.canvas.height);
    ctx.fillStyle = "rgb(255, 255, 0)";
    ctx.lineWidth = 5;
    ctx.strokeStyle = "rgb(0,0,0)";
    ctx.fillRect(((ctx.canvas.width/2) - ((ctx.canvas.width * 0.8)/2)), icon_y_offset, (ctx.canvas.width * 0.8), (ctx.canvas.height/3.75));
    ctx.strokeRect(((ctx.canvas.width/2) - ((ctx.canvas.width * 0.8)/2)), icon_y_offset, (ctx.canvas.width * 0.8), (ctx.canvas.height/3.75));
    
    
    ctx.fillStyle = "rgba(255, 255, 0, " + (1 - ((ystep/3)/25)) + ")";
    ctx.strokeStyle = "rgba(0, 0, 0, " + (1 - ((ystep/3)/25)) + ")";
    for(var b = 0; b < 3; b++)
    {
        var dynamic_box_width = (ctx.canvas.width * 0.6);   
        var dynamic_box_height = (ctx.canvas.height * 0.11);
        var dynamic_box_xoffset = ctx.canvas.width * 0.45;
        var dynamic_box_yoffset = ((ctx.canvas.height - (ctx.canvas.height/3.75) - (icon_y_offset*2) - (25*3))/3);
        var dynamic_box_ypos = (icon_y_offset + (ctx.canvas.height/3.75) + dynamic_box_yoffset + (b*(dynamic_box_height + dynamic_box_yoffset)) + ystep);
        if(b%2 != 0)
        {
            var dynamic_box_xpos = ((ctx.canvas.width/2) + (dynamic_box_width/2) + (dynamic_box_xoffset*xstep));
            dynamic_box_width = dynamic_box_width * -1;
        }
        else
        {
            var dynamic_box_xpos = ((ctx.canvas.width/2) - (dynamic_box_width/2) - (dynamic_box_xoffset*xstep));
        }
            
        
            
            
            
            
        ctx.strokeRect(dynamic_box_xpos, dynamic_box_ypos, dynamic_box_width, dynamic_box_height);
        ctx.fillRect(dynamic_box_xpos, dynamic_box_ypos, dynamic_box_width, dynamic_box_height);
        
        
        //((ctx.canvas.width/2) + (dynamic_box_width/2) + (offset_x * step)),
       // (icon_y_offset + (ctx.canvas.height/3.75) + offset_y+ (b * (height + offset_y))), 
        
        
        
        
        
      //  (dynamic_box_width * -1), height);
            
        
        
        
        
        
        /*
        
        
        var dynamic_box_width = (ctx.canvas.width * 0.6);
        console.log(ctx.canvas.height - (ctx.canvas.height/3.75) - 40 - (25*3));
        
        
        
        
        
        
        var height = 25;
        var offset_y = ((ctx.canvas.height - (ctx.canvas.height/3.75) - 40 - (25*3))/3);
        var offset_x = ctx.canvas.width * 0.45;
        
        
        
        
        
        
        
        
        
        /*if(b%2 != 0)
        {
            ctx.strokeRect(((ctx.canvas.width/2) + (dynamic_box_width/2) + (offset_x * step)), (icon_y_offset + (ctx.canvas.height/3.75) + offset_y+ (b * (height + offset_y))), (dynamic_box_width * -1), height);     
            ctx.fillRect(((ctx.canvas.width/2) + (dynamic_box_width/2) + (offset_x * step)), (icon_y_offset + (ctx.canvas.height/3.75) + offset_y+ (b * (height + offset_y))), (dynamic_box_width * -1), height);
            ctx.fillStyle = "rgb(210, 210, 210)";
            for(var l = 0; l < 1; l++)
            {
                ctx.fillRect(((ctx.canvas.width/2) + (dynamic_box_width/2) + (offset_x * step)), (icon_y_offset + (ctx.canvas.height/3.75) + offset_y+ (b * (height + offset_y))), (dynamic_box_width * -0.8), (height/5));
            }
        }
        else
        {
            ctx.strokeRect(((ctx.canvas.width/2) - (dynamic_box_width/2) - (offset_x * step)), (icon_y_offset + (ctx.canvas.height/3.75) + offset_y+ (b * (height + offset_y))), dynamic_box_width, height);
            ctx.fillRect(((ctx.canvas.width/2) - (dynamic_box_width/2) - (offset_x * step)), (icon_y_offset + (ctx.canvas.height/3.75) + offset_y+ (b * (height + offset_y))), dynamic_box_width, height);
        }*/
        
        
        
        
        
        
        
        ///ctx.strokeRect(((ctx.canvas.width/2) - (dynamic_box_width/2) - (offset_x * step)), (icon_y_offset + (ctx.canvas.height/3.75) + offset_y+ (b * (height + offset_y))), dynamic_box_width, height);
        //ctx.fillRect(((ctx.canvas.width/2) - (dynamic_box_width/2) - (offset_x * step)), (icon_y_offset + (ctx.canvas.height/3.75) + offset_y+ (b * (height + offset_y))), dynamic_box_width, height);
        
    }
    
    
    
    
   // ctx.fillRect(((ctx.canvas.width/2) - ((ctx.canvas.width * 0.9)/2)), 20, 20, 20);
}














function frontEndIconIterval(ctx, is_rendering)
{
    var a = 0;
    var interval = setInterval(function()
    {
        if(is_rendering == false)
        {
            var s = (a/100);
            a = a + 2;
            drawFrontEndIcon(ctx, s);
        }
        else
        {
            var s = ((100 - a)/100);
            a =  a + 2;
            drawFrontEndIcon(ctx, s);
        }
        if(a == 100)
        {
            clearFrontEndInterval(ctx, interval, is_rendering);
        }
    }, 750/100);
}
function clearFrontEndInterval(ctx, updater, is_rendering)
{
    clearInterval(updater);
    if(is_rendering == false)
    {
        setTimeout(function()
        {
            if(current_front_end_group == 0)
            {
                current_front_end_group = 1;
            }
            else
            {
                current_front_end_group = 0;
            }
            frontEndIconIterval(ctx, true);
        }, 300);
    }
    else
    {
        if(front_end_hovering == true)
        {
            setTimeout(function()
            {
                frontEndIconIterval(ctx, false);
            }, 3500);
        }
        else
        {
            is_front_end_animating = false;
        }
    }
}
function drawFrontEndIcon(ctx, step)
{
    var pc_divider = (ctx.canvas.height * 0.036);
    var mobile_divider = (pc_divider/1.7);
    
    //---Devices
    var pc = new FrontEndObject(((ctx.canvas.width/2) - (ctx.canvas.width/7.5)), (ctx.canvas.height/2), (ctx.canvas.width/1.8), (ctx.canvas.height/2));
    var pc_screen = new FrontEndObject(((ctx.canvas.width/2) - (ctx.canvas.width/7.5)), (ctx.canvas.height/2), (pc.width - (ctx.canvas.width * 0.045)), pc.height - (ctx.canvas.width * 0.045));
    var mobile = new FrontEndObject(((ctx.canvas.width/2) + (ctx.canvas.width/7.5)), (ctx.canvas.height/5)*3.5, (ctx.canvas.width/5.25), (ctx.canvas.height/2.15));
    var mobile_screen = new FrontEndObject(((ctx.canvas.width/2) + (ctx.canvas.width/7.5)), (ctx.canvas.height/5)*3.5, ((ctx.canvas.width/5.5) - (ctx.canvas.width * 0.045)), ((ctx.canvas.height/2.15) - (ctx.canvas.width * 0.045)));
     
    //---Group 0
    var pc_group0_div0 = new FrontEndDiv((pc_screen.center_xpos - (pc_screen.width/2))+(pc_screen.width*step), (pc_screen.center_ypos - (pc_screen.height/2) + (ctx.canvas.height * 0.036)), (pc_screen.width-(pc_screen.width*step)), (pc_screen.height/4), "rgba(255, 0, 0, " + (1-step) + ")");
    var pc_group0_div1 = new FrontEndDiv((pc_screen.center_xpos - (pc_screen.width/2)), (pc_screen.center_ypos - (pc_screen.height/2) + (pc_screen.height/4) + ((ctx.canvas.height * 0.036) * 2)), (pc_screen.width/3) - ((pc_screen.width/3)*step ), (((pc_screen.height/4) * 3) - ((ctx.canvas.height * 0.036)*2)), "rgba(255, 0, 255, " + (1-step) + ")");
    var pc_group0_div2 = new FrontEndDiv(((pc_screen.center_xpos - (pc_screen.width/2)) + (pc_screen.width/3) + (ctx.canvas.height * 0.036)), (pc_screen.center_ypos - (pc_screen.height/2) + (pc_screen.height/4) + ((ctx.canvas.height * 0.036) * 2)) + ((((pc_screen.height/4) * 3) - ((ctx.canvas.height * 0.036)*2)) * step), (((pc_screen.width/3) * 2) - (ctx.canvas.height * 0.036)), (((pc_screen.height/4) * 3) - ((ctx.canvas.height * 0.036)*2)) - (((((pc_screen.height/4) * 3) - ((ctx.canvas.height * 0.036)*2)))*step), "rgba(0, 180, 255, " + (1-step) + ")");
    var mobile_group0_div0 = new FrontEndDiv((mobile_screen.center_xpos - (mobile_screen.width/2)), (mobile_screen.center_ypos - (mobile_screen.height/2) + mobile_divider), mobile_screen.width, ((mobile_screen.height/4) - ((mobile_screen.height/4)*step)), "rgba(255, 0, 0, " + (1-step) + ")");
    var mobile_group0_div1 = new FrontEndDiv((mobile_screen.center_xpos - (mobile_screen.width/2)), (mobile_screen.center_ypos - (mobile_screen.height/2) + (mobile_divider*2) + mobile_screen.height/4), ((mobile_screen.width/2) - ((mobile_screen.width/2)*step)), (mobile_screen.height/3), "rgba(255, 0, 0, " + (1-step) + ")");
    var mobile_group0_div2 = new FrontEndDiv(((mobile_screen.center_xpos - (mobile_screen.width/2) + (mobile_screen.width/2) + mobile_divider) + ((mobile_screen.width - (mobile_screen.width/2) - mobile_divider)*step)), (mobile_screen.center_ypos - (mobile_screen.height/2) + (mobile_divider*2)  + mobile_screen.height/4), ((mobile_screen.width - (mobile_screen.width/2) - mobile_divider) - ((mobile_screen.width - (mobile_screen.width/2) - mobile_divider)*step)), (mobile_screen.height - (mobile_screen.height/4) - mobile_divider), "rgba(255, 0, 0, " + (1-step) + ")");
    var mobile_group0_div3 = new FrontEndDiv((mobile_screen.center_xpos - (mobile_screen.width/2)), (mobile_screen.center_ypos - (mobile_screen.height/2) + (mobile_divider*3) + (mobile_screen.height/4) + (mobile_screen.height/3)), (mobile_screen.width - (mobile_screen.width*step)), (mobile_screen.height - (mobile_screen.height/4) - (mobile_screen.height/3) - (mobile_divider*2)), "rgba(255, 0, 0, " + (1-step) + ")");
    
    //---Group 1
    var pc_group1_div0 = new FrontEndDiv((pc_screen.center_xpos - (pc_screen.width/2)), (pc_screen.center_ypos - (pc_screen.height/2) + (ctx.canvas.height * 0.036)), ((pc_screen.height/3) - ((pc_screen.height/3) * step)), (pc_screen.height/3), "rgba(255, 0, 0, " + (1-step) + ")");
    var pc_group1_div1 = new FrontEndDiv((pc_screen.center_xpos - (pc_screen.width/2) + (pc_screen.height/3) + pc_divider), (pc_screen.center_ypos - (pc_screen.height/2) + ((ctx.canvas.height * 0.036)*2)), (pc_screen.width - ((pc_screen.height/3)) - pc_divider), ((pc_screen.height/4)/1.5) - (((pc_screen.height/4)/1.5)*step), "rgba(255, 0, 0, " + (1-step) + ")");
    var pc_group1_div2 = new FrontEndDiv((pc_screen.center_xpos - (pc_screen.width/2)), (pc_screen.center_ypos - (pc_screen.height/2) + (ctx.canvas.height * 0.036)) + (pc_screen.height/3) + pc_divider + ((pc_screen.height - (pc_screen.height/3) - (pc_divider*2))*step), ((pc_screen.width/8)*4.5), (pc_screen.height - (pc_screen.height/3) - (pc_divider*2)) - ((pc_screen.height - (pc_screen.height/3) - (pc_divider*2))*step), "rgba(255, 0, 0, " + (1-step) + ")");
    var pc_group1_div3 = new FrontEndDiv(((pc_screen.center_xpos - (pc_screen.width/2)) + ((pc_screen.width/8)*4.5) + pc_divider) + ((pc_screen.width - ((pc_screen.width/8)*4.5) - pc_divider) * step), ((pc_screen.center_ypos - (pc_screen.height/2) + (ctx.canvas.height * 0.036)) + (pc_screen.height/3) + pc_divider), (pc_screen.width - ((pc_screen.width/8)*4.5) - pc_divider) - ((pc_screen.width - ((pc_screen.width/8)*4.5) - pc_divider) * step), ((pc_screen.height - (pc_screen.height/3) - (pc_divider*2)) - pc_divider)/2, "rgba(255, 0, 0, " + (1-step) + ")");
    var pc_group1_div4 = new FrontEndDiv(((pc_screen.center_xpos - (pc_screen.width/2)) + ((pc_screen.width/8)*4.5) + pc_divider) + ((pc_screen.width - ((pc_screen.width/8)*4.5) - pc_divider) * step), ((pc_screen.center_ypos - (pc_screen.height/2) + (ctx.canvas.height * 0.036)) + (pc_screen.height/3) + pc_divider) + (((pc_screen.height - (pc_screen.height/3) - (pc_divider*2)) - pc_divider)/2) + pc_divider, (pc_screen.width - ((pc_screen.width/8)*4.5) - pc_divider) - ((pc_screen.width - ((pc_screen.width/8)*4.5) - pc_divider) * step), ((pc_screen.height - (pc_screen.height/3) - (pc_divider*2)) - pc_divider)/2, "rgba(255, 0, 0, " + (1-step) + ")");
    var mobile_group1_div0 = new FrontEndDiv((mobile_screen.center_xpos - (mobile_screen.width/2) - mobile_divider), (mobile_screen.center_ypos - (mobile_screen.height/2) + mobile_divider), ((mobile_screen.width + (mobile_divider*2))- ((mobile_screen.width + (mobile_divider*2))*step)), (mobile_screen.height/7), "rgba(255, 0, 0, " + (1-step) + ")");
    var mobile_group1_div1 = new FrontEndDiv((mobile_screen.center_xpos - (mobile_screen.width/2) - mobile_divider), (mobile_screen.center_ypos - (mobile_screen.height/2) + (mobile_screen.height/7) + (mobile_divider*2)), ((mobile_screen.height/4) - ((mobile_screen.height/4)*step)), (mobile_screen.height/4), "rgba(255, 0, 0, " + (1-step) + ")");
    var mobile_group1_div2 = new FrontEndDiv((mobile_screen.center_xpos - (mobile_screen.width/2) + (mobile_screen.height/4)) + ((mobile_screen.width - (mobile_screen.height/4) + mobile_divider)*step), (mobile_screen.center_ypos - (mobile_screen.height/2) + (mobile_screen.height/7) + (mobile_divider*2)), ((mobile_screen.width - (mobile_screen.height/4) + mobile_divider) - ((mobile_screen.width - (mobile_screen.height/4) + mobile_divider)*step)), (mobile_screen.height/4), "rgba(255, 0, 0, " + (1-step) + ")");
    var mobile_group1_div3 = new FrontEndDiv((mobile_screen.center_xpos - (mobile_screen.width/2) - mobile_divider  + ((mobile_screen.width + (mobile_divider*2))*step)), (mobile_screen.center_ypos - (mobile_screen.height/2) + (mobile_screen.height/7) + (mobile_divider*3) + (mobile_screen.height/4)), ((mobile_screen.width + (mobile_divider*2)) - ((mobile_screen.width + (mobile_divider*2))*step)), (mobile_screen.height/3), "rgba(255, 0, 0, " + (1-step) + ")");
    var mobile_group1_div4 = new FrontEndDiv((mobile_screen.center_xpos - (mobile_screen.width/2) - mobile_divider), ((mobile_screen.center_ypos - (mobile_screen.height/2) + (mobile_screen.height/7) + (mobile_divider*4) + (mobile_screen.height/4) + (mobile_screen.height/3))  + ((mobile_screen.height - (mobile_screen.height/3) - (mobile_screen.height/4) - (mobile_screen.height/7) - (mobile_divider*3))*step)), (mobile_screen.width + (mobile_divider*2)), ((mobile_screen.height - (mobile_screen.height/3) - (mobile_screen.height/4) - (mobile_screen.height/7) - (mobile_divider*3)) - ((mobile_screen.height - (mobile_screen.height/3) - (mobile_screen.height/4) - (mobile_screen.height/7) - (mobile_divider*3))*step)), "rgba(255, 0, 0, " + (1-step) + ")");  
    
    var pc_front_end_groups = [
        [pc_group0_div0, pc_group0_div1, pc_group0_div2],
        [pc_group1_div0, pc_group1_div1, pc_group1_div2, pc_group1_div3, pc_group1_div4]
        ];
    var mobile_front_end_groups = [
        [mobile_group0_div0, mobile_group0_div1, mobile_group0_div2, mobile_group0_div3],
        [mobile_group1_div0, mobile_group1_div1, mobile_group1_div2, mobile_group1_div3, mobile_group1_div4]
        ];
    
    //---Draw the PC screen and divs
    ctx.strokeStyle = "rgb(0,0,0)";
    ctx.lineWidth = (ctx.canvas.width * 0.022);
    ctx.fillStyle = "rgb(225, 225, 225)";
    drawDevice(ctx, pc);
    ctx.fillStyle = "rgb(255, 255, 255)";
    drawDevice(ctx, pc_screen);
    for(var t = 0; t < pc_front_end_groups[current_front_end_group].length; t++)
   {
       ctx.fillStyle = pc_front_end_groups[current_front_end_group][t].color;
       ctx.fillRect(pc_front_end_groups[current_front_end_group][t].xpos, pc_front_end_groups[current_front_end_group][t].ypos, pc_front_end_groups[current_front_end_group][t].width, pc_front_end_groups[current_front_end_group][t].height);
   }
   //---Draw the mobile screen and divs
   ctx.fillStyle = "rgb(225, 225, 225)";
   drawDevice(ctx, mobile);
   ctx.fillStyle = "rgb(255, 255, 255)";
   drawDevice(ctx, mobile_screen);
   for(var t = 0; t < mobile_front_end_groups[current_front_end_group].length; t++)
   {
       ctx.fillStyle = mobile_front_end_groups[current_front_end_group][t].color;
       ctx.fillRect(mobile_front_end_groups[current_front_end_group][t].xpos, mobile_front_end_groups[current_front_end_group][t].ypos, mobile_front_end_groups[current_front_end_group][t].width, mobile_front_end_groups[current_front_end_group][t].height);
   }
}
function FrontEndObject(center_xpos, center_ypos, width, height)
{
    this.center_xpos = center_xpos;
    this.center_ypos = center_ypos;
    this.width = width;
    this.height = height;
}
function FrontEndDiv(xpos, ypos, width, height, color)
{
    this.xpos = xpos;
    this.ypos = ypos;
    this.width = width;
    this.height = height;
    this.color = color;
}
function drawDevice(ctx, device)
{
    var quadratic_control_point = (ctx.canvas.height * 0.045);
    ctx.beginPath();
        ctx.moveTo((device.center_xpos - (device.width/2)), (device.center_ypos - (device.height/2)));
        ctx.lineTo((device.center_xpos + (device.width/2)), (device.center_ypos - (device.height/2)));
        ctx.quadraticCurveTo((device.center_xpos + (device.width/2) + quadratic_control_point), (device.center_ypos - (device.height/2)), (device.center_xpos + (device.width/2) + quadratic_control_point), (device.center_ypos - (device.height/2) + quadratic_control_point));
        ctx.lineTo((device.center_xpos + (device.width/2) + quadratic_control_point), (device.center_ypos + (device.height/2)));
        ctx.quadraticCurveTo((device.center_xpos + (device.width/2) + quadratic_control_point), (device.center_ypos + (device.height/2) + quadratic_control_point), (device.center_xpos + (device.width/2)),  (device.center_ypos + (device.height/2) + quadratic_control_point));
        ctx.lineTo((device.center_xpos - (device.width/2)), (device.center_ypos + (device.height/2) + quadratic_control_point));
        ctx.quadraticCurveTo((device.center_xpos - (device.width/2) - quadratic_control_point), (device.center_ypos + (device.height/2) + quadratic_control_point), (device.center_xpos - (device.width/2) - quadratic_control_point),  (device.center_ypos + (device.height/2)));
        ctx.lineTo((device.center_xpos - (device.width/2) - quadratic_control_point), (device.center_ypos - (device.height/2) + quadratic_control_point));
        ctx.quadraticCurveTo((device.center_xpos - (device.width/2) - quadratic_control_point), (device.center_ypos - (device.height/2)), (device.center_xpos - (device.width/2)), (device.center_ypos - (device.height/2)));
    ctx.stroke();
    ctx.fill();
}





















function stoppa(updater)
{
    clearInterval(updater);
}


function GearObject(center_xpos, center_ypos, notches, hole_radius, inner_radius, outer_radius)
{
    this.center_xpos = center_xpos;
    this.center_ypos = center_ypos;
    this.notches = notches;
    this.hole_radius = hole_radius;
    this.inner_radius = inner_radius;
    this.outer_radius = outer_radius;
}
function drawGear(ctx, gear, step)
{
    var inner_taper = 20;
    var outer_taper = 20;
    var angle = ((Math.PI * 2)/(gear.notches * 2));
    var inner_taper_offset =   (angle * inner_taper * 0.005);
    var outer_taper_offset =   (angle * outer_taper * 0.005);
    var toggle = false;
    
    ctx.save();
        ctx.beginPath();
           ctx.translate(gear.center_xpos, gear.center_ypos);
           ctx.rotate(((360/gear.notches)*step) *Math.PI/180);
           ctx.moveTo(0 + gear.outer_radius * Math.cos(outer_taper_offset), 0 + gear.outer_radius * Math.sin(outer_taper_offset));
            for (var a = angle; a <= (Math.PI * 2); a += angle)
            {
                if (toggle)
                {
                    ctx.lineTo(0 + gear.inner_radius * Math.cos(a - inner_taper_offset), 0 + gear.inner_radius * Math.sin(a - inner_taper_offset));
                    ctx.lineTo(0 + gear.outer_radius * Math.cos(a + outer_taper_offset), 0 + gear.outer_radius * Math.sin(a + outer_taper_offset));
                }
                else
                {
                    ctx.lineTo(0 + gear.outer_radius * Math.cos(a - outer_taper_offset), 0 + gear.outer_radius * Math.sin(a - outer_taper_offset));
                    ctx.lineTo(0 + gear.inner_radius * Math.cos(a + inner_taper_offset), 0 + gear.inner_radius * Math.sin(a + inner_taper_offset));
                }
                toggle = !toggle;
            }
        ctx.closePath();
        ctx.fillStyle = "rgb(0, 134, 189)";
        ctx.fill();

        ctx.beginPath();
            ctx.moveTo(0 + gear.hole_radius, 0);
            ctx.arc(0, 0, gear.hole_radius, 0, (Math.PI * 2));
        ctx.closePath();
        ctx.fillStyle = "rgb(255, 255, 255)";
        ctx.fill();
    ctx.restore();
}
function drawWordpressIcon(ctx, step)
{
    var canvas_width_midpoint = (ctx.canvas.width/2);
    var canvas_height_midpoint = (ctx.canvas.height/2);
    var wordpress_logo = new Image();
    wordpress_logo.src = "wordpress_logo.png";
    //wordpress_logo.src = "http://10steps.sg/wp-content/uploads//2012/06/cartoonize-a-picture-in-photoshop-7.jpg";
    var wordpress_logo_width = (ctx.canvas.width/3);
    
    
     var gear0 = new GearObject(
        (ctx.canvas.width - (ctx.canvas.width * 0.05) - (((ctx.canvas.width/12) + (ctx.canvas.width * 0.093)) + (ctx.canvas.width * 0.031))), 
        (ctx.canvas.height - (ctx.canvas.height * 0.05) - (((ctx.canvas.width/12) + (ctx.canvas.width * 0.093)) + (ctx.canvas.width * 0.031))), 
        12, 
        (ctx.canvas.width/12), ((ctx.canvas.width/12) + (ctx.canvas.width * 0.093)), 
        (((ctx.canvas.width/12) + (ctx.canvas.width * 0.093)) + (ctx.canvas.width * 0.031)));
    
    
    var gear1 = new GearObject(
        ((ctx.canvas.width * 0.05) + ((ctx.canvas.width * 0.09) + (ctx.canvas.width*0.054) + (ctx.canvas.width*0.018))),
        ((ctx.canvas.width/9) * 4.15), 
        9, 
        (ctx.canvas.width * 0.09), 
        ((ctx.canvas.width * 0.09) + (ctx.canvas.width*0.054)),  
        ((ctx.canvas.width * 0.09) + (ctx.canvas.width*0.054) + (ctx.canvas.width*0.018)) );
    
    
    var gear2 = new GearObject(
        ((ctx.canvas.width/7)*2.6),
        ((ctx.canvas.width * 0.05) + ((ctx.canvas.width * 0.09) + (ctx.canvas.width*0.054) + (ctx.canvas.width*0.018))), 
        //0,
        9, 
        (ctx.canvas.width * 0.09), 
        ((ctx.canvas.width * 0.09) + (ctx.canvas.width*0.054)), 
        ((ctx.canvas.width * 0.09) + (ctx.canvas.width*0.054) + (ctx.canvas.width*0.018)));
    
    
    
    
    var outer_gear = new GearObject((ctx.canvas.width/2), (ctx.canvas.height/2), 7, (((ctx.canvas.width/3)/2) - (ctx.canvas.width * 0.013)),  ((((ctx.canvas.width/3)/2) - (ctx.canvas.width * 0.013)) + (ctx.canvas.width * 0.034)), (((((ctx.canvas.width/3)/2) - (ctx.canvas.width * 0.013)) + (ctx.canvas.width * 0.034)) + (ctx.canvas.width * 0.030)));
    var gears = [gear0, gear1, gear2, outer_gear];
    
    ctx.fillStyle = "rgb(255, 255, 255)";
    ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    for(var g = 0; g < gears.length; g++)
    {
        if(g == 1)
        {
             drawGear(ctx, gears[g], (step * -1));   
        }
        else
        {
             drawGear(ctx, gears[g], step);
        }
    }
    
    ctx.drawImage(wordpress_logo, ((ctx.canvas.width/2) - (wordpress_logo_width/2)), ((ctx.canvas.height/2) - (wordpress_logo_width/2)), wordpress_logo_width, wordpress_logo_width); 
    //ctx.drawImage(wordpress_logo, 10, 100, 100, 100); 
}










function drawInteractiveAppIcon(ctx)
{
    var graph_width = (ctx.canvas.width * 0.85);
    var graph_height = (ctx.canvas.height * 0.75);
    var graph_x_offset = ((ctx.canvas.width - graph_width)/2);
    var graph_y_offset = ((ctx.canvas.height - graph_height)/2);
    var graph_circle_radius = (graph_width * 0.013);
    
    
    
    ctx.strokeStyle = "rgb(0 , 0, 0)";
    ctx.lineWidth = ctx.canvas.height * 0.009;
    ctx.strokeRect(graph_x_offset, graph_y_offset, graph_width, graph_height);
    
    ctx.beginPath();
    ctx.fillStyle = "rgb(0, 255, 0)";
        ctx.arc((graph_x_offset + (graph_width/5)), (graph_y_offset + ((graph_height/6)*4)), graph_circle_radius, 0, 2 * Math.PI, false);
    ctx.fill();
    
    ctx.beginPath();
    ctx.fillStyle = "rgb(255 , 0, 0)";
        ctx.arc((graph_x_offset + ((graph_width/5)*2)), (graph_y_offset + ((graph_height/10)*4.5)), graph_circle_radius, 0, 2 * Math.PI, false);
    ctx.fill();
    
    ctx.beginPath();
    ctx.fillStyle = "rgb(0, 5, 255)";
        ctx.arc((graph_x_offset + ((graph_width/5)*3)), (graph_y_offset + ((graph_height/10)*7.5)), graph_circle_radius, 0, 2 * Math.PI, false);
    ctx.fill();
    
    ctx.beginPath();
    ctx.fillStyle = "rgb(0, 255, 255)";
        ctx.arc((graph_x_offset + ((graph_width/5)*4)), (graph_y_offset + ((graph_height/10)*2)), graph_circle_radius, 0, 2 * Math.PI, false);
    ctx.fill();
    
    ctx.beginPath();
    ctx.moveTo(graph_x_offset, graph_y_offset + graph_height);
    ctx.lineTo((graph_x_offset + (graph_width/5)), (graph_y_offset + ((graph_height/6)*4)));
    ctx.lineTo((graph_x_offset + ((graph_width/5)*2)), (graph_y_offset + ((graph_height/10)*4.5)));
    ctx.lineTo((graph_x_offset + ((graph_width/5)*3)), (graph_y_offset + ((graph_height/10)*7.5)));
    ctx.lineTo((graph_x_offset + ((graph_width/5)*4)), (graph_y_offset + ((graph_height/10)*2)));
    ctx.stroke();
}