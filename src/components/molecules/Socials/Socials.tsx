import React from 'react';
import FbIcon from 'assets/svg/socials/facebook.react.svg';
import IgIcon from 'assets/svg/socials/instagram.react.svg';
import { Wrapper } from './Socials.style';

const Socials = () => {
  return (
    <Wrapper>
      <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
        Link facebook - Select Plus Rent
        <FbIcon />
      </a>
      <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
        Link instagram - Select Plus Rent
        <IgIcon />
      </a>
    </Wrapper>
  );
};

export default Socials;
