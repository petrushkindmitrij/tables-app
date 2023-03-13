import styled from '@emotion/styled';
import { css } from '@emotion/react';

import {
  display,
  height,
  opacity,
  padding,
  paddingRight,
  width,
} from '@xstyled/system';

import {
  DisplayProps,
  HeightProps,
  OpacityProps,
  PaddingRightProps,
  PaddingProps,
  WidthProps,
} from '../types/props';

import { BoxProps } from './types';

export const BasicBox = styled.div<BoxProps>`
  box-sizing: border-box;
  ${props =>
    props.cursor &&
    css`
      cursor: ${props.cursor};
    `}
`;

export const BasicFlexBox = styled(BasicBox)`
  display: flex;
`;

export const BasicAbsoluteBox = styled(BasicBox)`
  position: absolute;
`;

export const BasicRelativeBox = styled(BasicBox)`
  position: relative;
`;

export const inputStyle = css`
  box-sizing: border-box;

  font-family: 'Source Sans Pro', sans-serif;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;

  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  text-align: left;
  white-space: nowrap;

  border: 0;
  outline: none;
  color: #737373ff;

  &::placeholder {
    color: #ccccccff;
    font-weight: 400;
  }
`;

export const BasicInput = styled.input<
  PaddingRightProps & OpacityProps & WidthProps & HeightProps & DisplayProps
>`
  ${inputStyle}
  ${paddingRight}
  ${opacity}
  ${width}
  ${height}
  ${display}
`;

export const BasicLabel = styled.label<PaddingProps>`
  ${padding}
`;

export const BasicLink = styled.a``;

export const BasicCheckbox = styled.input`
  display: none;
`;

export const MarkedList = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
`;

export const ListItem = styled.li``;

export const Form = styled.form`
  width: 100%;
`;

export const OrderedList = styled.ol`
  padding: 0;
  margin: 0;
`;
