import { Absolute } from '@ui-kit';
import React from 'react';
import { ModalWindow, Overlay } from './styled';

interface Props extends React.ComponentProps<typeof Absolute> {
  isPending?: boolean;
}

export const ModalWindowLayout: React.FC<Props> = ({
  children,
  isPending,
  ...props
}) => (
  <Overlay>
    <ModalWindow {...props}>{children}</ModalWindow>
  </Overlay>
);
