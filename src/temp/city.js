import {getRandomItem} from "./service";

export const Zoom = 12;

export const City = {
  PARIS: `Paris`,
  COLOGNE: `Cologne`,
  BRUSSELS: `Brussels`,
  AMSTERDAM: `Amsterdam`,
  HAMBURG: `Hamburg`,
  DUSSELDORF: `Dusseldorf`
};

// Получает объект с полями - наименованиями городов
// Возвращает строку с наименование города
export const getRandomCity = () => getRandomItem(Object.values(City));

// Получает диапазон чисел
// Возвращает случайное число с плавающей точкой
const getRandomArbitrary = (min, max) => Math.random() * (max - min) + min;

export const getCity = (city) => ({
  [City.PARIS]: {name: City.PARIS, lat: 48.85341, lng: 2.3488},
  [City.COLOGNE]: {name: City.COLOGNE, lat: 50.9381, lng: 6.95694},
  [City.BRUSSELS]: {name: City.BRUSSELS, lat: 50.84671, lng: 4.35162},
  [City.AMSTERDAM]: {name: City.AMSTERDAM, lat: 52.38333, lng: 4.9},
  [City.HAMBURG]: {name: City.HAMBURG, lat: 53.5200, lng: 10.0},
  [City.DUSSELDORF]: {name: City.DUSSELDORF, lat: 51.278328, lng: 6.76558}
}[city]);

// Получает название города
// Возвращает случайные широту и долготу отеля для указанного города
export const getRandomHotelLocation = (city) => {
  const {lat, lng} = getCity(city);
  const latMin = lat - 0.06;
  const latMax = lat + 0.06;
  const latitude = getRandomArbitrary(latMin, latMax);
  const lngMin = lng - 0.08;
  const lngMax = lng + 0.08;
  const longitude = getRandomArbitrary(lngMin, lngMax);
  return {latitude, longitude};
};
