import React, { createContext } from 'react';
import { Flex } from '../Basics';

export const RowContext = createContext<{
  space?: string;
  cols: number;
}>({
  space: undefined,
  cols: 4,
});

export interface RowProps {
  /** space between cells them space value or string, default value 3 */
  space?: string;
  /** columns count in row */
  cols: number;
  alignItems?: 'center' | 'flex-start' | 'flex-end' | 'stretch';
  children?: React.ReactNode;
}

export interface ICellProps {
  isFirst?: boolean;
  isLast?: boolean;
}

export const Row: React.FC<RowProps> = ({
  children,
  space = '12px',
  cols,
  ...props
}) => {
  const cellList = React.Children.toArray(children);
  if (cellList.length === 0) return null;

  const getCells = () =>
    cellList.map((cell, index) => {
      if (!React.isValidElement(cell)) {
        return null;
      }
      const cellProps: ICellProps = {
        isFirst: index === 0,
        isLast: index === cellList.length - 1,
        ...cell.props,
      };
      return React.cloneElement(cell, cellProps);
    });

  return (
    <Flex row {...props}>
      <RowContext.Provider value={{ space, cols }}>
        {getCells()}
      </RowContext.Provider>
    </Flex>
  );
};
