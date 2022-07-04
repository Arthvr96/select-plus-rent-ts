import React from 'react';
import InfoSection from 'components/organisms/InfoSection/InfoSection';
import Footer from 'components/organisms/Footer/Footer';
import { useIndexContext } from 'providers/IndexContextProvider';
import { FixedSection } from './FixedFooterSections.style';
import { ParallaxPlaceholder } from 'components/atoms/ParallaxPlaceholder/ParallaxPlaceholder';
import { useWindowSize } from 'hooks/useWindowSize';

interface IFixedFooterSections {
  id: string;
  infoSectionBg: {
    publicURL: string;
  };
}

const FixedFooterSections = ({ infoSectionBg, id }: IFixedFooterSections) => {
  const { height } = useWindowSize();
  const { isFixed, isHideHero } = useIndexContext();

  return (
    <>
      {isFixed ? <ParallaxPlaceholder height={height ? height * 2 : 0} /> : null}
      {isHideHero ? (
        <>
          <FixedSection isFixed={isFixed}>
            <InfoSection srcBg={infoSectionBg.publicURL} />
            <Footer />
          </FixedSection>
        </>
      ) : null}
      <div id={id} />
    </>
  );
};

export default FixedFooterSections;
