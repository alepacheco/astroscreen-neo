import React, { useState } from 'react';
import styled from 'styled-components';
import { CheckBox } from './CheckBox';
import { SocialNetwork } from './RowColumns/SocialNetwork';
import { EventName } from './RowColumns/EventName';
import { TimeStamp } from './RowColumns/TimeStamp';
import { Risk } from './RowColumns/Risk';
import { Geography } from './RowColumns/Geography';
import { Action } from './RowColumns/Action';
import { FaRedditSquare } from 'react-icons/fa';

const RowWrapper = styled.div<{ odd: boolean }>`
  background-color: ${({ odd }) =>
    odd ? 'rgb(16, 31, 62)' : 'rgba(0, 0, 0, 0)'};

  border-radius: 4px;
  height: 64px;
  display: flex;
  flex-direction: row;
`;

// @ts-ignore
const mapToIcon = (socialNetwork: string) => {
  return FaRedditSquare;
};

export const Row: React.FC<{
  socialNetwork: string;
  eventName: string;
  odd: boolean;
  level: number;
}> = ({ socialNetwork, odd, eventName, level }) => {
  const [checked, setChecked] = useState(false);

  return (
    <RowWrapper odd={odd}>
      <CheckBox checked={checked} onClick={() => setChecked(!checked)} />
      <SocialNetwork Icon={mapToIcon(socialNetwork)}>
        {socialNetwork}
      </SocialNetwork>
      <EventName>{eventName}</EventName>
      <TimeStamp>{socialNetwork}</TimeStamp>
      <Risk level={level}>{socialNetwork}</Risk>
      <Geography>{socialNetwork}</Geography>
      <Action>{socialNetwork}</Action>
    </RowWrapper>
  );
};
