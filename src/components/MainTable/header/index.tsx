import React from 'react';
import BaseTable, { ColumnShape } from 'react-base-table';
import { Typography, TYPOGRAPHY_VARIANT } from '@ui-kit';

import { TextFilter } from './TextFilter/TextFilter';
import { ResetButton } from './ResetButton';

import {
  TableHeaderContainer,
  FilterContainer,
  FilterControl,
  TableHeaderActionContainer,
} from './styled';
import { TableFilterType } from '@components/MainTable/types';
import { DateFilter } from '@components/MainTable/header/DateFilter/DateFilter';

export const getHeaderRenderer = (props: {
  column: ColumnShape;
  container: BaseTable;
}) => (
  <TableHeaderContainer>
    <Typography variant={TYPOGRAPHY_VARIANT.BODY_1}>
      {props.column.title}
    </Typography>
    {props.column.filterType && (
      <FilterContainer>
        <FilterControl>{getFilterByType(props)}</FilterControl>
        {props.column.withResetButton && (
          <ResetButton onClick={props.container.props.onResetFilter} />
        )}
      </FilterContainer>
    )}
  </TableHeaderContainer>
);

export const getHeaderActionRenderer = (props: {
  column: ColumnShape;
  container: BaseTable;
}) => (
  <TableHeaderActionContainer>
    <ResetButton onClick={props.container.props.onResetFilter} />
  </TableHeaderActionContainer>
);

const getFilterByType = (props: { column: ColumnShape }) => {
  const filterType: TableFilterType = props.column.filterType;

  switch (filterType) {
    case TableFilterType.TEXT:
      return <TextFilter {...props} />;
    case TableFilterType.DATE:
      return <DateFilter {...props} />;
    default:
      return null;
  }
};
