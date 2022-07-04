import React, { useEffect, useRef } from 'react';
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
  const { isHideHero, footerMoveBy } = useIndexContext();
  const fixedSectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (fixedSectionRef.current) {
      fixedSectionRef.current.style.transform = `translateY(${footerMoveBy}px)`;
    }
  }, [footerMoveBy]);

  return (
    <>
      <ParallaxPlaceholder height={height ? height * 2 : 0} />
      {isHideHero ? (
        <>
          <FixedSection ref={fixedSectionRef}>
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
