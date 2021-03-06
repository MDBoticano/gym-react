import styled from 'styled-components';

export const StyledCard = styled.div`
  margin: 0.5rem 0;
  padding: 1rem;
  border-radius: 0.5rem;

  background-color: white;
  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.5);

  &:hover {
    box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.25);
  }

  .card-grid {
    display: grid;
    grid-template-columns: 1fr 1.5rem;
  }
`;

export const CardTitle = styled.p`
  margin: 0;

  font-family: ${props => props.theme.fonts.standard};
  font-size: ${props => props.theme.fontSize.xl};
  line-height: 1.75rem;
`;

export const CardDescription = styled.p`
visibility: ${props => props.collapsed ? 'hidden' : 'visible' };

margin: ${props => props.collapsed ? '0' : '0.25rem'} 0;
padding: 0;

max-height: ${props => props.collapsed ? '0' : 'auto'};

overflow: hidden;

font-family: ${props => props.theme.fonts.standard};
font-size: ${props => props.theme.fontSize.m};
line-height: 1.25rem;

color: gray;
`;

export const CardToggle = styled.div`
margin: 0.375rem auto;
padding: 0;

height: 1rem;
width: 1rem;

background-image: ${props => props.collapsed ? 
  props.theme.icons.expand : props.theme.icons.collapse
};
background-size: cover;

`;

export const CardActions = styled.div`
  margin: 0;
  padding: 0;

  display: grid;
  grid-template-columns: 1fr 1.5rem 1.5rem;
  grid-gap: 0.5rem;
`;

export const DeleteButton = styled.div`
  appearance: none;
  margin: 0.25rem;

  border: none;

  background: ${props => props.theme.icons.trash} center no-repeat;
  background-size: contain;

  :hover {
    cursor: pointer;
  }
`;