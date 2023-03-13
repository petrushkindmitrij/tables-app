import { trim } from 'lodash';

export const formatDate = (
  t: Date | string,
  a: Intl.DateTimeFormatOptions[] = [
    { day: '2-digit' },
    { month: '2-digit' },
    { year: 'numeric' },
  ],
  s = '.'
): string => {
  if (trim(t.toString()) === '') {
    return '';
  }
  const date = new Date(t);
  function format(m: Intl.DateTimeFormatOptions) {
    const f = new Intl.DateTimeFormat('en', m);
    return f.format(date);
  }
  return a.map(format).join(s);
};

export const formatDateForBackend = (date: string) => {
  const normalizedDate = date.toString().split('.').reverse().join('-');
  return `${normalizedDate} ${new Date(normalizedDate).toLocaleTimeString()}`;
};
