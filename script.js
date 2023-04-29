setInterval(checkAspect, 100);
function checkAspect(){
	let windowwidth = $(window).width();
	let windowheight = $(window).height();
	alert(windowwidth);
	alert(windowheight);
	if(windowwidth/windowheight>3 || windowwidth/windowheight<0.5){
		alert("This aspect ratio is currently not supported. Website may appear broken.");
	}
}