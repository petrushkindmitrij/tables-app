import styled from '@emotion/styled';
import { Button, Close } from '@ui-kit';

export const TableCellContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  word-break: break-word;
  text-align: left;
  box-sizing: border-box;
  padding-right: 16px;
  padding-left: 8px;
  flex-wrap: wrap;
`;
export const TableCellActionContainer = styled.div`
  padding-right: 0;
  padding-left: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const StyledButton = styled(Button)`
  border: 1px solid #b2b2b2;
  border-radius: 8px;

  height: 40px;
`;

export const Delete = styled(Close)`
  margin-right: -8px;
  width: 15px;
  height: 15px;
`;
