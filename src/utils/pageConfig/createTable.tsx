import React from 'react';
import { useSelector } from 'react-redux';
import { Pen } from '@ui-kit';

import { MainTable, RowAction } from '@components/MainTable';
import { ENTITIES_NAMES, ENTITIES_TYPES } from '@models/Entities';
import { TableLayout } from '@layouts/TableLayout';
import { getEntity } from '@store/entities';

import { CreateTableProps, PageTableProps } from './types';

export const createTable =
  <E extends ENTITIES_NAMES = ENTITIES_NAMES>({
    entity,
    title = '',
    columns,
    actions: actionsFromProps,
  }: CreateTableProps<E>): React.FC<PageTableProps> =>
  ({ onEdit }) => {
    const data = useSelector(getEntity(entity));

    const actions: RowAction[] = actionsFromProps || [
      {
        value: '0',
        Icon: Pen,
        action: ({ id }: ENTITIES_TYPES[E]) => {
          onEdit(id);
        },
      },
    ];

    return (
      <TableLayout title={title}>
        <MainTable columns={columns} data={data} actions={actions} />
      </TableLayout>
    );
  };
