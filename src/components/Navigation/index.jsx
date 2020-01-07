import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';

import { 
  StyledNavigation,
  StyledNavItem,
  NavItemIcon,
  NavItemLabel,
} from './style';

export const NavItem = ({ src, label }) => {
  return (
    <StyledNavItem >
      <NavItemIcon src={src} alt={label} />
      <NavItemLabel>{label}</NavItemLabel>
    </StyledNavItem>
  );
};

export const Navigation = () => {
  const theme = useContext(ThemeContext);
  return (
    <StyledNavigation theme={theme} >
      <NavItem
        src="images/Exercises.svg"
        label="exercises"
      />
      <NavItem
        src="images/Workouts.svg"
        label="workouts"
      />
      <NavItem
        src="images/Profile.svg"
        label="profile"
      />
    </StyledNavigation>
  );
};
