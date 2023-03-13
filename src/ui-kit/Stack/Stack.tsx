import React, { Children, FC, isValidElement } from 'react';
import { Box } from '../Basics';

export interface IStackProps {
  space?: number | string;
  alignItems?: string;
  spaceFirst?: boolean;
  spaceLast?: boolean;
  push?: boolean;
  children: React.ReactNode;
}

export const Stack: FC<IStackProps> = ({
  children,
  space = '24px',
  alignItems,
  spaceFirst = false,
  spaceLast = false,
  push = false,
  ...props
}) => (
  <Box
    display='flex'
    flexDirection='column'
    alignItems={alignItems}
    marginTop={`-${space}`}
    width='100%'
    {...(spaceFirst && { marginTop: 0 })}
    {...(push && { marginTop: 'auto' })}
    {...(spaceLast && { marginBottom: space })}
    {...props}
  >
    {Children.map(
      children,
      child =>
        isValidElement(child) && (
          <Box display='flex' pt={space}>
            {child}
          </Box>
        )
    )}
  </Box>
);
