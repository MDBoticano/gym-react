import React from 'react';
import styled from 'styled-components';

const StyledNavItem = styled.div`
  margin: 0;
  
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .NavItem__icon {
    margin: 0;
    padding: 0;
    height: 44px;
  }

  .NavItem__label {
    margin: 0;
    padding: 0;

    font-size: .75rem;
    line-height: 1rem;
  }
`

const NavItem = ({ src, label }) => {
  console.log(src);
  return (
    <StyledNavItem className="NavItem" onClick={()=> console.log('click')}>
      <img className="NavItem__icon" src={src} alt={label} />
      <p className="NavItem__label">{label}</p>
    </StyledNavItem>
  );
}


const StyledNavigation = styled.div`
  height: 4.5rem;

  display: grid;
  grid-template-columns: repeat(3, 1fr);

  background-color: white;
  box-shadow: 0px -2px 4px rgba(0,0,0, 0.5);
`


const Navigation = () => {
  return (
    <StyledNavigation>
      <NavItem
        src="images/Workouts.svg"
        label="workouts"
      />
    </StyledNavigation>
  );
};

export default Navigation;