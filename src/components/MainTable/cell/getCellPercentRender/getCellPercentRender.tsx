import React from 'react';

import { ColumnShape } from 'react-base-table';
import { Typography, TYPOGRAPHY_VARIANT } from '@ui-kit';

import { TEMPORARY_ANY } from '@models/_project';

import { TableCellContainer } from '../styled';

export const getCellPercentRender = ({
  column,
  rowData,
}: {
  rowData: TEMPORARY_ANY;
  column: ColumnShape;
}) => (
  <TableCellContainer>
    <Typography variant={TYPOGRAPHY_VARIANT.BODY_1_MEDIUM}>
      {+(rowData[column.key] * 100).toFixed(2) + ' %'}
    </Typography>
  </TableCellContainer>
);
