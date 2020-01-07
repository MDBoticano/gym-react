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
  margin-bottom: 0.125rem;
  font-size: ${props => props.theme.fontSize.l};
`

export const StyledInput = styled.input`
  outline: none;

  padding: 0.5rem 0.5rem 0.25rem;

  font-size: ${props => props.theme.fontSize.m};
  line-height: 1.25rem;

  border: none;
  border-bottom: solid 2px hsl(0, 0%, 79%);
  border-radius: 0.25rem 0.25rem 0 0;
  background-color: hsl(0, 0%, 89%);
`;

export const StyledTextArea = styled.textarea`
  height: 7rem;
  box-sizing: border-box;
  resize: none;
  outline: none;

  padding: 0.5rem 0.5rem 0;

  font-size: ${props => props.theme.fontSize.m};
  line-height: 1.25rem;

  border: none;
  border-bottom: solid 2px hsl(0, 0%, 79%);
  border-radius: 0.25rem 0.25rem 0 0;
  background-color: hsl(0, 0%, 89%);
`;

export const StyledFormEntry = styled.div`
  margin: 0;
  margin-bottom: 1rem;

  display: flex;
  flex-direction: column;
`;

export const StyledFormControls = styled.div`
  width: 100%;
  padding: 0.5rem 0;

  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 0.5rem;
`;

export const StyledFormContainer = styled.div`
  margin: 0;
  padding: 0;
  
  height: 100vh;
  width: inherit;

  position: fixed;
  bottom: 0;

  z-index: 100;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: hsla(0, 0%, 20%, 50%);
`;

export const StyledTagDefault = styled.button`
  appearance: none;
  outline: none;

  height: 2rem;
  
  box-sizing: none;

  margin: 0.25rem 0.5rem 0.25rem 0;
  padding: 0.25rem 0.5rem;
  

  border: solid 1px grey;
  border-radius: 0.25rem;

  font-size: ${props => props.theme.fontSize.m};


`;

export const StyledTagActive = styled(StyledTagDefault)`
  border: solid 1px rgba(0,0,0,0);

  color: white;
  background-color: blue;
`;


export const StyledEditButton = styled.div`
  appearance: none;
  margin: 0.25rem;

  border: none;

  background: ${props => props.theme.icons.edit} center no-repeat;
  background-size: contain;

  :hover {
    cursor: pointer;
  }
`;
