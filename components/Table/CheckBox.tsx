import React from 'react';
import styled from 'styled-components';

const UncheckedBox = styled.div`
  width: 20px;
  height: 20px;
  margin: auto 24px;
  background-color: rgb(80, 91, 115);
  border-radius: 4px;
`;

const CheckedBox = styled.div``;

export const CheckBox: React.FC<{ checked?: boolean }> = ({ checked }) => {
  if (checked) {
    return <CheckedBox />;
  }
  return <UncheckedBox />;
};
