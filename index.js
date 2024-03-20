import L from 'leaflet';
import axios from 'axios';
import { getDistance } from 'geolib';
import queryString from 'query-string';
import debounce from 'lodash.debounce';

class MysticMeadowMaps {
  constructor(divId, options = {}) {
    this.map = L.map(divId).setView([options.latitude || 0, options.longitude || 0], options.zoom || 13);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      maxZoom: 18,
    }).addTo(this.map);
  }

  async searchLocation(query) {
    const params = queryString.stringify({
      q: query,
      format: 'json',
    });

    try {
      const response = await axios.get(`https://nominatim.openstreetmap.org/search?${params}`);
      return response.data;
    } catch (error) {
      console.error('Failed to search location:', error);
      return [];
    }
  }

  calculateDistance(lat1, lon1, lat2, lon2) {
    return getDistance({ latitude: lat1, longitude: lon1 }, { latitude: lat2, longitude: lon2 });
  }

  onMapClick(callback) {
    this.map.on('click', debounce(function(e) {
      callback(e.latlng);
    }, 200));
  }
}

export default MysticMeadowMaps;
