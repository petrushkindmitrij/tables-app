import styled from '@emotion/styled';
import { SIZE_VARIANT } from '../types/props';

import { Box } from '../Basics';

export const StyledDivider = styled(Box)<{ size?: SIZE_VARIANT }>`
  width: ${({ width }) => width || '100%'};
  background-color: #424242ff;
`;
