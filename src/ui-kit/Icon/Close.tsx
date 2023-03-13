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
        d='M2 2l12 12M2 14L14 2'
        stroke='currentColor'
        strokeWidth={1.5}
        strokeLinecap='round'
      />
    </svg>
  );
};

export const Close = styled(BaseComponent)`
  outline: none;
  flex: 0 0 auto;
  ${color}
  ${backgroundColor}
`;
Close.defaultProps = {
  size: '1em',
  tabIndex: -1,
  focusable: false,
  'aria-hidden': true,
  role: 'img',
};
