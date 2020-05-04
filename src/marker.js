const mapboxgl = require("mapbox-gl");
mapboxgl.accessToken = 'pk.eyJ1IjoidGFhZWVlIiwiYSI6ImNrOXNvbjJkdjE0MzQzbXA1aWpxdnlzb2sifQ.itnwFmkju8QE0QzIElW6Tg';

const map = new mapboxgl.Map({
  container: "map",
  center: [-74.009, 40.705], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
  zoom: 12, // starting zoom
  style: "mapbox://styles/mapbox/streets-v10" // mapbox has lots of different map styles available.
});

export function buildMarker(type, coordinates) {
  const divElement = document.createElement('div');

  divElement.style.width = "32px";
  divElement.style.height = "39px";

  if (type === 'Activity') {
    divElement.style.backgroundImage = "url(http://i.imgur.com/WbMOfMl.png)";
  } else if (type === 'Hotel') {
    divElement.style.backgroundImage = "url(http://i.imgur.com/D9574Cu.png)";
  } else {
    divElement.style.backgroundImage = "url(http://i.imgur.com/cqR6pUI.png)";
  }

  const marker = new mapboxgl.Marker(divElement).setLngLat(coordinates).addTo(map);

  return marker;
}
