mapboxgl.accessToken = 'pk.eyJ1Ijoic2hhd25hc3VtbWVycyIsImEiOiJjbHBpZjljdXgwZng4MmlxcWN5ZTgwcDc4In0.60FFj_jD4Pm6morCXhMZbw';

  var map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/satellite-streets-v12',
      center: [-71.104081, 42.365554],
      zoom: 14
      
  });
 
var marker = new mapboxgl.Marker()
    .setLngLat([-71.0721753, 42.3512241])
    .addTo(map);
    

const busStops = [
    [-71.092761, 42.357575],
    [-71.093729, 42.359244], 
    [-71.094915, 42.360175],
    [-71.095800, 42.360698],
    [-71.099558, 42.362953],
    [-71.103476, 42.365248],
    [-71.106067, 42.366806],
    [-71.108717, 42.368355],
    [-71.110799, 42.369192],
    [-71.113095, 42.370218],
    [-71.115476, 42.372085],
    [-71.117585, 42.373016],
    [-71.118625, 42.374863]
];

let counter = 0;
function move(){
  setTimeout(()=>{
    if (counter >= busStops.length) return;
    marker.setLngLat(busStops[counter]);
    counter++;
    move();
  },1000); 
}

const layerList = document.getElementById('menu');
const inputs = layerList.getElementsByTagName('input');

 
for (const input of inputs) {
input.onclick = (layer) => {
const layerId = layer.target.id;
map.setStyle('mapbox://styles/mapbox/' + layerId);
};
}

map.on('load', () => {
  // Load an image from an external URL.
  map.loadImage(
  'https://docs.mapbox.com/mapbox-gl-js/assets/cat.png',
  (error, image) => {
  if (error) throw error;
   
   
  // Add a data source containing one point feature.
  map.addSource('point', {
  'type': 'geojson',
  'data': {
  'type': 'FeatureCollection',
  'features': [
  {
  'type': 'Feature',
  'geometry': {
  'type': 'Point',
  'coordinates': [-71.0721753, 42.3512241],
  
  }
  }
  ]
  }
  });
   
  // Add a layer to use the image to represent the data.
  map.addLayer({
  'id': 'points',
  'type': 'symbol',
  'source': 'point', // reference the data source
  'layout': {
  'icon-image': 'cat', // reference the image
  'icon-size': 0.25
  }
  });
  }
  );
  });
