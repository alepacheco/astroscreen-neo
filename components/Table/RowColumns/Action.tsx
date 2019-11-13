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

export const Action: React.FC<{}> = ({ children }) => {
  return (
    <ColumnWrapper>
      <TextWrapper>{children}</TextWrapper>
    </ColumnWrapper>
  );
};
