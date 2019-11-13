import React from 'react';
import styled from 'styled-components';

const ColumnWrapper = styled.div`
  flex: 1;
  display: flex;
  margin: auto;
`;

const TextWrapper = styled.div<{ color: string }>`
  margin: auto 12px;
  border-radius: 4px;
  font-size: 12px;
  padding 4px 12px;
  border-color: ${({ color }) => color};
  color: ${({ color }) => color};
  border: 1px solid;

  width: 50%;
  text-align: center;
`;

export const Risk: React.FC<{ level: number }> = ({ level }) => {
  const color = level === 0 ? 'blue' : level === 1 ? 'green' : 'red';
  const text = level === 0 ? 'Low' : level === 1 ? 'Medium' : 'High';

  return (
    <ColumnWrapper>
      <TextWrapper color={color}>{text}</TextWrapper>
    </ColumnWrapper>
  );
};
