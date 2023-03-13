import styled from '@emotion/styled';
import { Box } from '@ui-kit/Basics';
import {
  margin,
  marginBottom,
  marginLeft,
  marginRight,
  marginTop,
  width,
} from '@xstyled/system';
import { ButtonProps } from './types';

export const IconContainer = styled(Box)`
  display: flex;
  align-items: center;
  vertical-align: middle;
  ${marginLeft}
  ${marginRight}
`;

export const StyledButton = styled.button<Omit<ButtonProps, 'children'>>`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  white-space: nowrap;

  cursor: pointer;

  border: 1px solid;
  outline: none;

  align-items: center;
  position: relative;

  padding: 11px;
  border-radius: 8px;

  ${width};
  ${margin};
  ${marginTop};
  ${marginBottom};
  ${marginLeft};
  ${marginRight};
`;
