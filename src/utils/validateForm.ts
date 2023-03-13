// todo: переписать функции валидации, чтобы они возвращали названия полей rules
// ("required", "min", "maxLength" и тп)

export const createValidateRule = <TValue>(value: TValue, message: string) => ({
  value,
  message,
});

export const requiredRule = createValidateRule(
  true,
  'Данное поле необходимо заполнить'
);

export const maxLength = (val: number) =>
  createValidateRule(val, `Макс кол-во символов: ${val}`);

export const minValue = (val: number) =>
  createValidateRule(val, `Значение не должно быть меньше: ${val}`);

export const maxValue = (val: number) =>
  createValidateRule(val, `Значение не должно быть больше: ${val}`);

export const datePattern = createValidateRule(
  /\d\d\.\d\d\.\d\d\d\d/,
  `Некорректно заполнена дата`
);

// в bigint не может быть больше 2 знаков после запятой
export const decimalBigIntPattern = createValidateRule(
  // eslint-disable-next-line no-useless-escape
  /^\-?\d+(\.\d{1,2})?$/,
  `Некорректное значение (макс. 2 знака после запятой)`
);

export const decimalNumberPattern = createValidateRule(
  // eslint-disable-next-line no-useless-escape
  /^\-?((\d+\.\d+)|\d+)$/,
  `Некорректно заполнено значение `
);
