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

  width: 414px;

  position: fixed;
  bottom: 0;

  z-index: 100;
`;

const StyledFormButton = styled.button`
  height: 2.5rem;
  width: 100%;

  border: none;

  border-radius: 0.5rem;

  font-size: ${props => props.theme.fontSize.m};
`;

export const StyledSubmitForm = styled(StyledFormButton)`

  color: white;
  background-color: blue;
`;

export const StyledCancelForm = styled(StyledFormButton)`
  box-sizing: border-box;

  color: red;
  border: solid red 1px;
  background-color: white;
`;

export const StyledForm = styled.form`
  margin: 1rem;
  padding: 3rem;

  width: 100%;


  font-family: ${props => props.theme.fonts.standard};

  background-color: white;

  border-radius: 0.5rem;
`;

export const StyledLabel = styled.label`
  font-size: ${props => props.theme.fontSize.m};
`

export const StyledInput = styled.input`
  font-size: ${props => props.theme.fontSize.m};
`;

export const StyledTextArea = styled.textarea`
  font-size: ${props => props.theme.fontSize.m};
  line-height: 1.25rem;
  height: 5rem;
`;

export const StyledFormEntry = styled.div`
  margin: 0;
  margin-bottom: 0.5rem;

  display: flex;
  flex-direction: column;
`;

export const StyledFormControls = styled.div`
  width: 100%;
  padding: 0.5rem 0;

  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 0.25rem;
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
