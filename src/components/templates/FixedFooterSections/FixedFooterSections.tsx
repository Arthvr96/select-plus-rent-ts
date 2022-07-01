import React, { useEffect, useRef } from 'react';
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
  const fixedSectionRef = useRef<HTMLDivElement>(null);
  const { footerMoveBy } = useIndexContext();

  useEffect(() => {
    if (fixedSectionRef.current) {
      fixedSectionRef.current.style.transform = `translateY(${Math.round(footerMoveBy)}px)`;
    }
  }, [footerMoveBy]);

  return (
    <>
      <ParallaxPlaceholder height="200vh" />
      <FixedSection ref={fixedSectionRef}>
        <InfoSection srcBg={infoSectionBg.publicURL} />
        <Footer />
      </FixedSection>
      <div id={id} />
    </>
  );
};

export default FixedFooterSections;
