import { Input, SIZE_VARIANT } from '@ui-kit';
import React from 'react';
import { TEMPORARY_ANY } from '@models/_project';

export const DateFilter = (props: TEMPORARY_ANY) => {
  const handleChangeFilter = (value: string) => {
    props.container.props.onChangeFilter(
      props.column.key,
      value,
      props.column.filterType
    );
  };
  const currentFilter = props.container.props.filters.find(
    (f: { key: string }) => f.key === props.column.key
  );
  return (
    <Input
      onClick={event => event.stopPropagation()}
      size={SIZE_VARIANT.SMALL}
      value={currentFilter?.value || ''}
      onChange={handleChangeFilter}
    />
  );
};
