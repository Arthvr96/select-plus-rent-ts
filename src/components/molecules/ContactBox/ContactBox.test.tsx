import React from 'react';
import { render, screen } from 'test-utils';
import ContactBox from './ContactBox';

describe('ContactBox', () => {
  it('should has set style transform to translateY(100%)', () => {
    render(<ContactBox isVisible={false} />);
    const contactBox = screen.getByText(/^Telefon:$/).parentElement;

    expect(contactBox).toHaveStyle({
      transform: 'translateY(100%)',
    });
  });
  it('should has set style transform to translateY(0)', () => {
    render(<ContactBox isVisible={true} />);
    const contactBox = screen.getByText(/^Telefon:$/).parentElement;

    expect(contactBox).toHaveStyle({
      transform: 'translateY(0)',
    });
  });
});
