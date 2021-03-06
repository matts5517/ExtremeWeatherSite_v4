

var test = function(){
	console.log('print test')
};

var currentObsLayers = function(val){
	try{
		map.removeSource('wind');
        map.removeLayer('wind');
        map.removeSource('temp_f');
        map.removeLayer('temp_f');
        map.removeSource('windGust');
        map.removeLayer('windGust');
        map.removeSource('humidity');
        map.removeLayer('humidity');
        // map.removeSource('pressure');
        // map.removeLayer('pressure');
    }
    catch(err){
        ''
    }
	console.log(val);
	var stopList; // set stopList var
	// determine which color ramp to use //////////////
	if(val == 'wind'){
		stopList = windList;
	} else if (val == 'temp_f'){
		stopList = tempList
	}else if (val == 'windGust'){
		stopList = windGustList
	}else if (val == 'humidity'){
		stopList = humidityList
	}else if(val == 'pressure'){
		stopList = pressureList
	}
	console.log(map)
	map.addSource(val, {
        "type": "geojson",
        "data": jsonData
    });
    map.addLayer({
        "id": val,
        "source": val,
        "type": "circle",
        'paint': {
            'circle-color': {
                property: val,
                stops: stopList
            }
        },
    });
};

var currentSliderChange = function(id, lowerVal, upperVal){
	try{
		map.removeSource('wind');
        map.removeLayer('wind');
        map.removeSource('temp_f');
        map.removeLayer('temp_f');
        map.removeSource('windGust');
        map.removeLayer('windGust');
        map.removeSource('humidity');
        map.removeLayer('humidity');
        // map.removeSource('pressure');
        // map.removeLayer('pressure');
    }
    catch(err){
        ''
    }
	if(id == 'tempSldr'){
		var val = 'temp_f'
		var stop = tempList;
		// called at end of slide. use change to ask server for data
	    var features = $.grep(jsonData.features, function(element, index){
	          return element.properties.temp_f >= lowerVal && element.properties.temp_f <= upperVal;
	    });
	}else if (id == 'windSldr'){
		var val = 'wind'
		var stop = windList;
		// called at end of slide. use change to ask server for data
	    var features = $.grep(jsonData.features, function(element, index){
	          return element.properties.wind >= lowerVal && element.properties.wind <= upperVal;
	    });
	}else if (id == 'windGustSldr'){
		var val = 'windGust'
		var stop = windGustList;
		// called at end of slide. use change to ask server for data
	    var features = $.grep(jsonData.features, function(element, index){
	          return element.properties.windGust >= lowerVal && element.properties.windGust <= upperVal;
	    });
	}else if (id == 'humiditySldr'){
		var val = 'humidity'
		var stop = humidityList;
		// called at end of slide. use change to ask server for data
	    var features = $.grep(jsonData.features, function(element, index){
	          return element.properties.humidity >= lowerVal && element.properties.humidity <= upperVal;
	    });
	}

	try{
        map.removeSource(val);
        map.removeLayer(val);
    }
    catch(err){
        ''
    }

	var features = {"type":"FeatureCollection", features } 
	console.log(features);

	map.addSource(val, {
        "type": "geojson",
        "data": features
    });

    map.addLayer({
        "id": val,
        "source": val,
        "type": "circle",
        'paint': {
            'circle-color': {
                property: val,
                stops: stop
            }
        },
    });

};


// // Build the functionality for the popup ////////////////////////
//   map.on('mousemove', function (e) {
//         var features = map.queryRenderedFeatures(e.point, { layers: [val] });
//         // Change the cursor style as a UI indicator.
//         map.getCanvas().style.cursor = (features.length) ? 'pointer' : '';
//         if (!features.length) {
//             popup.remove();
//             return;
//         }
//         var feature = features[0];
//         // Populate the popup and set its coordinates
//         // based on the feature found.
//         popup.setLngLat(feature.geometry.coordinates)
//             .setHTML(feature.properties.temp_f + '&deg' + '<br>' + feature.properties.wind + 'MPH')
//             .addTo(map);
//     })

// 	// Use the same approach as above to indicate that the symbols are clickable
// 	// by changing the cursor style to 'pointer'.
// 	map.on('mousemove', function (e) {
// 	    var features = map.queryRenderedFeatures(e.point, { layers: [val] });
// 	    map.getCanvas().style.cursor = (features.length) ? 'pointer' : '';
// 	});
// 	// Create a popup, but don't add it to the map yet.
// 	var popup = new mapboxgl.Popup({
// 	    closeButton: true,
// 	    closeOnClick: false
// 	});
// });


