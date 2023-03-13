import styled from '@emotion/styled';
import { Box } from '@ui-kit';

export const Container = styled(Box)`
  position: relative;
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
  min-height: calc(100vh - 64px);
  padding: 0 calc(20px - (100vw - 100%)) 0 0;
`;
export const Navigation = styled(Box)`
  background-color: darkslategray;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex: 0 1 48px;
  padding: 0 8px;
`;
export const Root = styled(Box)`
  /* flex: 1; */
  margin: 0 auto;
`;
export const Header = styled(Box)`
  height: 64px;
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  padding-left: 24px;
  font-size: 30px;
  line-height: 40px;
  font-weight: 700;
  border-bottom: 1px solid darkslategray;
  box-sizing: border-box;
`;
export const Content = styled(Box)`
  /* flex: 1; */
  padding-right: 80px;
`;
