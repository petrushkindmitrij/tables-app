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
        d='M13.436 2.564a1.936 1.936 0 00-2.75.019L2.97 10.297 2 14l3.702-.97 7.715-7.715a1.936 1.936 0 00.019-2.751zM9.09 4.182l2.728 2.727'
        stroke='currentColor'
        strokeWidth={1.5}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M3.091 10.182l1.91.816.817 1.911'
        stroke='currentColor'
        strokeWidth={1.5}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};

export const Pen = styled(BaseComponent)`
  outline: none;
  flex: 0 0 auto;
  ${color}
  ${backgroundColor}
`;
Pen.defaultProps = {
  size: '1em',
  tabIndex: -1,
  focusable: false,
  'aria-hidden': true,
  role: 'img',
};
