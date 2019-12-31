import styled from 'styled-components';

export const StyledDefaultMessage = styled.div`
  margin: 0;
  padding: 0.25rem 0.5rem;

  border-radius: 0.25rem;

  font-family: ${props => props.theme.fonts.standard};
  font-size: ${props => props.theme.fontSize.m};

  background-color: white;
`;

export const StyledErrorMessage = styled(StyledDefaultMessage)`
  color: white;
  background-color: red;
`;

export const StyledSuccessMessage = styled(StyledDefaultMessage)`
  color: white;
  background-color: green;
`;
