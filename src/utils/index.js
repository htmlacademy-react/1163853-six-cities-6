// Принимает массив обектов, фильтрует по свойству isFavorite
// Возвращает объект с ключами из городов и значениями из массивов гостиниц
export const getFavoriteHotelsCollection = (hotels) => hotels.reduce((total, hotel) => {
  total[hotel.city] = total[hotel.city] || [];
  total[hotel.city].push(hotel);
  return total;
}, {});
