import React, { ReactNode, useCallback, useContext, useEffect, useState } from 'react';
import { useScrollPosition } from '@n8tb1t/use-scroll-position';
import { useWindowSize } from 'hooks/useWindowSize';
import { desktopNavVariantType } from 'globalTypes';

interface IIndexContextProvider {
  children: ReactNode;
}

interface IUseIndexContext {
  isMobile: boolean;
  isHamburgerOpen: boolean;
  isNavHidden: boolean;
  isHideHero: boolean;
  isScrolling: boolean;
  moveBy: number;
  footerPage: number;
  desktopNavVariant: desktopNavVariantType;
  handleSetScrolling: () => void;
  handleToggleHamburger: () => void;
}

export const IndexContext = React.createContext<IUseIndexContext>({
  isMobile: false,
  isHamburgerOpen: false,
  isNavHidden: false,
  isHideHero: false,
  isScrolling: false,
  moveBy: 0,
  footerPage: 0,
  desktopNavVariant: 'big',
  handleSetScrolling: () => {},
  handleToggleHamburger: () => {},
});

export const useIndexContext = (): IUseIndexContext => {
  return useContext(IndexContext) as IUseIndexContext;
};

const IndexContextProvider = ({ children }: IIndexContextProvider) => {
  const { width: viewportWidth, height: viewportHeight } = useWindowSize();
  const [isMobile, setIsMobile] = useState(false);
  const [isHamburgerOpen, setHamburger] = useState(false);
  const [isNavHidden, setNavHidden] = useState(false);
  const [isScrolling, setScrolling] = useState(false);
  const [desktopNavVariant, setDesktopNavVariant] = useState<desktopNavVariantType>('big');
  const [isHideHero, setIsHideHero] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [moveBy, setMoveBy] = useState(0);
  const [footerPage, setFooterPage] = useState(0);
  let bodyRef: HTMLBodyElement | null = null;
  let timeoutRef: number;

  const handleToggleHamburger = () => {
    if (isMobile) {
      setHamburger(!isHamburgerOpen);
    }
  };

  const handleSetScrolling = () => {
    setScrolling(true);
  };

  const hideNavAfterScrollByLink = useCallback(
    (currPos: number) => {
      if (isScrolling) {
        window.clearTimeout(timeoutRef);
        timeoutRef = window.setTimeout(() => {
          if (currPos + 50 >= 0) {
            setNavHidden(false);
          } else {
            setNavHidden(true);
          }
          setScrolling(false);
        }, 50);
      }
    },
    [isScrolling]
  );

  const hideNavOnScroll = useCallback(
    (currPos: number, prevPos: number) => {
      const isHide = currPos < prevPos && currPos < -100 && !isHamburgerOpen;
      if (isHide !== isNavHidden) setNavHidden(isHide);
    },
    [isNavHidden, isHamburgerOpen]
  );

  const handleSetDesktopNavVariant = useCallback(
    (currPos: number, prevPos: number) => {
      if (viewportHeight && !isMobile) {
        if (currPos - prevPos > 0) {
          if (currPos + viewportHeight * 0.5 > 0) {
            if (desktopNavVariant === 'small') {
              setDesktopNavVariant('big');
            }
          }
        } else if (currPos - prevPos < 0) {
          if (currPos + viewportHeight * 0.8 < 0) {
            if (desktopNavVariant === 'big') {
              setDesktopNavVariant('small');
            }
          }
        }
      }
      if (isMobile) {
        setDesktopNavVariant('big');
      }
    },
    [isMobile, viewportHeight, desktopNavVariant]
  );

  const hideHeroOnScroll = useCallback(
    (currPos: number) => {
      if (currPos >= -window.innerHeight) {
        if (isHideHero) {
          setIsHideHero(false);
        }
      } else if (currPos < -window.innerHeight && !isHideHero) {
        setIsHideHero(true);
      }
    },
    [isHideHero]
  );

  const changeMoveByOnScroll = useCallback(
    (currPos: number) => {
      if (!isHideHero) {
        setMoveBy(Math.round(currPos / 3));
      }
    },
    [isHideHero]
  );

  const changeFooterMoveByOnScroll = useCallback(
    (currPos: number, prevPos: number) => {
      if (!bodyRef) {
        bodyRef = document.querySelector('body');
      }
      if (bodyRef && viewportHeight) {
        const bodyHeight = -1 * (bodyRef.getBoundingClientRect().height - viewportHeight);

        if (currPos - prevPos > 0) {
          if (currPos > bodyHeight + viewportHeight / 2) {
            if (footerPage === 1) {
              setFooterPage(0);
            }
          }
        } else if (currPos - prevPos < 0) {
          if (currPos <= bodyHeight + viewportHeight - viewportHeight / 2) {
            if (footerPage === 0) {
              setFooterPage(1);
            }
          }
        }
      }
    },
    [viewportHeight, bodyRef, footerPage]
  );

  useScrollPosition(
    ({ prevPos, currPos }) => {
      hideNavOnScroll(currPos.y, prevPos.y);
      hideNavAfterScrollByLink(currPos.y);
      hideHeroOnScroll(currPos.y);
      handleSetDesktopNavVariant(currPos.y, prevPos.y);
      changeMoveByOnScroll(currPos.y);
      changeFooterMoveByOnScroll(currPos.y, prevPos.y);
    },
    [
      hideNavOnScroll,
      hideNavAfterScrollByLink,
      hideHeroOnScroll,
      handleSetDesktopNavVariant,
      changeMoveByOnScroll,
      changeFooterMoveByOnScroll,
    ]
  );

  useEffect(() => {
    // back to scroll pos before hamburger menu was opened.
    if (isMobile) {
      const html = document.querySelector('html');
      if (isHamburgerOpen && html) {
        setLastScrollY(window.scrollY);
        html.style.scrollBehavior = 'auto';
      }
      if (!isHamburgerOpen && html) {
        window.scrollTo(0, lastScrollY);
        html.style.scrollBehavior = 'smooth';
      }
    }
  }, [isHamburgerOpen, isMobile]);

  useEffect(() => {
    if (viewportWidth && viewportWidth >= 768 && isMobile) {
      setIsMobile(false);
    }
    if (viewportWidth && viewportWidth < 768 && !isMobile) {
      setIsMobile(true);
    }
  }, [viewportWidth, isMobile]);

  const values = {
    isMobile,
    isHamburgerOpen,
    isNavHidden,
    isHideHero,
    isScrolling,
    desktopNavVariant,
    moveBy,
    footerPage,
    handleSetScrolling,
    handleToggleHamburger,
  };

  return <IndexContext.Provider value={values}>{children}</IndexContext.Provider>;
};

export default IndexContextProvider;
