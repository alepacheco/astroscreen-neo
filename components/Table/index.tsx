import React from 'react';
import styled from 'styled-components';
import { Row } from './Row';
import { Header } from './Header';
import { data } from './data';

const Wrapper = styled.div``;

const List = styled.div`
  overflow: scroll;
  max-height: calc(100vh - 168px);
`;

export const Table = () => {
  const rowElements = data.map((rowData, index) => {
    return <Row key={index} odd={index % 2 === 1} {...rowData} />;
  });

  return (
    <Wrapper>
      <Header />

      <List>{rowElements}</List>
    </Wrapper>
  );
};
