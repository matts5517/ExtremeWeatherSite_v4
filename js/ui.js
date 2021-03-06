// js file for handling the UI of the site ////////////////////////////////////////////////////////////////////////////////////////


// Build out the animation for the attribute window expand collapse functionality ////////////////////////////////////////////////
$("#attributeMinBtn").click(function () {
	var width = $("#sideBarAttWrapper").width();
	if(width > 250){
		$("#sideBarAttWrapper").animate({ width: '160px'});
		$('#attributeMinBtn').css({ "transform": "rotate(0deg)"})
		$('#currentObs-CntrlWrap').find('.cb_slideContent').each(function(i,v){
          $(v).slideUp();
    	})

	}else{
		$("#sideBarAttWrapper").animate({ width: '300px'});
		$('#attributeMinBtn').css({ "transform": "rotate(180deg)"})
		$('#currentObs-CntrlWrap').find('input').each(function(i,v){
			if(v.checked){
				$(v).parent().next().children().slideDown();
			}
		})
	}
});


$( ".pillCheckbox" ).on( "click", function(c) {
	var pillID = c.currentTarget.id.split('-')[0];
	var newID;
	// add orange css color text to show what is selected
	let test = $('.sideBarNavigation').find('.pillCheckbox')
	console.log('look 2	')
	$('.sideBarNavigation').find('.pillCheckbox').each(function(i,v){
          $(v).css('color', 'white')
    })
	$(c.currentTarget).css('color', 'orange')
	// slide down the appropriate control wrapper section.
	$( ".cntrlWrap" ).each(function(v,c){
		var ctrID = c.id.split('-')[0];
		var ctrID2 = c.id;
		if(ctrID == pillID){
			newID = pillID + '-CntrlWrap';
			$( "#" + newID ).slideDown();
		}else{
			$( "#" + ctrID2 ).slideUp();
		}
	});
	
});

// Handle radio buttons for current observations //////////////////////////////////////////////////////////////////
$( "#sideBarAttWrapper input" ).on( "click", function(c) {
	var val = c.currentTarget.value;
	if(c.currentTarget.checked == true){
	  	// $('#' + val).slideDown()
	  	currentObsLayers(val); // call the function that controls the visible layers
	  }else{
	  	// $('#' + val).slideUp()
	  	''
	  }
	  // loop through radio buttons and slide up all the others that do not match the current target.
	  $( "#sideBarAttWrapper input" ).each(function(v,c){
		   if(c.value == val){
		   	''
		   }else{
		   	 // $('#' + c.value).slideUp()
		   }
	});
});

//layout range slider
// Temp slider Handeler //////////////////////////////////////////////////////////////////////////////////////////
$('#tempSldr').slider({range:true, min:-20, max:130, values:[0,100]});
$('#tempSldr').on('slidechange', function( event, ui ) {
	var id = event.target.id;
	var lowerVal = ui.values[0]
    var upperVal  = ui.values[1]
	currentSliderChange(id,lowerVal, upperVal); // call slider change function.
});
$('#tempSldr').on('slide', function( event, ui ) {
	$('#tempSldr').prev().find('span').each(function(i,v){
        $(v).html(ui.values[i])
        test();
    })
});

// Wind slider Handeler //////////////////////////////////////////////////////////////////////////////////////////
$('#windSldr').slider({range:true, min:0, max:100, values:[0,100]});
$('#windSldr').on('slidechange', function( event, ui ) {
	var id = event.target.id;
	var lowerVal = ui.values[0]
    var upperVal  = ui.values[1]
	currentSliderChange(id,lowerVal, upperVal); // call slider change function.
});
$('#windSldr').on('slide', function( event, ui ) {
	$('#windSldr').prev().find('span').each(function(i,v){
        $(v).html(ui.values[i])
    })
});
// Wind gust slider Handeler //////////////////////////////////////////////////////////////////////////////////////////
$('#windGustSldr').slider({range:true, min:0, max:100, values:[0,100]});
$('#windGustSldr').on('slidechange', function( event, ui ) {
	var id = event.target.id;
	var lowerVal = ui.values[0]
    var upperVal  = ui.values[1]
	currentSliderChange(id,lowerVal, upperVal); // call slider change function.
});
$('#windGustSldr').on('slide', function( event, ui ) {
	console.log('wind gust slider slide');
	$('#windGustSldr').prev().find('span').each(function(i,v){
        $(v).html(ui.values[i])
    })
});
// Humidity slider Handeler //////////////////////////////////////////////////////////////////////////////////////////
$('#humiditySldr').slider({range:true, min:0, max:100, values:[0,100]});
$('#humiditySldr').on('slidechange', function( event, ui ) {
	var id = event.target.id;
	var lowerVal = ui.values[0]
    var upperVal  = ui.values[1]
	currentSliderChange(id,lowerVal, upperVal); // call slider change function.
});
$('#humiditySldr').on('slide', function( event, ui ) {
	console.log('humidity slider slide');
	$('#humiditySldr').prev().find('span').each(function(i,v){
        $(v).html(ui.values[i])
    })
});
// Pressure slider Handeler //////////////////////////////////////////////////////////////////////////////////////////
// $('#pressureSldr').slider({range:true, min:0, max:100, values:[0,100]});
// $('#pressureSldr').on('slidechange', function( event, ui ) {
// 	var id = event.target.id;
// 	var lowerVal = ui.values[0]
//     var upperVal  = ui.values[1]
// 	currentSliderChange(id,lowerVal, upperVal); // call slider change function.
// });
// $('#pressureSldr').on('slide', function( event, ui ) {
// 	console.log('pressure slider slide');
// 	$('#pressureSldr').prev().find('span').each(function(i,v){
//         $(v).html(ui.values[i])
//     })
// });


// Handle changing the icon color on hover ////////////////////////////////////////////////////////////////////////
$( ".checkboxWrap label").on( "mouseover", function(c) {
	$(this).next().addClass('hover');
});
$( ".checkboxWrap label" ).on( "mouseout", function(c) {
	$(this).next().removeClass('hover');
});


