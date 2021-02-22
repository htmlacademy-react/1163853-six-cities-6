import {Comment} from "./comment";

export const Zoom = 12;

export const City = {
  PARIS: `Paris`,
  COLOGNE: `Cologne`,
  BRUSSELS: `Brussels`,
  AMSTERDAM: `Amsterdam`,
  HAMBURG: `Hamburg`,
  DUSSELDORF: `Dusseldorf`
};

export const getCity = (city) => ({
  [City.PARIS]: {name: City.PARIS, lat: 48.85341, lng: 2.3488},
  [City.COLOGNE]: {name: City.COLOGNE, lat: 50.9381, lng: 6.95694},
  [City.BRUSSELS]: {name: City.BRUSSELS, lat: 50.84671, lng: 4.35162},
  [City.AMSTERDAM]: {name: City.AMSTERDAM, lat: 52.38333, lng: 4.9},
  [City.HAMBURG]: {name: City.HAMBURG, lat: 53.63128, lng: 10.0064},
  [City.DUSSELDORF]: {name: City.DUSSELDORF, lat: 51.278328, lng: 6.76558}
}[city]);

// Получает диапазон чисел
// Возвращает случайное число с плавающей точкой
const getRandomArbitrary = (min, max) => {
  return Math.random() * (max - min) + min;
};

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

export const TYPE_OF_HOTEL = [`Residence Charles Floquet`, `Odeon Hotel`, `Hyatt Paris Madeleine`,
  `Bermonds Locke`, `Leonardo Royal`, `Dolphin House Serviced Apartments`,
  `Waterloo`, `Elizabeth Hotel`, `Moxy NYC Chelsea`, `Millennium Premier New York Times Square`,
  `WeLive Wall Street`, `InterContinental`, `The Standard`, `Hotel Edison Times Square`,
  `Park Plaza Victoria`, `Hotel Library`, `Park Plaza Vondelpark`, `Hotel Mercier`,
  `Linden Hotel`, `Olympic Hotel`, `Riu Plaza`, `Hotel Avenida Gran Via`, `Gran Central Suites`,
  `Eurostars Central`, `Catalonia Gran Via`, `Ganivet`, `Hotel Liabeny`, `Hotel Urban`,
  `Hotel Cortezo`, `Hotel Arthur`, `Lapland Hotels Bulevardi`, `Clarion Hotel`, `Hotel Finn`,
  `Marski by Scandic`, `GLO Hotel Art`, `Hotel Klaus K`, `Hotel F6`, `Hotel Rantapuisto`,
  `Scandic Grand Marina`, `Art Deco Imperial Hotel`, `Top Wenceslas Square`, `Maximilian Hotel`
];

export const NAMES_LIST = [
  `Cole Rogers`, `Cameron Cox`, `Anthony Nelson`, `Adam Bryant`, `Austin Rogers`,
  `Colin Howard`, `Xavier Murphy`, `Jordan Miller`, `Hunter Harris`, `Thomas Alexander`,
  `Anthony Rivera`, `Charles Turner`, `Devin Gray`, `Timothy Jones`, `Matthew Carter`,
  `Elijah Johnson`, `Luke Scott`, `Owen Walker`, `Sean Turner`, `Aaron Butler`,
  `Hayden Griffin`, `Seth Rogers`, `Cameron Evans`, `Alexander Flores`, `David Moore`,
  `Jasmine Barnes`, `Samantha Wood`, `Leah Thomas`, `Melanie Lewis`, `Ashley Edwards`,
  `Isabel Smith`, `Abigail Roberts`, `Jordan Thomas`, `Cole Hall`, `Alex Edwards`
];

export const LIST_OF_TEXTS = [
  `Aliquam id erat dolor. Praesent vestibulum porta eros sit amet feugiat.`,
  `Vestibulum vitae tortor in elit bibendum vehicula ac a felis.`,
  `Curabitur at eros sollicitudin, bibendum nunc nec, dignissim mi.`,
  `Nam vehicula luctus erat non ultricies. Mauris volutpat orci a lacus varius mollis.`,
  `Nunc tempor lectus eu elit mollis placerat. Morbi ut ullamcorper odio.`,
  `Curabitur facilisis dui purus, at efficitur tortor vulputate vitae.`,
  `Phasellus purus dolor, sollicitudin ac congue vitae, cursus vel neque.`,
  `Praesent in congue est. Praesent pulvinar dignissim consequat. Vivamus volutpat congue sem id faucibus.`,
  `Vivamus pulvinar quis nunc eu maximus. Aliquam non arcu sodales, sodales ligula ac, ullamcorper elit.`,
  `Integer at euismod massa. Integer mollis erat leo, sit amet porttitor ipsum dapibus quis.`,
  `Cras sollicitudin felis sit amet diam malesuada pulvinar. Nam condimentum arcu lorem, id dapibus lorem luctus cursus.`,
  `Praesent leo odio, cursus dictum justo non, efficitur tempor lacus.`,
  `tiam mollis, sem et laoreet congue, mauris nibh egestas sem, id tristique mi elit non est.`,
];

export const TYPE_OF_HOTELROOM = [`Standart`, `Suite`, `De Luxe`, `Duplex`, `Studio`, `Residence`, `Apartament`];

export const TYPE_OF_SERVICE = [`Heating`, `Kitchen`, `Fridge`, `Towels`, `Dishwasher`, `Wi-Fi`, `Washing machine`, `Coffee machine`, `Baby seat`, `Cabel TV`];

export const getRandomInteger = (a = 0, b = 1) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));

  return Math.floor(lower + Math.random() * (upper - lower + 1));
};

const shuffle = (originArray) => {
  originArray.forEach((_, index, array) => {
    const randomNumber = getRandomInteger(0, index);
    const valueIndex = array[randomNumber];
    array[randomNumber] = array[index];
    array[index] = valueIndex;
  });

  return originArray;
};

// получаем уникальный номер объекта
export const getID = () => {
  return `xxxxxxxx-xxxx-xxxx-yxxx-xxxxxxxxxxxx`.replace(/[xy]/g, (c) => {
    const r = Math.random() * 16 | 0;
    const v = c === `x` ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
};

// Возвращает случайный элемент перемешанного массива
export const getRandomItem = (mocks) => shuffle(mocks)[0];

export const getSomeRandomItems = (mocks) => shuffle(mocks).slice(0, getRandomInteger(1, mocks.length - 1));

export const getImage = (title) => `img/${title}.webp`;

export const getRandomCity = () => {
  const XXX = getRandomItem(Object.values(City));
  return XXX;
};

const getStaticImages = () => {
  const images = [];
  for (let i = 0; i < 5; i++) {
    images.push(`img/newHotel-${i}.webp`);
  }

  return images;
};

// Возвращает массив из шести картинок, в которых первая - уникальная, остальные пять - статичные, чтобы не множить моки
export const getImages = (title) => [getImage(title), ...getStaticImages()];

export const getAvatar = (title) => `img/${title}.jpg`;

// Получает тип объекта, который нужно сгенерировать и количество
// Возвращает массив объектов
export const generateMocks = (RequiredType, count) => {
  const conditions = [];
  for (let i = 0; i < count; i++) {
    conditions.push(new RequiredType(i));
  }

  return conditions;
};

export const randomDate = (dateX, dateY) => {
  const date1 = new Date(dateX).getTime();
  const date2 = new Date(dateY).getTime();

  if (date1 > date2) {
    return new Date(getRandomInteger(date2, date1)).toString();
  } else {
    return new Date(getRandomInteger(date1, date2)).toString();
  }
};

// Получает количество отелей
// Возвращает массив, состоящий из массива комментариев для каждого отеля
export const generateComments = (count) => {
  const commintsForAllHotels = [];
  for (let i = 0; i < count; i++) {
    const comments = generateMocks(Comment, getRandomInteger(0, 5));
    commintsForAllHotels.push(comments);
  }
  return commintsForAllHotels;
};
