# Mystic Meadow Maps

A minimalist library for integrating maps into web projects, making it easier to embed interactive maps and perform location searches with just a few lines of code.

## Installation

```bash
npm install mystic-meadow-maps
```

## Usage

First, make sure you include a div element with an id in your HTML to render the map:

```html
<div id="myMap" style="height: 400px;"></div>
```

Then, you can initialize the map and use the library's functionalities:

```javascript
import MysticMeadowMaps from 'mystic-meadow-maps';

const map = new MysticMeadowMaps('myMap', {
latitude: 40.7128,
longitude: -74.0060,
zoom: 13
});

// Search for a location
map.searchLocation('Central Park, New York').then(data => console.log(data));

// Calculate distance between two points
const distance = map.calculateDistance(40.7128, -74.0060, 40.785091, -73.968285);
console.log(`Distance: \${distance} meters`);

// Handle map click
map.onMapClick(latlng => {
console.log(`You clicked the map at latitude: \${latlng.lat} and longitude: \${latlng.lng}`);
});
```

## License

This project is licensed under the MIT License.
