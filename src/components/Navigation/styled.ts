import styled from '@emotion/styled';
import { Box, Flex, ChevronUp } from '@ui-kit';

export const FieldWrapper = styled(Flex)<{ isSelected?: boolean }>`
  ${({ isSelected }) => isSelected && 'background-color: #f9f7f9ff;'}

  padding: 16px 24px;
  cursor: pointer;
  align-items: center;

  &:hover {
    background-color: #f7f7f8ff;
  }
`;

export const SubfieldsWrapper = styled(Box)`
  overflow: hidden;
  transition: height 0.1s ease-in-out;
`;

export const ArrowIcon = styled(ChevronUp)<{ isDown?: boolean }>`
  transform: rotate(${({ isDown }) => (isDown ? 180 : 0)}deg);
  color: #424242ff;
  stroke-width: 2px;

  transition: transform 0.1s ease-in-out;
`;
