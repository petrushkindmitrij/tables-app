import React from 'react';

import {
  Box,
  Button,
  Divider,
  Flex,
  Typography,
  TYPOGRAPHY_VARIANT,
} from '@ui-kit';

import { StyledCard } from './styled';

interface Props {
  title?: string;
  subtitle?: string;
  isPending?: boolean;
  onCreateClick?: () => void;
}

export const TableLayout: React.FC<Props> = ({
  children,
  title,
  subtitle,
  onCreateClick,
}) => (
  <StyledCard>
    <Box>
      <Flex paddingBottom={24}>
        <Box width='100%'>
          <div>
            <Typography variant={TYPOGRAPHY_VARIANT.HEADER_H4}>
              {title}
            </Typography>
          </div>
          <div>
            <Typography variant={TYPOGRAPHY_VARIANT.BODY_2}>
              {subtitle}
            </Typography>
          </div>
        </Box>
        {onCreateClick && <Button onClick={onCreateClick}>Add</Button>}
      </Flex>
      <Divider marginBottom={24} />
    </Box>
    {children}
  </StyledCard>
);
