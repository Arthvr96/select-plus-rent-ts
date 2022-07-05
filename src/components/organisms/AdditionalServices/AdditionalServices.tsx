import React from 'react';
import { SectionTemplate } from 'components/templates/SectionTemplate/SectionTemplate';
import { Title } from 'components/atoms/Title/Title';
import { Subtitle } from 'components/atoms/Subtitle/Subtitle';
import Car1 from 'assets/svg/additionalServices/car1.react.svg';
import Car2 from 'assets/svg/additionalServices/car2.react.svg';
import { Wrapper, Services } from './AdditionalServices.style';

const title = 'Usługi dodatkowe';
const subtitle = 'Sprawdz co jeszcze możemy Ci zaoferować!';
const servicesData = [
  {
    id: '0',
    title: 'Auto z kierowcą',
    ReactSvg: Car1,
  },
  {
    id: '1',
    title: 'Auto do ślubu',
    ReactSvg: Car2,
  },
];

const AdditionalServices = () => {
  return (
    <SectionTemplate>
      <Wrapper>
        <Title variant="sectionTitleBlack">{title}</Title>
        <Subtitle variant="sectionSubtitleBlack" margin="1.5rem 0 3.5rem">
          {subtitle}
        </Subtitle>
        <Services>
          {servicesData.map(({ id, title, ReactSvg }) => (
            <li key={id}>
              <ReactSvg />
              <p>{title}</p>
            </li>
          ))}
        </Services>
      </Wrapper>
    </SectionTemplate>
  );
};

export default AdditionalServices;
