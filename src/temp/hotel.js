import {
  getID,
  getAvatar,
  getImage,
  getImages,
  getSomeRandomItems,
  getRandomInteger,
  getRandomItem,
  TYPE_OF_HOTEL,
  TYPE_OF_HOTELROOM,
  NAMES_LIST,
  TYPE_OF_SERVICE,
  generateMocks,
  amountOfTempData} from "./service";

import {getCity, getRandomCity, getRandomHotelLocation, Zoom} from "./city";

class Hotel {
  constructor(count) {
    this.id = String(count);
    this.cityName = getRandomCity();
    this.cityLatitude = getCity(this.cityName).lat;
    this.cityLongitude = getCity(this.cityName).lng;
    this.cityZoom = Zoom;
    this.title = getRandomItem(TYPE_OF_HOTEL);
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
    this.hostName = getRandomItem(NAMES_LIST);
    this.hostAvatar = getAvatar(this.hostName);
    this.hostId = getID();
    this.services = getSomeRandomItems(TYPE_OF_SERVICE);
    this.hostIsPro = Boolean(getRandomInteger());
    this.latitude = getRandomHotelLocation(this.cityName).latitude;
    this.longitude = getRandomHotelLocation(this.cityName).longitude;
    this.zoom = Zoom;
  }
}

const mockHotels = generateMocks(Hotel, amountOfTempData);

export {mockHotels};
