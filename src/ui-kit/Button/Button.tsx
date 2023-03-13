import React, { FC } from 'react';
import { ButtonProps } from './types';
import { IconContainer, StyledButton } from './styled';
import { Typography, TYPOGRAPHY_VARIANT } from '../Typography';
import { Flex } from '../Basics';

export const Button: FC<ButtonProps> = ({
  disabled = false,
  size = 'small',
  icon,
  onClick,
  ...props
}) => {
  const drawIcon = () => {
    if (icon) {
      const IconComponent = icon;
      return (
        <IconContainer>
          <IconComponent width='16px' height='16px' />
        </IconContainer>
      );
    } else return null;
  };
  return (
    <StyledButton disabled={disabled} size={size} onClick={onClick} {...props}>
      <Flex>
        {icon ? (
          <>{drawIcon()}</>
        ) : (
          <Typography variant={TYPOGRAPHY_VARIANT.BUTTON}>
            {props.children}
          </Typography>
        )}
      </Flex>
    </StyledButton>
  );
};
