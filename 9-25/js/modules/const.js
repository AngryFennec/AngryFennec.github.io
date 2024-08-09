export const MIN_PHOTOS_COUNT = 5;
// eslint-disable-next-line no-useless-escape
export const PHONE_REGEXP = new RegExp(/^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/);
export const EMAIL_REGEXP = new RegExp(/^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i);
export const NAME_REGEXP = new RegExp(/^[a-zA-Zа-яА-ЯёЁ'][a-zA-Z-а-яА-ЯёЁ' ]+[a-zA-Zа-яА-ЯёЁ']?$/);

export const INPUTS_REGEXP = {
  name: NAME_REGEXP,
  email: EMAIL_REGEXP,
  phone: PHONE_REGEXP
};