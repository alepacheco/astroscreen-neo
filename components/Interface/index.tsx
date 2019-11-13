import React from 'react';
import styled from 'styled-components';
import { LeftNavigation } from './LeftNavigation';

const InterfaceWrapper = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
`;

const RowWrapper = styled.div`
  display: flex;
  flex-direction: row;
  height: calc(100vh - 64px);
`;

const TopNavigation = styled.div`
  display: flex;

  height: 64px;
  background-color: rgb(31, 44, 73);
  width: 100%;
  flex: 0 1 auto;
`;

const ChildrenWrapper = styled.div`
  flex: 2;
  margin: 24px;
  border-radius: 4px;
`;

const LogoWrapper = styled.div`
  text-align: center;
  margin: auto;
`;
const LogoBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80px;
  border-right: 1.5px solid rgb(6, 22, 54);
`;

const TitleWrapper = styled.div`
  flex: 1;
  margin: auto 38px;
  font-weight: bold;
`;

export const Interface: React.FC<{}> = ({ children }) => {
  return (
    <InterfaceWrapper>
      <TopNavigation>
        <LogoBox>
          <LogoWrapper>
            <img src="/static/svg/logo.svg" />
          </LogoWrapper>
        </LogoBox>
        <TitleWrapper>Events from: Coca Cola Company</TitleWrapper>
      </TopNavigation>
      <RowWrapper>
        <LeftNavigation />
        <ChildrenWrapper>{children}</ChildrenWrapper>
      </RowWrapper>
    </InterfaceWrapper>
  );
};
