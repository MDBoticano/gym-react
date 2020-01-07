import styled from 'styled-components';

export const StyledExercises = styled.div`
  height: 100vh;
  width: inherit;

  margin: 0;
  padding: 0;

  display: flex;
  flex-direction: column;
`;

export const StyledHeader = styled.header`
  margin: 0;
  padding-top: 1.5rem;

  background-color: white;

  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);

  /* so cards are below the header despite sibling */
  z-index: 100; 

  .page-title {
    margin: 0;
    padding: 0;

    padding-left: 1rem;

    font-family: ${props => props.theme.fonts.standard};
    font-size: ${props => props.theme.fontSize.xxl};
    line-height: 2.5rem;
  }
`;

export const StyledList = styled.div`
  margin: 0;
  margin-bottom: 4rem; /* height of add exercise button */
  padding: 0 0.5rem;

  overflow: auto;
`;

export const StyledEmptyResult = styled.div`
  margin: 0.5rem 0;
  padding: 1rem;

  color: hsl(0, 0%, 29%);

  font-family: ${props => props.theme.fonts.standard};
  font-size: ${props => props.theme.fontSize.l};

  text-align: center;
`;
