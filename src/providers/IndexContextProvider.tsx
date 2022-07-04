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
  const [scrollY, setScrollY] = useState(0);

  const handleToggleHamburger = () => {
    setHamburger(!isHamburgerOpen);
  };

  const handleHideNav = useCallback(
    (currPos: number, prevPos: number) => {
      const isHide = currPos < prevPos && currPos < -100 && !isHamburgerOpen;
      if (isHide !== isNavHidden) setNav(isHide);
    },
    [isNavHidden, isHamburgerOpen]
  );

  const handleHideHero = useCallback(
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

  const handleChangeFooterPosition = useCallback((currPos: number) => {
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
      handleHideNav(currPos.y, prevPos.y);
      handleHideHero(currPos.y);
      handleChangeFooterPosition(currPos.y);
    },
    [handleHideNav, handleHideHero, handleChangeFooterPosition]
  );

  useEffect(() => {
    // back to scroll pos before hamburger menu was opened.
    const html = document.querySelector('html');
    if (isHamburgerOpen && html) {
      setScrollY(window.scrollY);
      html.style.scrollBehavior = 'auto';
    }
    if (!isHamburgerOpen && html) {
      window.scrollTo(0, scrollY);
      html.style.scrollBehavior = 'smooth';
    }
  }, [isHamburgerOpen]);

  const values = {
    isHamburgerOpen,
    isNavHidden,
    isHideHero,
    isFixed,
    handleToggleHamburger,
  };

  return <IndexContext.Provider value={values}>{children}</IndexContext.Provider>;
};

export default IndexContextProvider;
