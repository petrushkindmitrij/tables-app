import React from 'react';
import { SIZE_VARIANT } from '@ui-kit';
import { RowAction } from '@components/MainTable/types';
import { TableCellActionContainer, StyledButton } from '../styled';
import { TEMPORARY_ANY } from '@models/_project';

export const getCellActionRenderer =
  // eslint-disable-next-line
  (actions: RowAction[]) => (props: { rowData: TEMPORARY_ANY }) => {
    return (
      <TableCellActionContainer>
        {actions.map(action => (
          <StyledButton
            key={action.value}
            icon={action.Icon}
            size={SIZE_VARIANT.SMALL}
            width={40}
            onClick={() => action.action(props.rowData)}
          />
        ))}
      </TableCellActionContainer>
    );
  };
