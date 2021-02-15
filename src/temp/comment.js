import {
  LIST_OF_TEXTS,
  getRandomItem,
  randomDate,
  getRandomInteger,
  NAMES_LIST} from "./service";

export class Comment {
  constructor(count) {
    this.id = String(count);
    this.comment = getRandomItem(LIST_OF_TEXTS);
    this.date = randomDate(`02-13-2013`, `01-01-2021`);
    this.rating = getRandomInteger(0, 5);
    this.visitorId = String(count);
    this.visitorAvatar = `img/avatar-max.jpg`;
    this.visitorIsPro = Boolean(getRandomInteger());
    this.visitorName = getRandomItem(NAMES_LIST);
  }
}
