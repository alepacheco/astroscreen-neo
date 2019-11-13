import React from 'react';
import styled from 'styled-components';

const ColumnWrapper = styled.div`
  flex: 1;
  display: flex;
  margin: auto;
`;

const TextWrapper = styled.div`
  margin: auto 12px;
`;

export const SocialNetwork: React.FC<{ Icon: any }> = ({ Icon, children }) => {
  return (
    <ColumnWrapper>
      <Icon size={12} color="rgb(199,180,255)" />
      <TextWrapper>{children}</TextWrapper>
    </ColumnWrapper>
  );
};
