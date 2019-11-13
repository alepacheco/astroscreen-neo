import React from 'react';
import styled from 'styled-components';
import { NavItem } from './NavItem';
import { useStoreActions, useStoreState } from 'easy-peasy';

import {
  FaRegStar,
  FaSlackHash,
  FaWaveSquare,
  FaFileAlt,
  FaArchive,
} from 'react-icons/fa';

const Wrapper = styled.div`
  height: 100%;
  width: 80px;
  min-width: 80px;
  background-color: rgb(31, 44, 73);
  border-top: 1.5px solid rgb(6, 22, 54);
  display: flex;
  flex-direction: column;
`;

export const LeftNavigation: React.FC<{}> = () => {
  // @ts-ignore
  const page = useStoreState(state => state.navigator.intefacePage);
  // @ts-ignore
  const changePage = useStoreActions(actions => actions.navigator.changePage);

  return (
    <Wrapper>
      <NavItem
        Icon={FaRegStar}
        selected={page === 'home'}
        onClick={() => changePage('home')}
      />
      <NavItem
        Icon={FaSlackHash}
        selected={page === 'hash'}
        onClick={() => changePage('hash')}
      />
      <NavItem
        Icon={FaWaveSquare}
        selected={page === 'wave'}
        onClick={() => changePage('wave')}
      />
      <NavItem
        Icon={FaFileAlt}
        selected={page === 'doc'}
        onClick={() => changePage('doc')}
      />
      <NavItem
        Icon={FaArchive}
        selected={page === 'archive'}
        onClick={() => changePage('archive')}
      />
    </Wrapper>
  );
};
