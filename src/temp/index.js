import {
  getID,
  getAvatar,
  getImage,
  getImages,
  getSomeRandomItems,
  getRandomInteger,
  getRandomItem,
  LIST_OF_HOTELS,
  TYPE_OF_HOTELROOM,
  HOST_LIST,
  TYPE_OF_SERVICE} from "./utils";

class Hotel {
  constructor() {
    this.id = getID();
    this.cityName = `Moscow`;
    this.title = getRandomItem(LIST_OF_HOTELS);
    this.images = getImages(this.title);
    this.preview = getImage(this.title);
    this.isPremium = Boolean(getRandomInteger());
    this.isFavorite = Boolean(getRandomInteger());
    this.bedrooms = getRandomInteger(1, 4);
    this.adults = getRandomInteger(1, 3);
    this.price = getRandomInteger(50, 300);
    this.rating = getRandomInteger(0, 5);
    this.description = `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century`;
    this.type = getRandomItem(TYPE_OF_HOTELROOM);
    this.hostName = getRandomItem(HOST_LIST);
    this.hostAvatar = getAvatar(this.hostName);
    this.hostId = getID();
    this.services = getSomeRandomItems(TYPE_OF_SERVICE);
  }
}

export const generateHotels = (count) => {
  const conditions = [];
  for (let i = 0; i < count; i++) {
    conditions.push(new Hotel());
  }

  return conditions;
};
