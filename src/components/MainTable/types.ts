import React from 'react';
import { BaseTableProps, ColumnShape } from 'react-base-table';
import { TEMPORARY_ANY } from '@models/_project';
import {} from '@ui-kit';
import { BaseIconProps } from '@ui-kit/Icon/types';
import { StyledComponent } from '@emotion/styled';
import { Theme } from '@emotion/react';

export enum TableFilterType {
  TEXT = 'TEXT',
  SELECT = 'SELECT',
  BOOLEAN = 'BOOLEAN',
  DATE = 'DATE',
}

export interface ColumnData<K extends React.Key = React.Key, T = unknown>
  extends Partial<ColumnShape<T>> {
  title?: string;
  key: K;
  filterType?: TableFilterType;
}

export interface TableColumn<K extends React.Key = React.Key>
  extends Partial<ColumnShape> {
  title?: string;
  key: K;
  id: K;
  dataKey: string;
  filterType?: TableFilterType;
  filterValues?: {
    value?: string | number | boolean;
    label: string;
  }[];
  width: number;
  flexGrow?: number;
  headerRenderer?: React.ReactNode;
  cellRenderer?: React.ReactNode;
  withResetButton?: boolean;
}

export interface RowAction {
  Icon: StyledComponent<BaseIconProps & { theme?: Theme | undefined }>;
  value: string;
  action: (rowData: TEMPORARY_ANY) => void;
}

export interface TableProps extends Omit<BaseTableProps, 'width'> {
  actions?: RowAction[];
}
