import {Comment} from "./comment";

export const Zoom = 12;

export const Cities = {
  Amsterdam: {
    name: `Amsterdam`,
    lat: 52.38333,
    lng: 4.9,
  },
};

export const HotelsLocations = [
  {
    lat: 52.3909553946508,
    lng: 4.85309666406198,
    zoom: Zoom,
  },
  {
    lat: 52.369553943508,
    lng: 4.85309666406298,
    zoom: Zoom,
  },
  {
    lat: 52.3309553943528,
    lng: 4.929309666406498,
    zoom: Zoom,
  },
  {
    lat: 52.37095753943508,
    lng: 4.769313667415698,
    zoom: Zoom,
  },
  {
    lat: 52.3809553983508,
    lng: 4.859310697415698,
    zoom: Zoom,
  },
  {
    lat: 52.3602553943508,
    lng: 4.959310667915698,
    zoom: Zoom,
  },
  {
    lat: 52.3369553943508,
    lng: 4.919310667485698,
    zoom: Zoom,
  },
  {
    lat: 52.3369553943508,
    lng: 4.739310667485698,
    zoom: Zoom,
  },
  {
    lat: 52.3569553943508,
    lng: 4.839310567485698,
    zoom: Zoom,
  },
];

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

export const TYPE_OF_CITY = [`Paris`, `Cologne`, `Brussels`, `Amsterdam`, `Hamburg`, `Dusseldorf`];

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