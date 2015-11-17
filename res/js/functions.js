var scr_width = $(window).width(),
	scr_height = $(window).height(),
	palette = $(".palette"),
	count_color = palette.find("li").size(),
	col_width = ''+ (scr_width / count_color),
	col_width_fix = col_width.split(".");

$(document).ready(function(){
	col_resizer();
	
	alert(col_width_fix[0]);

	$(".cor-hex").click(function(){
		copyToClipboard($(this));
	});
});

$(window).resize(function(){
	col_resizer();
});

function col_resizer() {
	palette.css("height", ""+ $(this).parent().height() +"px");
	palette.find("li").css("width", ""+ col_width-4 +"px");
}

function copyToClipboard(element) {
	var $temp = $("<input>");
	$("body").append($temp);
	$temp.val($(element).text()).select();
	document.execCommand("copy");
	$temp.remove();
}