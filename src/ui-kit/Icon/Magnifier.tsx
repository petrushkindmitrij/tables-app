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
        d='M15 15l-3.757-3.757M7 13A6 6 0 117 1a6 6 0 010 12z'
        stroke='currentColor'
        strokeWidth={1.5}
        strokeLinecap='round'
      />
    </svg>
  );
};

export const Magnifier = styled(BaseComponent)`
  outline: none;
  flex: 0 0 auto;
  ${color}
  ${backgroundColor}
`;
Magnifier.defaultProps = {
  size: '1em',
  tabIndex: -1,
  focusable: false,
  'aria-hidden': true,
  role: 'img',
};
