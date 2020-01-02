import React, { useState } from 'react';

import {
  StyledLabel,
  StyledInput,
  StyledTextArea,
  StyledSubmitForm,
  StyledCancelForm,
  StyledFormEntry,
  StyledFormControls,
  StyledForm,
  StyledFormContainer,
  StyledCallToAction,
} from './style';

const CallToAction = ({ callback }) => {
  return (
    <StyledCallToAction onClick={() => callback()}>
      Create an Exercise
    </StyledCallToAction>
  );
}

const initialFormState = { name: "", description: "", tags: [] };

export const CreateExercises = ({ addExercise }) => {
  const [hidden, setHidden] = useState(true);

  const [formInputs, setFormInputs] = useState(initialFormState);

  const handleFormChange = (fieldChanged, event) => {
    const newValue = event.target.value;
    const newInputs = {
      ...formInputs,
      [fieldChanged] : newValue
    };

    setFormInputs(newInputs);
  }

  const toggleHidden = () => setHidden(!hidden);

  const closeForm = (event) => {
    event.preventDefault();
    toggleHidden();
    setFormInputs(initialFormState);
  }

  const handleFormSubmit = (event) => {
    event.preventDefault();
    addExercise(formInputs);
    toggleHidden();
  };

  if (hidden) { return <CallToAction callback={toggleHidden} /> }

  return (
    <StyledFormContainer>
      <StyledForm>
        <StyledFormEntry>
          <StyledLabel htmlFor="name">Name:</StyledLabel>
          <StyledInput 
            name="name"
            type="text"
            value={formInputs.name}
            onChange={(event) => handleFormChange('name', event)}
          />
        </StyledFormEntry>

        <StyledFormEntry>
          <StyledLabel htmlFor="description">Description:</StyledLabel>
          <StyledTextArea
            name="description"
            type="textarea"
            value={formInputs.description}
            onChange={(event) => handleFormChange('description', event)}
          />
        </StyledFormEntry>   
       
        <StyledFormControls>
          <StyledCancelForm onClick={(event) => closeForm(event)}>
            cancel
          </StyledCancelForm>
          <StyledSubmitForm
            type="submit"
            onClick={(event) => handleFormSubmit(event)}
          >
            Submit
          </StyledSubmitForm>
        </StyledFormControls>
      </StyledForm>
    </StyledFormContainer>
  );
};
