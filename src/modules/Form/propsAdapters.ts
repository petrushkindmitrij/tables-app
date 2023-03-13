import { TEMPORARY_ANY } from '@models/_project';
import { PropsAdapter } from './types';

export const textSuggestionsAdapter: PropsAdapter = (
  { onChange, ...field },
  selectValue = 'id'
) => ({
  onSelect: (data: Record<string, TEMPORARY_ANY>) => {
    onChange(data?.item[selectValue]);
  },
  ...field,
});

export const selectAdapter: PropsAdapter = field => ({
  ...field,
  selected: field.value,
});

export const chechboxAdapter: PropsAdapter = field => ({
  ...field,
  checked: field.value,
});
