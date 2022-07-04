import React from 'react';
import InfoSection from 'components/organisms/InfoSection/InfoSection';
import Footer from 'components/organisms/Footer/Footer';
import { useIndexContext } from 'providers/IndexContextProvider';
import { FixedSection } from './FixedFooterSections.style';
import { ParallaxPlaceholder } from 'components/atoms/ParallaxPlaceholder/ParallaxPlaceholder';

interface IFixedFooterSections {
  id: string;
  infoSectionBg: {
    publicURL: string;
  };
}

const FixedFooterSections = ({ infoSectionBg, id }: IFixedFooterSections) => {
  const { isFixed } = useIndexContext();

  return (
    <>
      {isFixed ? <ParallaxPlaceholder height="200vh" /> : null}
      <FixedSection isFixed={isFixed}>
        <InfoSection srcBg={infoSectionBg.publicURL} />
        <Footer />
      </FixedSection>
      <div id={id} />
    </>
  );
};

export default FixedFooterSections;
