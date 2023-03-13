import { Close, SIZE_VARIANT } from '@ui-kit';
import React, { MouseEvent } from 'react';
import { StyledButton } from './styled';

type ResetButtonProps = {
  onClick: () => void;
};

export const ResetButton: React.FC<ResetButtonProps> = props => {
  const onClick = (event: MouseEvent) => {
    event.preventDefault();
    props.onClick();
  };

  return (
    <StyledButton
      icon={Close}
      onClick={onClick}
      size={SIZE_VARIANT.SMALL}
      width={40}
    />
  );
};
