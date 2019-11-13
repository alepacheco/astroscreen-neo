import React from 'react';
import styled from 'styled-components';
import { NavItem } from './NavItem';

import { FaRegStar } from 'react-icons/fa';

const Wrapper = styled.div`
  height: 100%;
  width: 80px;
  min-width: 80px;
  background-color: rgb(31, 44, 73);
  border-top: 1.5px solid rgb(6, 22, 54);
  display: flex;
  flex-direction: column;
`;

export const LeftNavigation = () => {
  return (
    <Wrapper>
      <NavItem Icon={FaRegStar} selected={true} />
      <NavItem Icon={FaRegStar} selected={false} />
      <NavItem Icon={FaRegStar} selected={false} />
      <NavItem Icon={FaRegStar} selected={false} />
      <NavItem Icon={FaRegStar} selected={false} />
    </Wrapper>
  );
};
