import React from 'react';
import styled from 'styled-components';
import { CheckBox } from './CheckBox';
import { SocialNetwork } from './RowColumns/SocialNetwork';

const RowWrapper = styled.div<{ odd: boolean }>`
  background-color: ${({ odd }) =>
    odd ? 'rgb(16, 31, 62)' : 'rgba(0, 0, 0, 0)'};

  border-radius: 4px;
  height: 64px;
  display: flex;
  flex-direction: row;
`;

export const Row: React.FC<{
  socialNetwork: string;
  Icon?: any;
  odd: boolean;
}> = ({ socialNetwork, Icon, odd }) => {
  return (
    <RowWrapper odd={odd}>
      <CheckBox />
      <SocialNetwork Icon={Icon}>{socialNetwork}</SocialNetwork>
    </RowWrapper>
  );
};
