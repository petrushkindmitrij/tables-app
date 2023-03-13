import React, { Children, FC, isValidElement } from 'react';
import { Box } from '../Basics';

export type IRowProps = Partial<{
  space: number | string;
  alignItems: string;
  fitContent: boolean;
  wrap: boolean;
  children: React.ReactNode;
}>;

export const StackRow: FC<IRowProps> = ({
  children,
  space = '16px',
  alignItems = 'left',
  fitContent = false,
  wrap = false,
  ...props
}) => (
  <Box
    ml={-space}
    mt={wrap ? -space : 0}
    display='flex'
    flexDirection='row'
    alignItems={alignItems}
    flexWrap={wrap ? 'wrap' : 'unset'}
    {...props}
  >
    {Children.map(
      children,
      child =>
        isValidElement(child) && (
          <Box
            display='flex'
            pl={space}
            pt={wrap ? space : 0}
            height={fitContent ? 'fit-content' : 'auto'}
          >
            {child}
          </Box>
        )
    )}
  </Box>
);
