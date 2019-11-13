import React from 'react';
import styled from 'styled-components';

const ColumnWrapper = styled.div`
  flex: 1;
  display: flex;
  margin: auto;
`;

const CenterText = styled.div`
  margin: auto 12px;
`;

export const ColumnEntry: React.FC<{ Icon: any }> = ({ Icon, children }) => {
  return (
    <ColumnWrapper>
      <Icon size={18} color="rgb(199,180,255)" />
      <CenterText>{children}</CenterText>
    </ColumnWrapper>
  );
};
