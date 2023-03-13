import styled from '@emotion/styled';

import { Box, Card } from '@ui-kit';

export const Overlay = styled(Box)`
  position: fixed;

  left: 0;
  top: 0;
  width: 100%;
  height: 100%;

  overflow: auto;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const ModalWindow = styled(Card)`
  position: absolute;

  top: 50%;
  left: 50%;
  width: min(100vw, 700px);

  transform: translate(-50%, -50%);
`;
