import React from 'react';
import { Wrapper, ContactLabel } from './ContactBox.style';

export interface IContactBox {
  isVisible: boolean;
}

const ContactBox = ({ isVisible }: IContactBox) => {
  return (
    <Wrapper isVisible={isVisible}>
      <ContactLabel>
        Telefon: <span>690-000-213</span>
      </ContactLabel>
      <ContactLabel>
        Mail: <span>kontakt@selectplusrent.pl</span>
      </ContactLabel>
    </Wrapper>
  );
};

export default ContactBox;
