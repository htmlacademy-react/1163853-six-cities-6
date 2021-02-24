import React, {useEffect, useRef} from 'react';
import PropTypes from 'prop-types';
import leaflet from 'leaflet';
import {cityStructure, hotelStructure} from '../../utils/types';
import {MarkerType, NOT_INITIALIZED} from '../../utils/constants';
import {Zoom} from '../../temp/city';

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

    const markers = [];
    let prevPinID = NOT_INITIALIZED;

    const pin = leaflet.icon(MarkerType.pin);
    const pinActive = leaflet.icon(MarkerType.pinActive);

    hotels.forEach(({id, latitude, longitude, title}) => {
      markers[id] = leaflet.marker({lat: latitude, lng: longitude}, {icon: pin})
        .addTo(mapRef.current)
        .bindPopup(title);

      markers[id].on(`click`, (evt) => {
        if (prevPinID !== NOT_INITIALIZED) {
          markers[prevPinID].setIcon(pin);
        }

        prevPinID = id;
        evt.target.setIcon(pinActive);
      });
    });

    return () => {
      mapRef.current.remove();
    };
  }, [lat, lng]);

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
// leaflet.marker.addTo - устанавливает маркер и привязывает к карте
// .bindPopup - в него можно передать html разметку как строку и добавить .openPopup для открытия
// для того, чтобы вывести координаты клика, нужно описать функцию mapRef.current.on, затем вытянуть evt.latlng.lat и evt.latlng.lng
