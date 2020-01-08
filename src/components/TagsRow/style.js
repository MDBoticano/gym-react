import styled from 'styled-components';

export const StyledButton = styled.button`
  height: 1.75rem;
  
  margin: 0.25rem 0 0;
  padding: 0 0.5rem;

  border: solid 1px hsl(0, 0%, 59%);

  border-radius: 0.25rem;

  font-family: ${props => props.theme.fonts.standard};
  font-size: ${props => props.theme.fontSize.s};
  line-height: 1.25rem;

  color: hsl(0, 0%, 59%);
  background-color: white;
  outline: none;

  &:not(:last-child) {
    margin-right: 0.25rem;
  }

  :hover {
    border: solid 1px hsl(0, 0%, 39%);
    color: white;
    background-color: hsl(0, 0%, 39%);
  }
`;

export const StyledRow = styled.div`
  height: ${props => props.collapsed ? '2rem' : 'auto'};
  overflow: ${props => props.collapsed ? 'hidden' : 'hidden'};
`;
