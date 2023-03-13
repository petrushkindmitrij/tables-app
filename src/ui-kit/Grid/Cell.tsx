import React, { useContext } from 'react';
import { Box } from '../Basics';
import { RowContext } from './Row';

export enum Align {
  CENTER = 'center',
  BOTTOM = 'flex-end',
  TOP = 'flex-start',
  BASELINE = 'baseline',
}

export interface CellProps {
  /** columns count for this cell, value 0 - 1 */
  col?: number;
  /** align prop cells in row, default value 'center' */
  align?: Align;
  alignSelf?:
    | 'center'
    | 'self-start'
    | 'self-end'
    | 'stretch'
    | 'space-between'
    | 'space-around'
    | 'baseline';
  textAlign?: 'center' | 'left' | 'right';
  isLast?: boolean;
  isFirst?: boolean;
  children?: React.ReactNode;
}

export const Cell: React.FC<CellProps> = ({
  children,
  col = 1,
  isLast,
  isFirst,
  ...props
}) => {
  const { space, cols } = useContext(RowContext);
  const numberOfSpace = Number((space || '').split('px')[0]);

  if (cols < col) {
    console.error(
      `${Cell.name}: cols in row must be greater than col count in cell`
    );
  }

  return (
    <Box
      col={col / cols}
      pl={isFirst ? '0px' : `${numberOfSpace / cols}px`}
      pr={isLast ? '0px' : `${numberOfSpace - numberOfSpace / cols}px`}
      {...props}
    >
      {children}
    </Box>
  );
};
