import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div<{ selected: boolean }>`
  background-color: ${({ selected }) =>
    selected ? 'rgb(64, 148, 170)' : 'rgb(42, 54, 82)'};
  height: 62px;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 2px solid rgb(31, 44, 73);
`;

export const NavItem: React.FC<{ Icon: any; selected: boolean }> = ({
  Icon,
  selected,
}) => {
  return (
    <Wrapper selected={selected}>
      <Icon size={24} color="rgb(162,233,242)" />
    </Wrapper>
  );
};
