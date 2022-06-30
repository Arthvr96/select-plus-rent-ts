import React from 'react';
import { List } from './InfoList.style';

interface IInfoList {
  info: string[];
}

const InfoList = ({ info }: IInfoList) => {
  return (
    <List>
      {info.map((infoItem) => (
        <li key={infoItem}>{infoItem}</li>
      ))}
    </List>
  );
};

export default InfoList;
