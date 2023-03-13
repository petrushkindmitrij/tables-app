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
        d='M2 11l6-6 6 6'
        stroke='currentColor'
        strokeWidth={1.5}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};

export const ChevronUp = styled(BaseComponent)`
  outline: none;
  flex: 0 0 auto;
  ${color}
  ${backgroundColor}
`;
ChevronUp.defaultProps = {
  size: '1em',
  tabIndex: -1,
  focusable: false,
  'aria-hidden': true,
  role: 'img',
};
