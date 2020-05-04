import {buildMarker} from './marker.js'

const mapboxgl = require("mapbox-gl");

mapboxgl.accessToken = 'pk.eyJ1IjoidGFhZWVlIiwiYSI6ImNrOXNvbjJkdjE0MzQzbXA1aWpxdnlzb2sifQ.itnwFmkju8QE0QzIElW6Tg';

// const map = new mapboxgl.Map({
//   container: "map",
//   center: [-74.009, 40.705], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
//   zoom: 12, // starting zoom
//   style: "mapbox://styles/mapbox/streets-v10" // mapbox has lots of different map styles available.
// });

// const markerForFullStackNYChild = document.createElement('div');
// const markerForFullStackChicagoChild = document.createElement('div');

// markerForFullStackNYChild.style.width = "32px";
// markerForFullStackNYChild.style.height = "39px";
// markerForFullStackNYChild.style.backgroundImage = "url(http://i.imgur.com/WbMOfMl.png)";

// markerForFullStackChicagoChild.style.width = "32px";
// markerForFullStackChicagoChild.style.height = "39px";
// markerForFullStackChicagoChild.style.backgroundImage = "url(http://i.imgur.com/WbMOfMl.png)";

// const markerForFullStackNY = new mapboxgl.Marker(markerForFullStackNYChild).setLngLat([-74.009151, 40.705086]).addTo(map);
// const markerForFullStackChicago = new mapboxgl.Marker(markerForFullStackChicagoChild).setLngLat([-87.641, 41.895]).addTo(map);

// const mapDiv = document.getElementById('map');
// mapDiv.appendChild(markerForFullStackNY);
// mapDiv.appendChild(markerForFullStackChicago);

buildMarker('Activity', [-74.009151, 40.705086]);
