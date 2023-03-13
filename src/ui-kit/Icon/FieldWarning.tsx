import React from 'react';
import styled from '@emotion/styled';
import { color, backgroundColor } from '@xstyled/system';
import { BaseIconProps } from './types';

const BaseComponent = ({ size, ...props }: BaseIconProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox='0 0 16 16'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      aria-hidden='false'
      {...props}
    >
      <path
        d='M8 2v5.5'
        stroke='#F57A00'
        strokeWidth={2}
        strokeLinecap='round'
      />
      <circle cx={8} cy={13} r={0.5} fill='#F57A00' stroke='#F57A00' />
    </svg>
  );
};

export const FieldWarning = styled(BaseComponent)`
  outline: none;
  flex: 0 0 auto;
  ${color}
  ${backgroundColor}
`;
FieldWarning.defaultProps = {
  size: '1em',
  tabIndex: -1,
  focusable: false,
  'aria-hidden': true,
  role: 'img',
};
