import React from 'react';
import { Title } from 'components/atoms/Title/Title';
import PhoneIcon from 'assets/svg/footerIcons/phone.react.svg';
import MailIcon from 'assets/svg/footerIcons/mail.react.svg';
import PinIcon from 'assets/svg/footerIcons/pin.react.svg';
import { ContactList } from './Contact.style';
import { useIndexContext } from 'providers/IndexContextProvider';

type contactInfo = {
  id: string;
  title: string;
  content: string;
  ReactIcon: string;
}[];

const contactInfo: contactInfo = [
  {
    id: '0',
    title: 'Telefon kontaktowy',
    content: '690-000-213',
    ReactIcon: PhoneIcon,
  },
  {
    id: '1',
    title: 'Napisz do nas',
    content: 'kontakt@selectplusrent.pl',
    ReactIcon: MailIcon,
  },
  {
    id: '2',
    title: 'GCH MANHATTAN',
    content: 'Poziom 3, lokal 303D al. Grunwaldzka 82, Gdańsk',
    ReactIcon: PinIcon,
  },
];

const Contact = () => {
  const { isMobile } = useIndexContext();
  return (
    <div>
      <Title variant={isMobile ? 'sectionTitleWhite' : 'contactHeaderRight'} margin="0 0 3rem 0">
        Kontakt
      </Title>
      <ContactList>
        {contactInfo.map(({ id, content, ReactIcon, title }) => (
          <li key={id}>
            <ReactIcon />
            <div>
              <p>{title}</p>
              <p>{content}</p>
            </div>
          </li>
        ))}
      </ContactList>
    </div>
  );
};

export default Contact;
