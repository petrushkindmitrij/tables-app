import styled from '@emotion/styled';
import {
  display,
  height,
  opacity,
  paddingRight,
  variant,
  width,
} from '@xstyled/system';
import { css } from '@emotion/react';
import {
  DisplayProps,
  OpacityProps,
  HeightProps,
  PaddingRightProps,
  WidthProps,
  SIZE_VARIANT,
} from '../types/props';
import { Flex, BasicInput } from '../Basics';
import { FieldSuccess, FieldWarning } from '../Icon';
import { InputSizeProps, InputErrorSecProps } from './types';

export const ControlsContainer = styled(Flex)`
  flex: 1;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

export const inputStyle = (
  props: InputErrorSecProps & { disabled?: boolean }
) => css`
  box-sizing: border-box;

  font-family: 'Source Sans Pro', sans-serif;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  cursor: text;
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  text-align: left;
  white-space: nowrap;

  border-radius: 8px;
  border: 1px solid;
  outline: none;

  border-color: ${props.hasError
    ? '#f57a00ff'
    : props.hasSuccess
    ? '#009c2dff'
    : '#ccccccff'};
  background-color: ffffffff;
  color: ${props.hasError
    ? '#111111ff'
    : props.hasSuccess
    ? '#111111ff'
    : '#424242ff'};

  &:focus-within,
  &:focus,
  &:active {
    box-shadow: 0 0 0 4px #beecc8ff;
    border-color: #009c2dff;
  }

  &[disabled] {
    font-weight: 400;
    box-shadow: none;
    background-color: #4f4f4fff;
    border-color: #4f4f4fff;
    color: #757575ff;
    cursor: inherit;
  }
  &::placeholder {
    color: #424242ff;
    font-weight: 400;
  }
`;

const inputSizeVariants = variant({
  prop: 'size',
  default: SIZE_VARIANT.MEDIUM,
  variants: {
    [SIZE_VARIANT.XSMALL]: css`
      height: 32px;
      padding: 6px 8px;
      & .controlsContainer {
        padding-right: 8px;
      }
      & input {
        font-size: 14px;
      }
    `,
    [SIZE_VARIANT.SMALL]: css`
      height: 40px;
      padding: 8px;

      & .controlsContainer {
        padding-right: 8px;
      }
    `,
    [SIZE_VARIANT.MEDIUM]: css`
      height: 48px;
      padding: 12px 8px;
      & .controlsContainer {
        padding-right: 8px;
      }
      & input {
        font-size: 16px;
      }
    `,
    [SIZE_VARIANT.LARGE]: css`
      height: 56px;
      padding: 12px 8px;
      & .controlsContainer {
        padding-right: 8px;
      }
      & input {
        font-size: 20px;
      }
    `,
  },
});

export const InputWrapper = styled.label<
  PaddingRightProps &
    OpacityProps &
    WidthProps &
    HeightProps &
    DisplayProps &
    InputSizeProps &
    InputErrorSecProps & { disabled?: boolean }
>`
  ${inputStyle}
  ${inputSizeVariants}
  ${paddingRight}
  ${opacity}
  ${width}
  ${height}
  ${display}
`;

export const StyledBasicInput = styled(BasicInput)`
  background-color: inherit;
  color: #111111ff;
  &::placeholder {
    color: #424242ff;
    font-weight: 400;
  }
  &[disabled] {
    font-weight: 400;
    box-shadow: none;
    background-color: #4f4f4fff;
    border-color: #4f4f4fff;
    color: #757575ff;
    cursor: inherit;
  }
`;

export const SuccessIcon = styled(FieldSuccess)``;

export const WarningIcon = styled(FieldWarning)``;
