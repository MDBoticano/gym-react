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
  StyledTagDefault,
  StyledTagActive,
} from './style';

import { DummyTags } from '../../data/DummyTags';

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

  const [formInputs, setFormInputs] = useState({...initialFormState});

  const handleFormChange = (fieldChanged, event) => {
    const newValue = event.target.value;
    const newInputs = {
      ...formInputs,
      [fieldChanged] : newValue
    };

    setFormInputs(newInputs);
  }

  const toggleHidden = () => setHidden(!hidden);

  const resetForm = () => {
    const newFormInputs = {...initialFormState};
    newFormInputs.tags = [];
    setFormInputs(newFormInputs);
  }

  

  const closeForm = (event) => {
    event.preventDefault();
    toggleHidden();
    resetForm();
  }

  const closeFormModal = (event) => {
    const target = event.target;
    console.log(event.type);

    // Close method 1: click outside the modal on the container (background)
    if (event.type === "click" && target.className.includes("modal-overlay")) {
      closeForm(event);
    }
    // Close method 2: pressing escape
    // TODO: doesn't work until the form is focused
    if (event.type === "keydown" && event.keyCode === 27) {
      closeForm(event);
    }
  }

  const handleFormSubmit = (event) => {
    event.preventDefault();
    addExercise(formInputs);
    toggleHidden();
    resetForm();
  };

  /* Tags Adding Handler */
  const AddTags = ({ formInputs }) => {
    const allTags = DummyTags; 

    const addTagToState = (tag) => {
      const newInputs = {...formInputs};
      newInputs.tags.push(tag);
      setFormInputs(newInputs);
    }

    const removeTagFromState = (tagToRemove) => {
      const newInputs = {...formInputs};
      newInputs.tags = newInputs.tags.filter(tag => tag !== tagToRemove);
      setFormInputs(newInputs);
    }

    const makeTagComponents = (tagsStrings) => {
      const tagComponents = tagsStrings.map((tag) => {
        const isSelected = formInputs.tags.includes(tag);

        const tagButton = isSelected ? 
        <StyledTagActive onClick={() => removeTagFromState(tag)} key={tag}>
            {tag}
        </StyledTagActive> :
        <StyledTagDefault onClick={() => addTagToState(tag)} key={tag}>
            {tag}
        </StyledTagDefault>

        return tagButton;
      });

      return tagComponents;
    }
    
    return (
      <div className="AddTags">
        {makeTagComponents(allTags)}
      </div>
    );
  }
  
  if (hidden) { return <CallToAction callback={toggleHidden} /> }

  return (
    <StyledFormContainer className="modal-overlay" tabIndex="0"
      onClick={(event) => closeFormModal(event)}
      onKeyDown={(event) => closeFormModal(event)}
    >
      <StyledForm>
        <StyledFormEntry>
          <StyledLabel htmlFor="name">Name</StyledLabel>
          <StyledInput 
            name="name"
            type="text"
            value={formInputs.name}
            onChange={(event) => handleFormChange('name', event)}
          />
        </StyledFormEntry>

        <StyledFormEntry>
          <StyledLabel htmlFor="description">Description</StyledLabel>
          <StyledTextArea
            name="description"
            type="textarea"
            value={formInputs.description}
            onChange={(event) => handleFormChange('description', event)}
          />
        </StyledFormEntry>

        <StyledFormEntry>
          <StyledLabel htmlFor="tags">Tags</StyledLabel>
          <AddTags formInputs={formInputs} />
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
