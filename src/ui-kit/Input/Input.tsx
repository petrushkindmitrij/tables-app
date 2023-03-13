import React, { forwardRef, ChangeEvent } from 'react';
import { SIZE_VARIANT } from '../types/props';

import { IInputProps } from './types';
import {
  SuccessIcon,
  WarningIcon,
  ControlsContainer,
  InputWrapper,
  StyledBasicInput,
} from './styled';

export const Input = forwardRef<HTMLInputElement, IInputProps>(
  (
    {
      size = SIZE_VARIANT.MEDIUM,
      width = '100%',
      onChange = () => {},
      hasError = false,
      hasSuccess = false,
      disabled = false,
      hasNoIcons,
      control = null,
      ...props
    },
    ref
  ) => (
    <InputWrapper
      hasError={hasError}
      hasSuccess={hasSuccess}
      disabled={disabled}
      size={size}
      width={width}
    >
      <StyledBasicInput
        ref={ref}
        autoComplete='off'
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          !disabled && onChange(e.target.value)
        }
        disabled={disabled}
        {...props}
      />
      <ControlsContainer className='controlsContainer'>
        {hasSuccess && !hasNoIcons && <SuccessIcon />}
        {hasError && !hasNoIcons && <WarningIcon />}
        {control}
      </ControlsContainer>
    </InputWrapper>
  )
);
