/*
$(document).ready(function(){
	 var i=1;var n=3;
	 for(i=1;i<=n;i++){
	 	document.getElementById(i).style.display='none';
	 }
	

});
function showHide(elementid){
		if (document.getElementById(elementid).style.display == 'none'){
			document.getElementById(elementid).style.display = '';
		} else {
			document.getElementById(elementid).style.display = 'none';
		}
}*/
/* ----------------------------------------------------------------------------------------------------------------------------------- */
//$("#one").hide();
//$("#two").hide();
//$("#three").hide();
$("#one").fadeOut();
$("#two").fadeOut();
$("#three").fadeOut();

function show_right(elem){
	//$("\""+"#"+elem+"\"").fadeIn();
	
	/*
	switch(elem){
		case 1:$("#one").fadeIn();
			break;
		default:;
	}
	*/
	
	if(elem==1){
		$("#one").fadeToggle();
	}
	else if(elem==2){
		$("#two").fadeToggle();
	}
	else if(elem==3){
		$("#three").fadeToggle();
	}
	
}
/* ----------------------------------------------------------------------------------------------------------------------------------- */
	$("#a2").hide();
	$("#b2").hide();
	$("#c2").hide();
function show_more(elem_id1,elem_id2,elem_id3){
	
	if (document.getElementById(elem_id1).style.display == 'none'){
			document.getElementById(elem_id1).style.display = '';
		} else {
			document.getElementById(elem_id1).style.display = 'none';
	}
	
	if (document.getElementById(elem_id2).style.display == 'none'){
			document.getElementById(elem_id2).style.display = '';
			document.getElementById(elem_id3).innerHTML="See less";
		} else {
			document.getElementById(elem_id2).style.display = 'none';
			document.getElementById(elem_id3).innerHTML="See more";
	}
	/*
	$("\""+"#"+elem_id1+"\"").toggle();
	$("\""+"#"+elem_id2+"\"").toggle();
	*/
}
/* ----------------------------------------------------------------------------------------------------------------------------------- */