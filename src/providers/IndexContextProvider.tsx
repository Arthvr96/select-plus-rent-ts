import React, { ReactNode, useCallback, useContext, useEffect, useState } from 'react';
import { useScrollPosition } from '@n8tb1t/use-scroll-position';

interface IIndexContextProvider {
  children: ReactNode;
}

interface IUseIndexContext {
  isHamburgerOpen: boolean;
  isNavHidden: boolean;
  isHideHero: boolean;
  isFixed: boolean;
  moveBy: number;
  handleToggleHamburger: () => void;
}

const IndexContext = React.createContext({});

export const useIndexContext = (): IUseIndexContext => {
  return useContext(IndexContext) as IUseIndexContext;
};

const IndexContextProvider = ({ children }: IIndexContextProvider) => {
  const [isHamburgerOpen, setHamburger] = useState(false);
  const [isNavHidden, setNav] = useState(false);
  const [isHideHero, setIsHideHero] = useState(false);
  const [isFixed, setFixed] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [moveBy, setMoveBy] = useState(0);

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

  const changeFooterPosOnScroll = useCallback((currPos: number) => {
    const body = document.querySelector('body');
    if (body) {
      const viewportHeight = window.innerHeight;
      const bodyHeight = -1 * (body.getBoundingClientRect().height - viewportHeight);

      if (currPos <= bodyHeight + viewportHeight) {
        setFixed(false);
      } else {
        setFixed(true);
      }
    }
  }, []);

  useScrollPosition(
    ({ prevPos, currPos }) => {
      hideNavOnScroll(currPos.y, prevPos.y);
      hideHeroOnScroll(currPos.y);
      changeMoveByOnScroll(currPos.y);
      changeFooterPosOnScroll(currPos.y);
    },
    [hideNavOnScroll, hideHeroOnScroll, changeMoveByOnScroll, changeFooterPosOnScroll]
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
    isFixed,
    moveBy,
    handleToggleHamburger,
  };

  return <IndexContext.Provider value={values}>{children}</IndexContext.Provider>;
};

export default IndexContextProvider;
