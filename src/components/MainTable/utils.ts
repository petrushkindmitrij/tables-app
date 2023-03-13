import { TEMPORARY_ANY } from '@models/_project';
import { TableFilterType } from './types';

export const filterData = (
  data: TEMPORARY_ANY[],
  filters: { key: string; value: string; type: string }[]
) =>
  data.filter(item => {
    let filterSuccess = true;
    filters.forEach(f => {
      if (f.value !== undefined && filterSuccess) {
        if (f.type === TableFilterType.TEXT) {
          filterSuccess = isStringFilterSuccess(item[f.key], f.value);
        }
        if (f.type === TableFilterType.SELECT) {
          if (Array.isArray(item[f.key])) {
            filterSuccess = item[f.key].includes(f.value);
          } else {
            filterSuccess = item[f.key] === f.value;
          }
        }
        if (f.type === TableFilterType.BOOLEAN) {
          filterSuccess = item[f.key] === f.value;
        }
        if (f.type === TableFilterType.DATE) {
          filterSuccess = item[f.key]
            ? item[f.key].split('-').reverse().join('.').includes(f.value)
            : false;
        }
      }
    });
    return filterSuccess;
  });

const isStringFilterSuccess = (value: string, filterValue: string) => {
  const stringValue = (value || '').toString();
  const ruledFilterValue = filterValue.replace(/\*/g, '.*');
  const filter = new RegExp(ruledFilterValue, 'igm');
  return stringValue.length > 0 && filter.test(stringValue);
};
