import React, { ReactNode, useContext, useEffect, useState } from 'react';
import { useScrollPosition } from '@n8tb1t/use-scroll-position';

interface IIndexContextProvider {
  children: ReactNode;
}

interface IUseIndexContext {
  isHamburgerOpen: boolean;
  isNavHidden: boolean;
  isHideHero: boolean;
  isFixed: boolean;
  heroMoveBy: boolean;
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
  const [heroMoveBy, setHeroMoveBy] = useState(0);

  useScrollPosition(
    ({ prevPos, currPos }) => {
      const isHide = currPos.y < prevPos.y && currPos.y < -100 && !isHamburgerOpen;
      if (isHide !== isNavHidden) setNav(isHide);
    },
    [isNavHidden, isHamburgerOpen]
  );

  useScrollPosition(
    ({ currPos }) => {
      if (currPos.y >= -window.innerHeight) {
        if (isHideHero) {
          setIsHideHero(false);
        }
        setHeroMoveBy(Math.round(currPos.y * 0.5));
      } else if (currPos.y < -window.innerHeight && !isHideHero) {
        setIsHideHero(true);
      }
    },
    [isHideHero]
  );

  useScrollPosition(({ currPos }) => {
    const body = document.querySelector('body');
    if (body) {
      const viewportHeight = window.innerHeight;
      const bodyHeight = -1 * (body.getBoundingClientRect().height - viewportHeight);

      if (currPos.y <= bodyHeight + viewportHeight) {
        setFixed(false);
      } else {
        setFixed(true);
      }
    }
  }, []);

  const handleToggleHamburger = () => {
    setHamburger(!isHamburgerOpen);
  };

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
    heroMoveBy,
    handleToggleHamburger,
  };

  return <IndexContext.Provider value={values}>{children}</IndexContext.Provider>;
};

export default IndexContextProvider;
