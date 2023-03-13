import React from 'react';
import { Box, Button, Cell, Divider } from '@ui-kit';
import { ButtonWrapper } from './styled';
import {
  CANCEL_BUTTON_TEXT_BY_TYPE,
  ADD_BUTTON_TEXT_BY_TYPE,
} from './constants';

interface Props {
  onAddClick?: React.MouseEventHandler<HTMLButtonElement>;
  onCancelClick?: React.MouseEventHandler<HTMLButtonElement>;
  type?: 'create' | 'update' | 'return';
  [key: string]: unknown;
}

export const BottomButtonsLayout: React.FC<Props> = ({
  children,
  onAddClick,
  onCancelClick,
  type = 'create',
  ...props
}) => (
  <Box {...props}>
    {children}
    <Divider mt='40px' />
    <ButtonWrapper>
      {type === 'return' ? <Cell /> : null}

      <Button width='100%' size='large' onClick={onCancelClick}>
        {CANCEL_BUTTON_TEXT_BY_TYPE[type]}
      </Button>

      {type !== 'return' ? (
        <Button
          ml='24px'
          width='100%'
          size='large'
          type='submit'
          onClick={onAddClick}
        >
          {ADD_BUTTON_TEXT_BY_TYPE[type]}
        </Button>
      ) : null}
    </ButtonWrapper>
  </Box>
);
