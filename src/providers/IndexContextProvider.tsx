import React, { ReactNode, useCallback, useContext, useEffect, useState } from 'react';
import { useScrollPosition } from '@n8tb1t/use-scroll-position';
import { useWindowSize } from 'hooks/useWindowSize';

interface IIndexContextProvider {
  children: ReactNode;
}

interface IUseIndexContext {
  isHamburgerOpen: boolean;
  isNavHidden: boolean;
  isHideHero: boolean;
  moveBy: number;
  footerMoveBy: number;
  handleToggleHamburger: () => void;
}

const IndexContext = React.createContext({});

export const useIndexContext = (): IUseIndexContext => {
  return useContext(IndexContext) as IUseIndexContext;
};

const IndexContextProvider = ({ children }: IIndexContextProvider) => {
  const { height: viewportHeight } = useWindowSize();
  const [isHamburgerOpen, setHamburger] = useState(false);
  const [isNavHidden, setNav] = useState(false);
  const [isHideHero, setIsHideHero] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [moveBy, setMoveBy] = useState(0);
  const [footerMoveBy, setFooterMoveBy] = useState(0);
  let bodyRef: HTMLBodyElement | null = null;

  const handleToggleHamburger = () => {
    setHamburger(!isHamburgerOpen);
  };

  const hideNavOnScroll = useCallback(
    (currPos: number, prevPos: number) => {
      const isHide = currPos < prevPos && currPos < -100 && !isHamburgerOpen;
      if (isHide !== isNavHidden) setNav(isHide);
    },
    [isNavHidden, isHamburgerOpen]
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
    (currPos: number) => {
      if (!bodyRef) {
        bodyRef = document.querySelector('body');
      }
      if (bodyRef && viewportHeight) {
        const bodyHeight = -1 * (bodyRef.getBoundingClientRect().height - viewportHeight);
        const parallaxScrollPos = Math.round(bodyHeight - currPos + viewportHeight) * -1;

        if (currPos <= bodyHeight + viewportHeight) {
          if (currPos <= bodyHeight + 5) {
            setFooterMoveBy(-viewportHeight);
          } else {
            setFooterMoveBy(parallaxScrollPos);
          }
        } else {
          if (footerMoveBy === 0) {
            setFooterMoveBy(0);
          }
        }
      }
    },
    [viewportHeight, bodyRef]
  );

  useScrollPosition(
    ({ prevPos, currPos }) => {
      hideNavOnScroll(currPos.y, prevPos.y);
      hideHeroOnScroll(currPos.y);
      changeMoveByOnScroll(currPos.y);
      changeFooterMoveByOnScroll(currPos.y);
    },
    [hideNavOnScroll, hideHeroOnScroll, changeMoveByOnScroll, changeFooterMoveByOnScroll]
  );

  useEffect(() => {
    // back to scroll pos before hamburger menu was opened.
    const html = document.querySelector('html');
    if (isHamburgerOpen && html) {
      setLastScrollY(window.scrollY);
      html.style.scrollBehavior = 'auto';
    }
    if (!isHamburgerOpen && html) {
      window.scrollTo(0, lastScrollY);
      html.style.scrollBehavior = 'smooth';
    }
  }, [isHamburgerOpen]);

  const values = {
    isHamburgerOpen,
    isNavHidden,
    isHideHero,
    moveBy,
    footerMoveBy,
    handleToggleHamburger,
  };

  return <IndexContext.Provider value={values}>{children}</IndexContext.Provider>;
};

export default IndexContextProvider;
