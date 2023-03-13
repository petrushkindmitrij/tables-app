import React from 'react';

import { Box } from '@ui-kit';

import { Container, Content, Header, Navigation, Root } from './styled';

export const AppContainer: React.FC<{}> = ({ children }) => (
  <Box>
    <Header>App name</Header>
    <Container>
      <Navigation />
      <Root>
        <Content>{children}</Content>
      </Root>
    </Container>
  </Box>
);
