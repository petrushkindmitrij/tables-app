import React from 'react';
import { StyledComponent } from '@emotion/styled';

import {
  MarginBottomProps,
  MarginLeftProps,
  MarginProps,
  MarginRightProps,
  MarginTopProps,
  WidthProps,
} from '../types/props';
import { BaseIconProps } from '@ui-kit/Icon/types';

// todo: fix this f*cking type
type ButtonHTMLProps = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

export interface ButtonProps
  extends WidthProps,
    ButtonHTMLProps,
    MarginProps,
    MarginTopProps,
    MarginBottomProps,
    MarginLeftProps,
    MarginRightProps {
  disabled?: boolean;
  children?: React.ReactText;
  size?: 'small' | 'medium' | 'large';
  icon?: StyledComponent<BaseIconProps>;
}
