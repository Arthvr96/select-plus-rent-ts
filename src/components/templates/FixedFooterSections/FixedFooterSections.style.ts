import styled from 'styled-components';

export const FixedSection = styled.div`
  position: ${({ isFixed }: { isFixed: boolean }) => (isFixed ? 'fixed' : 'static')};
  top: 0;
  left: 0;
  z-index: -1;
  transform: translateY(${({ isFixed }: { isFixed: boolean }) => (!isFixed ? '100px' : 0)});
`;
