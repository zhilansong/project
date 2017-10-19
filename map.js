// Provide access token
mapboxgl.accessToken = 
'pk.eyJ1IjoidmVyYXNvbmciLCJhIjoiY2lqeHJ5a2NpMTlod3YzbHo1ejU5c2tmdSJ9.kkAK_ME_7QvgtrOWBJGcxA';

// Link to a mapbox studio style
var map = new mapboxgl.Map({
	  container: 'map',
	  minZoom: 10,
	  maxZoom: 17,
	  style: 'mapbox://styles/verasong/cj8npq2mm7ywr2rphoaootg6y'
});

// LEGEND
  var layers = [
    '0 - 9095', 
    '9096 - 19944', 
    '19945 - 32325', 
    '32326 - 48129', 
    '48130 - 69956',
    '69957 - 107744',
    '107745 - 181768',
    '181769 - 461104',
    'plastic waste',
    'special waste',
    'food waste',
    'metal waste',
    'gabage dumping',
    'landfill'
  ];

  // the colors we chose to style the parks on the map for each category
  var colors = [
    '#cccccc',
    '#bfbfbf',
    '#b3b3b3',
    '#a6a6a6',
    '#999999',
    '#8c8c8c',
    '#808080',
    '#737373',
    '#38ADD8',
    '#A592C5',
    '#FDCD57',
    '#5285C5',
    '#EB5664',
    '#DA1C5C'
  ];

  // add a legend to the map
  for (i = 0; i < layers.length; i++) {
    var layer = layers[i];
    var color = colors[i];
    var item = document.createElement('div');
    var key = document.createElement('span');
    key.className = 'legend-key';
    key.style.backgroundColor = color;

    var value = document.createElement('span');
    value.innerHTML = layer;
    item.appendChild(key);
    item.appendChild(value);
    legend.appendChild(item);
  }

// --------------------------------------------------------------------
//POPUPS
//click plasticwaste layer 
map.on('click', function (e) {
  var features = map.queryRenderedFeatures(e.point, {
    layers: ['plastic waste recycling'] // name of the layer
  });

  if (!features.length) {
    return;
  }

  var feature = features[0];

  var popup = new mapboxgl.Popup({ 
  	closeButton: true,
  	closeOnClick: true,
  	anchor: 'bottom',
  	offset: [0, -15] });
    popup.setLngLat(feature.geometry.coordinates);
    popup.setHTML('<h3>' + feature.properties.title + '</h3><p>' + feature.properties.description + '</p>');
    popup.setLngLat(feature.geometry.coordinates);
    popup.addTo(map);
});

//click garbagedump layer
map.on('click', function (e) {
  var features = map.queryRenderedFeatures(e.point, {
    layers: ['garbage dumping'] // name of the layer
  });

  if (!features.length) {
    return;
  }

  var feature = features[0];

  var popup = new mapboxgl.Popup({ 
    closeButton: true,
    closeOnClick: true,
    anchor: 'bottom',
    offset: [0, -15] });
    popup.setLngLat(feature.geometry.coordinates);
    popup.setHTML('<h3>' + feature.properties.title + '</h3><p>' + feature.properties.description + '</p>');
    popup.setLngLat(feature.geometry.coordinates);
    popup.addTo(map);
});

//click metal layer
map.on('click', function (e) {
  var features = map.queryRenderedFeatures(e.point, {
    layers: ['metal waste recycling'] // name of the layer
  });

  if (!features.length) {
    return;
  }

  var feature = features[0];

  var popup = new mapboxgl.Popup({ 
    closeButton: true,
    closeOnClick: true,
    anchor: 'bottom',
    offset: [0, -15] });
    popup.setLngLat(feature.geometry.coordinates);
    popup.setHTML('<h3>' + feature.properties.title + '</h3><p>' + feature.properties.description + '</p>');
    popup.setLngLat(feature.geometry.coordinates);
    popup.addTo(map);
});

//click specialwaste layer
map.on('click', function (e) {
  var features = map.queryRenderedFeatures(e.point, {
    layers: ['special waste recycling'] // name of the layer
  });

  if (!features.length) {
    return;
  }

  var feature = features[0];

  var popup = new mapboxgl.Popup({ 
    closeButton: true,
    closeOnClick: true,
    anchor: 'bottom',
    offset: [0, -15] });
    popup.setLngLat(feature.geometry.coordinates);
    popup.setHTML('<h3>' + feature.properties.title + '</h3><p>' + feature.properties.description + '</p>');
    popup.setLngLat(feature.geometry.coordinates);
    popup.addTo(map);
});

//click compost layer 
map.on('click', function (e) {
  var features = map.queryRenderedFeatures(e.point, {
    layers: ['food waste recycling'] // name of the layer
  });

  if (!features.length) {
    return;
  }

  var feature = features[0];

  var popup = new mapboxgl.Popup({ 
    closeButton: true,
    closeOnClick: true,
    anchor: 'bottom',
    offset: [0, -15] });
    popup.setLngLat(feature.geometry.coordinates);
    popup.setHTML('<h3>' + feature.properties.title + '</h3><p>' + feature.properties.description + '</p>');
    popup.setLngLat(feature.geometry.coordinates);
    popup.addTo(map);
});


//click landfill layer 
map.on('click', function (e) {
  var features = map.queryRenderedFeatures(e.point, {
    layers: ['landfillb'] // name of the layer
  });

  if (!features.length) {
    return;
  }

  var feature = features[0];

  var popup = new mapboxgl.Popup({ 
    closeButton: true,
    closeOnClick: true,
    anchor: 'bottom',
    offset: [0, -15] });
    popup.setLngLat(feature.geometry.coordinates);
    popup.setHTML('<h3>' + feature.properties.title + '</h3><p>' + feature.properties.Description + '</p>');
    popup.setLngLat(feature.geometry.coordinates);
    popup.addTo(map);
});




// Show "About this Map" modal when clicking on button
$('#about').on('click', function () {

	$('#screen').fadeToggle();  // toggles visibility of background screen when clicked (shows if hidden, hides if visible)

	$('.modal').fadeToggle();  // toggles visibility of background screen when clicked (shows if hidden, hides if visible)	                        
	
});

// Close "About this Map" modal when close button in modal is clicked
$('.modal .close-button').on('click', function () {

	$('#screen').fadeToggle();  // toggles visibility of background screen when clicked (shows if hidden, hides if visible)

	$('.modal').fadeToggle();  // toggles visibility of background screen when clicked (shows if hidden, hides if visible)	                        
	
});
