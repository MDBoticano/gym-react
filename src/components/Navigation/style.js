import styled from 'styled-components';

export const StyledNavItem = styled.div`
  margin: 0;
  
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const NavItemIcon = styled.img`
  margin: 0;
  padding: 0;
  height: 44px;
`;

export const NavItemLabel = styled.p`
  margin: 0;
  padding: 0;

  font-family: ${props => props.theme.fonts.standard};
  font-size: ${props => props.theme.fontSize.s};
  line-height: 1rem;
`;

export const StyledNavigation = styled.div`
  height: 4.5rem;

  display: grid;
  grid-template-columns: repeat(3, 1fr);

  background-color: white;
  box-shadow: 0px -2px 4px rgba(0,0,0, 0.5);

  position: fixed;
  bottom: 0;
  width: 414px;
`;
