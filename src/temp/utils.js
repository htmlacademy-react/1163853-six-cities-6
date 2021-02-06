export const LIST_OF_HOTELS = [`Residence Charles Floquet`, `Odeon Hotel`, `Hyatt Paris Madeleine`,
  `Bermonds Locke`, `Leonardo Royal`, `Dolphin House Serviced Apartments`,
  `Waterloo`, `Elizabeth Hotel`, `Moxy NYC Chelsea`, `Millennium Premier New York Times Square`,
  `WeLive Wall Street`, `InterContinental`, `The Standard`, `Hotel Edison Times Square`,
  `Park Plaza Victoria`, `Hotel Library`, `Park Plaza Vondelpark`, `Hotel Mercier`,
  `Linden Hotel`, `Olympic Hotel`, `Riu Plaza`, `Hotel Avenida Gran Via`, `Gran Central Suites`,
  `Eurostars Central`, `Catalonia Gran Via`, `Ganivet`, `Hotel Liabeny`, `Hotel Urban`,
  `Hotel Cortezo`, `Hotel Arthur`, `Lapland Hotels Bulevardi`, `Clarion Hotel`, `Hotel Finn`,
  `Marski by Scandic`, `GLO Hotel Art`, `Hotel Klaus K`, `Hotel F6`, `Hotel Rantapuisto`,
  `Scandic Grand Marina`, `Art Deco Imperial Hotel`, `Top Wenceslas Square`
];

export const HOST_LIST = [
  `Cole Rogers`, `Cameron Cox`, `Anthony Nelson`, `Adam Bryant`, `Austin Rogers`,
  `Colin Howard`, `Xavier Murphy`, `Jordan Miller`, `Hunter Harris`, `Thomas Alexander`,
  `Anthony Rivera`, `Charles Turner`, `Devin Gray`, `Timothy Jones`, `Matthew Carter`,
  `Elijah Johnson`, `Luke Scott`, `Owen Walker`, `Sean Turner`, `Aaron Butler`,
  `Hayden Griffin`, `Seth Rogers`, `Cameron Evans`, `Alexander Flores`, `David Moore`,
  `Jasmine Barnes`, `Samantha Wood`, `Leah Thomas`, `Melanie Lewis`, `Ashley Edwards`,
  `Isabel Smith`, `Abigail Roberts`, `Jordan Thomas`, `Cole Hall`, `Alex Edwards`
];

export const TYPE_OF_HOTELROOM = [`Standart`, `Suite`, `De Luxe`, `Duplex`, `Studio`, `Residence`, `Apartament`];

export const TYPE_OF_SERVICE = [`Heating`, `Kitchen`, `Fridge`, `Towels`, `Dishwasher`, `Wi-Fi`, `Washing machine`, `Coffee machine`, `Baby seat`, `Cabel TV`];

export const getID = () => {
  return `xxxxxxxx-xxxx-xxxx-yxxx-xxxxxxxxxxxx`.replace(/[xy]/g, (c) => {
    const r = Math.random() * 16 | 0;
    const v = c === `x` ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
};

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

// Возвращает случайный элемент перемешанного массива
export const getRandomItem = (mocks) => shuffle(mocks)[0];

export const getSomeRandomItems = (mocks) => shuffle(mocks).slice(0, getRandomInteger(1, mocks.length - 1));

export const getImage = (title) => `img/${title}.webp`;

export const getAvatar = (title) => `img/${title}.jpg`;
