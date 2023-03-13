import { EditModalWindowProps } from '@components/EditModalWindow/types';
import { ColumnData, TableProps } from '@components/MainTable';
import { ENTITIES_NAMES, ENTITIES_TYPES } from '@models/Entities';
import { NavigationLayoutProps } from '@models/Navigation';
import React from 'react';

export interface PageTableProps {
  onEdit: (key: number) => void;
}

export interface CreateComponentProps<E extends ENTITIES_NAMES = ENTITIES_NAMES>
  extends Pick<EditModalWindowProps<E>, 'fields' | 'entity'> {
  table: React.ComponentType<PageTableProps>;
  layout?: React.ComponentType<NavigationLayoutProps>;
  modalWindow?: (args: EditModalWindowProps<E>) => JSX.Element;
}

export interface CreateTableProps<
  E extends ENTITIES_NAMES,
  K extends Exclude<keyof ENTITIES_TYPES[E], symbol> = Exclude<
    keyof ENTITIES_TYPES[E],
    symbol
  >
> extends Pick<TableProps, 'actions'> {
  entity: E;
  title: string;
  columns: ColumnData<K>[];
}
