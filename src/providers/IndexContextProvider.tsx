import React, { ReactNode, useContext, useEffect, useState } from 'react';
import { useScrollPosition } from '@n8tb1t/use-scroll-position';

interface IIndexContextProvider {
  children: ReactNode;
}

interface IUseIndexContext {
  isHamburgerOpen: boolean;
  isNavHidden: boolean;
  handleToggleHamburger: () => void;
  handleHideNav: () => void;
  heroMoveBy: number;
  footerMoveBy: number;
  isHideHero: boolean;
}

const IndexContext = React.createContext({});

export const useIndexContext = (): IUseIndexContext => {
  return useContext(IndexContext) as IUseIndexContext;
};

const IndexContextProvider = ({ children }: IIndexContextProvider) => {
  const [hideOnEndScroll, setHideOnEndScroll] = useState(false);
  const [isHamburgerOpen, setHamburger] = useState(false);
  const [isNavHidden, setNav] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [heroMoveBy, setHeroMoveBy] = useState(0);
  const [footerMoveBy, setFooterMoveBy] = useState(0);
  const [isHideHero, setIsHideHero] = useState(false);
  let intervalId: number;

  useScrollPosition(
    ({ currPos }) => {
      if (hideOnEndScroll) {
        window.clearTimeout(intervalId);
        intervalId = window.setTimeout(() => {
          if (currPos.y < -50) {
            setNav(true);
          }
          setHideOnEndScroll(false);
        }, 50);
      }
    },
    [hideOnEndScroll]
  );

  useScrollPosition(
    ({ prevPos, currPos }) => {
      const isHide = currPos.y < prevPos.y && currPos.y < -100 && !isHamburgerOpen;
      if (isHide !== isNavHidden) setNav(isHide);
    },
    [isNavHidden, isHamburgerOpen]
  );

  useScrollPosition(
    ({ prevPos, currPos }) => {
      if (currPos.y >= -window.innerHeight) {
        if (isHideHero) {
          setIsHideHero(false);
        }
        setHeroMoveBy(Math.round(currPos.y * 0.5));
      } else if (currPos.y < -window.innerHeight && !isHideHero) {
        setIsHideHero(true);
      }

      const bodyRef = document.querySelector('body');

      if (bodyRef) {
        const siteHeight = bodyRef.getBoundingClientRect().height;
        const scrollCalc2 = -siteHeight + window.innerHeight * 2;
        if (currPos.y <= scrollCalc2) {
          if (prevPos.y - currPos.y > 0) {
            if (currPos.y + siteHeight - window.innerHeight < 20) {
              setFooterMoveBy(-window.innerHeight);
            } else {
              setFooterMoveBy(currPos.y + siteHeight - window.innerHeight * 2);
            }
          }
          if (prevPos.y - currPos.y < 0) {
            if (currPos.y + siteHeight - window.innerHeight > window.innerHeight - 20) {
              setFooterMoveBy(0);
            } else {
              setFooterMoveBy(currPos.y + siteHeight - window.innerHeight * 2);
            }
          }
        }
      }
    },
    [isHideHero]
  );

  const handleToggleHamburger = () => {
    setHamburger(!isHamburgerOpen);
  };

  const handleHideNav = () => {
    setHideOnEndScroll(true);
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
    handleToggleHamburger,
    handleHideNav,
    isNavHidden,
    heroMoveBy,
    isHideHero,
    footerMoveBy,
  };

  return <IndexContext.Provider value={values}>{children}</IndexContext.Provider>;
};

export default IndexContextProvider;
