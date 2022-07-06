import React, { useEffect, useRef } from 'react';
import InfoSection from 'components/organisms/InfoSection/InfoSection';
import Footer from 'components/organisms/Footer/Footer';
import { useIndexContext } from 'providers/IndexContextProvider';
import { FixedSection } from './FixedFooterSections.style';
import { ParallaxPlaceholder } from 'components/atoms/ParallaxPlaceholder/ParallaxPlaceholder';
import { useWindowSize } from 'hooks/useWindowSize';

interface IFixedFooterSections {
  ids: string[];
  infoSectionBg: {
    publicURL: string;
  };
}

const FixedFooterSections = ({ infoSectionBg, ids }: IFixedFooterSections) => {
  const { height } = useWindowSize();
  const { isHideHero, footerPage, isDesktop } = useIndexContext();
  const fixedSectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isDesktop) {
      if (fixedSectionRef.current && height) {
        if (footerPage === 0) {
          fixedSectionRef.current.style.transform = `translateY(0px)`;
        } else if (footerPage === 1) {
          fixedSectionRef.current.style.transform = `translateY(${-height}px)`;
        }
      }
    }
  }, [footerPage, height, isDesktop]);

  return (
    <>
      <div id={ids[0]} />
      {isDesktop ? (
        <ParallaxPlaceholder height={height ? height : 0} />
      ) : (
        <ParallaxPlaceholder height={height ? height * 2 : 0} />
      )}
      {isHideHero ? (
        <>
          <FixedSection ref={fixedSectionRef}>
            <InfoSection srcBg={infoSectionBg.publicURL} />
            <Footer />
          </FixedSection>
        </>
      ) : null}
      <div id={ids[1]} />
    </>
  );
};

export default FixedFooterSections;
