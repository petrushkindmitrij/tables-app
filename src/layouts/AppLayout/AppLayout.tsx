import React from 'react';
import { Box } from '@ui-kit';
import styled from '@emotion/styled';

const Container = styled(Box)`
  background-color: #f7f7f8ff;
`;

export const AppLayout: React.FC = ({ children }) => (
  <Container width={1464}>{children}</Container>
);
