import React, {useEffect, useRef} from 'react';
import PropTypes from 'prop-types';
import leaflet from 'leaflet';
import {Zoom} from '../../temp/service';
import {cityStructure, hotelStructure} from '../../utils/types';

import "leaflet/dist/leaflet.css";

const Map = ({mapType, city, hotels}) => {
  const {lat, lng} = city;

  const mapRef = useRef();

  useEffect(() => {
    mapRef.current = leaflet.map(`map`, {
      center: {lat, lng},
      zoom: Zoom,
      zoomControl: false,
      marker: true,
    });

    mapRef.current.setView({lat, lng}, Zoom);

    leaflet.tileLayer(
        `https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`,
        {
          attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
        })
        .addTo(mapRef.current);

    hotels.forEach((point) => {
      const customIcon = leaflet.icon({
        iconUrl: `./img/pin.svg`,
        iconSize: [25, 35]
      });

      leaflet.marker({
        lat: point.latitude,
        lng: point.longitude,
      },
      {
        icon: customIcon
      })
      .addTo(mapRef.current)
      .bindPopup(point.title);

      return () => {
        mapRef.current.remove();
      };
    });
  }, []);

  return (
    <section className={`${mapType} map`} id="map" ref={mapRef} />
  );
};

Map.propTypes = {
  mapType: PropTypes.string.isRequired,
  city: PropTypes.shape(cityStructure).isRequired,
  hotels: PropTypes.arrayOf(hotelStructure).isRequired,
};

export default Map;

// city - город, на котором карта изначально сфокусирована
// leaflet.marker - устанавливает маркер
