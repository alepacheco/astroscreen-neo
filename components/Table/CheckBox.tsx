import React from 'react';
import styled from 'styled-components';

const UncheckedBox = styled.div`
  width: 20px;
  height: 20px;
  margin: auto 24px;
  background-color: rgb(80, 91, 115);
  border-radius: 4px;
`;

const CheckedBox = styled.div`
  width: 20px;
  height: 20px;
  margin: auto 24px;
  background-color: rgb(80, 191, 115);
  border-radius: 4px;
`;

export const CheckBox: React.FC<{ checked?: boolean; onClick: () => void }> = ({
  checked,
  onClick,
}) => {
  const CheckBoxState = checked ? CheckedBox : UncheckedBox;

  return <CheckBoxState onClick={onClick} />;
};
