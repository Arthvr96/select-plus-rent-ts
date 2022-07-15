import React, { useEffect, useRef } from 'react';
import { MemoInfoSection } from 'components/organisms/InfoSection/InfoSection';
import { MemoFooter } from 'components/organisms/Footer/Footer';
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
  const { isHideHero, footerPage, isMobile } = useIndexContext();
  const fixedSectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isMobile) {
      if (fixedSectionRef.current && height) {
        if (footerPage === 0) {
          fixedSectionRef.current.style.transform = `translateY(0px)`;
        } else if (footerPage === 1) {
          fixedSectionRef.current.style.transform = `translateY(${-height}px)`;
        }
      }
    }
  }, [footerPage, height, isMobile]);

  return (
    <>
      <div id={ids[0]} />
      {isMobile ? (
        <ParallaxPlaceholder height={height ? `${height * 2}px` : '0px'} />
      ) : (
        <ParallaxPlaceholder height="100vh" />
      )}
      {isHideHero ? (
        <>
          <FixedSection ref={fixedSectionRef}>
            <MemoInfoSection srcBg={infoSectionBg.publicURL} />
            <MemoFooter />
          </FixedSection>
        </>
      ) : null}
      <div id={ids[1]} />
    </>
  );
};

export default FixedFooterSections;
