import React, { useState } from 'react';

import {
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

export const CreateExercises = ({ addExercise }) => {
  const [hidden, setHidden] = useState(false);

  const [formInputs, setFormInputs] = useState({
    name: "",
    description: "",
    tags: []
  });

  const handleFormChange = (fieldChanged, event) => {
    const newValue = event.target.value;
    const newInputs = {
      ...formInputs,
      [fieldChanged] : newValue
    };

    setFormInputs(newInputs);
  }

  const toggleHidden = () => setHidden(!hidden);

  const handleFormSubmit = (event) => {
    event.preventDefault();
    addExercise(formInputs);
    toggleHidden();
  };

  if (hidden) { return <CallToAction callback={toggleHidden} /> }

  return (
    <StyledFormContainer>
      <StyledForm onSubmit={handleFormSubmit}>
        <label>
          Name:
          <input 
            type="text"
            value={formInputs.name}
            onChange={(event) => handleFormChange('name', event)}
          />
        </label>
        <label>
          Description:
          <input 
            type="text"
            value={formInputs.description}
            onChange={(event) => handleFormChange('description', event)}
          />
        </label>
        <input type="submit" value="Submit" />
      </StyledForm>
    </StyledFormContainer>
  );
};
