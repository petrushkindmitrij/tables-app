import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { variant, padding, width, height } from '@xstyled/system';
import { PaddingProps, WidthProps, HeightProps } from '../types/props';
import { Flex } from '../Basics';

const boxStyle = css`
  border-radius: 8;
  width: 100%;
  flex-direction: column;
`;

const cardStyle = css`
  padding: 24px;
  background-color: #ffffffff;
  box-sizing: border-box;
  border: 1px solid #e5e5e5ff;
`;

const groupStyle = css`
  padding: 16px 24px 24px 24px;
  border-width: 1px;
  border-style: solid;
  border-color: #e5e5e5ff;
`;

const styleVariants = variant({
  prop: 'variant',
  default: 'normal',
  variants: {
    normal: cardStyle,
    flat: groupStyle,
  },
});

const clickable = ({ clickable = false }) =>
  clickable
    ? css`
        cursor: pointer;
      `
    : undefined;

export const Card = styled(Flex)<
  PaddingProps &
    WidthProps &
    HeightProps & { clickable?: boolean } & { variant?: 'normal' | 'flat' }
>`
  ${boxStyle}
  ${styleVariants}
  ${padding}
  ${width}
  ${height}
  ${clickable}
`;
