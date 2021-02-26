import {
  LIST_OF_TEXTS,
  getRandomItem,
  randomDate,
  getRandomInteger,
  NAMES_LIST,
  getAvatar,
  generateComments,
  amountOfTempData} from "./service";

class Comment {
  constructor(count) {
    this.id = String(count);
    this.quote = getRandomItem(LIST_OF_TEXTS);
    this.date = randomDate(`02-13-2013`, `01-01-2021`);
    this.rating = getRandomInteger(0, 5);
    this.visitorId = String(count);
    this.visitorName = getRandomItem(NAMES_LIST);
    this.visitorAvatar = getAvatar(this.visitorName);
    this.visitorIsPro = Boolean(getRandomInteger());
  }
}

const mockComments = generateComments(Comment, amountOfTempData);

export {mockComments};
