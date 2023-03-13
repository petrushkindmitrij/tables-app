import React from 'react';

import { Typography, TYPOGRAPHY_VARIANT, Flex } from '@ui-kit';
import { Container, Label } from './styled';

interface RowProps {
  title?: string;
  subtitle?: string;
  hasError?: boolean;
  hasSuccess?: boolean;
}

export const FormField: React.FC<RowProps> = ({
  title,
  subtitle,
  children,
  hasError,
  hasSuccess,
}) => (
  <Container>
    {title && (
      <Flex flexDirection='column' alignItems={'center'}>
        <Label variant={TYPOGRAPHY_VARIANT.BODY_1}>{title}</Label>
        {hasError && (
          <Typography
            variant={TYPOGRAPHY_VARIANT.BODY_2}
            color='form-icon--warning'
          >
            {subtitle}
          </Typography>
        )}
        {hasSuccess && (
          <Typography
            variant={TYPOGRAPHY_VARIANT.BODY_2}
            color='form-icon--success'
          >
            {subtitle}
          </Typography>
        )}
      </Flex>
    )}
    {children}
  </Container>
);
