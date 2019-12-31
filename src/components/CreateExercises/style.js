import styled from 'styled-components';

export const StyledCallToAction = styled.button`
  appearance: none;

  margin: 0;
  padding: 0;

  height: 4rem;

  font-family: ${props => props.theme.fonts.standard};
  font-size: ${props => props.theme.fontSize.l};

  color: blue;
  background-color: white;


`;

export const StyledForm = styled.form`



  display: flex;
  flex-direction: column;

`;

export const StyledFormContainer = styled.div`
  margin: 0;
  padding: 0;
  
  height: 100vh;
  width: 414px;

  position: fixed;
  bottom: 0;

  z-index: 100;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: hsla(0, 0%, 20%, 50%);
`;
