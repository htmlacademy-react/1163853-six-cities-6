import {City} from "../temp/city";

// Принимает массив объектов
// Возвращает объект с ключами из городов и значениями из массивов гостиниц
export const getFavoriteHotelsCollection = (hotels) => hotels.reduce((total, hotel) => {
  total[hotel.cityName] = total[hotel.cityName] || [];
  total[hotel.cityName].push(hotel);
  return total;
}, {});

export const getMatchingOffer = (hotels, {params}) => {
  return hotels.find(({id}) => id === params.id);
};

// Принимает два аргумента
// Возвращает объект с добавленными, в качестве полей, аргументами
export const extend = (a, b) => Object.assign({}, a, b);

// Принимает строку - имя выбранного фильма и массив отелей
// Возвращает, если выбран Дюссельдорф, пустой массив, или массив отелей соответствующий названию города
// XXX: Эмуляция отсутствия отелей в Дюссельдорфе. Впоследствии удалить.
export const getFilteredHotels = (activeCityName, hotels) => (activeCityName === City.DUSSELDORF) ? [] : hotels.filter(({cityName}) => cityName === activeCityName);
