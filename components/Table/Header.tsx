import React from 'react';
import styled from 'styled-components';

import { ColumnEntry } from './ColumnEntry';
import {
  FaSearch,
  FaFolderPlus,
  FaSortAlphaDown,
  FaListUl,
  FaFileExport,
  FaCompressArrowsAlt,
} from 'react-icons/fa';

import { CheckBox } from './CheckBox';

const HeaderWrapper = styled.div`
  height: 56px;
  background-color: rgb(31, 44, 73);
  display: flex;
  flex-direction: row;
  border-radius: 4px;
`;

export const Header = () => {
  return (
    <HeaderWrapper>
      <CheckBox />
      <ColumnEntry Icon={FaSearch}>Find in view</ColumnEntry>
      <ColumnEntry Icon={FaCompressArrowsAlt}>Filter</ColumnEntry>
      <ColumnEntry Icon={FaFolderPlus}>Group</ColumnEntry>
      <ColumnEntry Icon={FaSortAlphaDown}>Sort</ColumnEntry>
      <ColumnEntry Icon={FaListUl}></ColumnEntry>
      <ColumnEntry Icon={FaFileExport}></ColumnEntry>
    </HeaderWrapper>
  );
};
