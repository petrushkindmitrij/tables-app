import { ColumnData, TableColumn, TableFilterType, RowAction } from './types';
import { getHeaderActionRenderer, getHeaderRenderer } from './header';
import { getCellActionRenderer, getCellRenderer } from './cell';
import { TEMPORARY_ANY } from '@models/_project';
import { flatten } from 'lodash';

const defaultColumn = {
  flexGrow: 1,
  width: 0,
};

export const constructTableColumns = (
  columnData: ColumnData[],
  data: TEMPORARY_ANY[],
  actions?: RowAction[]
): TableColumn[] => {
  const optionsByKey = (col: {
    key: React.Key;
    filterType?: TableFilterType;
  }) => {
    if (col.filterType === TableFilterType.SELECT) {
      const newData = [{ value: undefined, label: '' }];
      const uniqueValuesArray = Array.from(
        new Set(flatten(data.map(item => item[col.key])))
      );
      return newData.concat(
        uniqueValuesArray.map(item => ({
          value: item,
          label: item,
        }))
      );
    } else {
      return [
        { value: undefined, label: '' },
        { value: true, label: 'Yes' },
        { value: false, label: 'No' },
      ];
    }
  };
  const columns: TableColumn[] = columnData.map((col, index) => ({
    title: col.title,
    key: col.key,
    id: col.key,
    dataKey: col.key as string,
    filterType: col.filterType,
    filterValues:
      col.filterType &&
      [TableFilterType.SELECT, TableFilterType.BOOLEAN].includes(col.filterType)
        ? optionsByKey(col)
        : undefined,
    width: col.width || defaultColumn.width,
    flexGrow: col.flexGrow || defaultColumn.flexGrow || undefined,
    headerRenderer: col.headerRenderer || getHeaderRenderer,
    cellRenderer: col.cellRenderer || getCellRenderer,
    withResetButton:
      !actions &&
      columnData.length - 1 === index &&
      columnData.some(c => !!c.filterType),
  }));
  if (actions) {
    const key = 'actions';
    columns.push({
      title: '',
      key: key,
      id: key,
      dataKey: key,
      width: 96,
      headerRenderer: getHeaderActionRenderer,
      cellRenderer: getCellActionRenderer(actions),
      withResetButton: true,
    });
  }
  return columns;
};
