import React from 'react';
import { act } from 'test-utils';
import { useIndexContext } from 'providers/IndexContextProvider';

const triggerResize = (dimension: 'width' | 'height', value: number) => {
  if (dimension === 'width') {
    (window.innerWidth as number) = value;
  }
  if (dimension === 'height') {
    (window.innerHeight as number) = value;
  }
  window.dispatchEvent(new Event('resize'));
};

export const setWindowSize = (dimension: 'width' | 'height', value: number) => {
  if (dimension === 'width') {
    act(() => {
      triggerResize('width', value);
    });
  }

  if (dimension === 'height') {
    act(() => {
      triggerResize('height', value);
    });
  }
};

export const IndexTestingComponent = ({ testID }: { testID?: number }) => {
  const {
    isMobile,
    isHamburgerOpen,
    isScrolling,
    isNavHidden,
    handleToggleHamburger,
    handleSetScrolling,
  } = useIndexContext();
  switch (testID) {
    case 0:
      return <p data-testid="isMobile">{isMobile.toString()}</p>;
    case 1:
      return (
        <>
          <button onClick={handleToggleHamburger}>hamburger</button>
          <p data-testid="isHamburgerOpen">{isHamburgerOpen.toString()}</p>;
        </>
      );
    case 2:
      return (
        <>
          <button onClick={handleSetScrolling}>scrollTo</button>
          <p data-testid="isScrolling">{isScrolling.toString()}</p>
          <p data-testid="isNavHidden">{isNavHidden.toString()}</p>
        </>
      );
  }
  return <p>default</p>;
};
