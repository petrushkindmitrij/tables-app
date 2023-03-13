import React from 'react';
import { ColumnShape } from 'react-base-table';
import { Typography, TYPOGRAPHY_VARIANT } from '@ui-kit';
import { TableFilterType } from '@components/MainTable/types';
import { TableCellContainer } from '../styled';
import { TEMPORARY_ANY } from '@models/_project';
import { formatDate } from '@utils/formatDate';

export const getCellRenderer = ({
  column,
  rowData,
}: {
  rowData: TEMPORARY_ANY;
  column: ColumnShape;
}) => {
  let content;
  switch (column.filterType) {
    case TableFilterType.BOOLEAN:
      if (rowData[column.key]) {
        content = 'Yes';
      } else {
        content = 'No';
      }
      break;
    case TableFilterType.DATE:
      content = formatDate(rowData[column.key] || '');
      break;
    default:
      content = rowData[column.key];
      break;
  }
  return (
    <TableCellContainer>
      <Typography variant={TYPOGRAPHY_VARIANT.BODY_1_MEDIUM}>
        {content}
      </Typography>
    </TableCellContainer>
  );
};
