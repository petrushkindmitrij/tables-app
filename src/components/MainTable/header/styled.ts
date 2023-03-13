import styled from '@emotion/styled';

export const TableHeaderContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  word-break: break-word;
  text-align: left;
  box-sizing: border-box;
  padding: 8px 16px 16px 0;
`;

export const FilterContainer = styled.div`
  display: flex;
  width: 100%;
`;

export const FilterControl = styled.div`
  flex: 1;
`;

export const TableHeaderActionContainer = styled(TableHeaderContainer)`
  flex-direction: unset;
  height: 100%;
  align-items: end;
  padding-right: 0;
  justify-content: end;
`;
