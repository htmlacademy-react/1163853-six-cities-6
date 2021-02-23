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
