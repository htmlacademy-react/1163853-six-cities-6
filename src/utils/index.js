import {CitiesList} from "./constants";

// Принимает массив отелей
// Возвращает объект с ключами из городов и значениями из массивов гостиниц
export const getFavoriteHotelsCollection = (hotels) => hotels.reduce((total, hotel) => {
  total[hotel.cityName] = total[hotel.cityName] || [];
  total[hotel.cityName].push(hotel);
  return total;
}, {});

// Получает перечень отелей и наименование города в виде строки
// Возвращает полные данные города, извлеченные из первого обнаруженного отеля
export const getPlace = (hotels, selectedCityName) => {
  const {cityName: name, cityLatitude: lat, cityLongitude: lng, cityZoom: zoom} = hotels.find((hotel) => hotel.cityName === selectedCityName);
  return {name, lat, lng, zoom};
};

export const getMatchingOffer = (hotels, {params}) => hotels.find(({id}) => id === params.id);

// Принимает два аргумента
// Возвращает объект с добавленными, в качестве полей, аргументами
export const extend = (expandable, ...payload) => Object.assign({}, expandable, ...payload);

// Принимает строку - имя выбранного фильма и массив отелей
// Возвращает, если выбран Дюссельдорф, пустой массив, или массив отелей соответствующий названию города
// XXX: Эмуляция отсутствия отелей в Дюссельдорфе. Впоследствии удалить.
export const getFilteredHotels = (activeCityName, hotels) => (activeCityName === CitiesList[CitiesList.length - 1]) ? [] : hotels.filter(({cityName}) => cityName === activeCityName);
