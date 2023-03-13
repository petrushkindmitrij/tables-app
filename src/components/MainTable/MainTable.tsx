import React, { FC, useState } from 'react';
import BaseTable, { AutoResizer } from 'react-base-table';

import { TEMPORARY_ANY } from '@models/_project';

import { filterData } from './utils';
import { constructTableColumns } from './options';
import { TableProps } from './types';
import { Container } from './styled';

import 'react-base-table/styles.css';

export const MainTable: FC<TableProps> = props => {
  const { data, columns, actions, ...tableProps } = props;
  const [filters, setFilters] = useState<
    { key: string; value: string; type: string }[]
  >([]);
  const columnData = constructTableColumns(columns, data, actions);

  const handleChangeFilters = (key: string, value: string, type: string) => {
    const filter = filters.find(f => f.key === key) || {
      key,
      value,
      type,
    };
    const newFilters = filters
      .filter(f => f.key !== key)
      .concat({ ...filter, value });
    setFilters(newFilters);
  };
  const resetFilters = () => setFilters([]);

  const filteredData = filterData(data, filters);

  return (
    <Container>
      <AutoResizer>
        {({ width, height }) => (
          <BaseTable
            headerHeight={
              columns.some((c: TEMPORARY_ANY) => !!c.filterType) ? 105 : 0
            }
            width={width}
            height={height}
            fixed={false}
            rowHeight={97}
            filters={filters}
            onChangeFilter={handleChangeFilters}
            onResetFilter={resetFilters}
            data={filteredData}
            columns={columnData}
            {...tableProps}
          />
        )}
      </AutoResizer>
    </Container>
  );
};
