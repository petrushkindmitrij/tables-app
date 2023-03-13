import React from 'react';
import { Box } from '@ui-kit';

import { Container } from './styled';

interface Props {
  leftSide: React.ReactNode;
}

export const LeftSideLayout: React.FC<Props> = ({ leftSide, children }) => (
  <Container>
    <Box mr='24px'>{leftSide}</Box>
    {children}
  </Container>
);
