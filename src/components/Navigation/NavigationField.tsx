import React from 'react';
import { Typography, Box, Divider } from '@ui-kit';
import { FieldWrapper } from './styled';

export interface INavigationFieldProps {
  title?: string;
  isSelected?: boolean;
  onClick?: () => void;
}

export const NavigationField: React.FC<INavigationFieldProps> = ({
  isSelected,
  onClick,
  title,
}) => (
  <>
    <FieldWrapper onClick={onClick} isSelected={isSelected}>
      <Box width='100%'>
        <Typography>{title}</Typography>
      </Box>
    </FieldWrapper>
    <Divider ml={'24px'} />
  </>
);
