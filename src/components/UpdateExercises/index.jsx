import React, { useState, useEffect } from 'react';

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
  StyledTagDefault,
  StyledTagActive,
  StyledEditButton
} from './style';

import gymServices from '../../services/gymServices';
import tagsServices from '../../services/tagsServices';

const ToggleForm = ({ callback }) => {
  return (<StyledEditButton onClick={() => callback()} />);
}

const initialFormState = { name: "", description: "", tags: [] };

export const UpdateExercises = ({ exercise, updateExercisesList }) => {
  const [hidden, setHidden] = useState(true);

  const [formInputs, setFormInputs] = useState({...initialFormState});

  const [tags, setTags] = useState([]);

  useEffect(() => {
    const getAndSetTags = async () => {
      const retrievedTags = await tagsServices.getTags();
      setTags(retrievedTags);
    }
    getAndSetTags();
  }, []);

  // Use the data from the current exercise to prefill the form
  useEffect(() => {
    setFormInputs(exercise);
  }, [exercise]);

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
    // console.log(event.type);

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

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    const convertFormInputsTags = (inputs) => {
      const inputsTags = inputs.tags;
      const stateTags = tags;
      
      const tagsObjs = inputsTags.map((tagName) => {
        return stateTags.find((tag) => tag.name === tagName);
      });
      console.log(tagsObjs);

      const tagsIDs = tagsObjs.map((obj) => obj.id);
      console.log(tagsIDs);

      const modifiedInputs = { ...inputs, tags: tagsIDs };
      console.log(modifiedInputs);

      return modifiedInputs;
    };

    const convertResponseTags = (response) => {
      const responseTags = response.tags;
      const stateTags = tags;

      const tagsObjs = responseTags.map((tagID) => {
        return stateTags.find((tag) => tag.id === tagID);
      });
      const tagsNames = tagsObjs.map((obj) => obj.name);
      const modifiedResponse = { ...response, tags: tagsNames };
      
      return modifiedResponse;
    }

    const exercise = convertFormInputsTags(formInputs);

    const updatedExercise = await gymServices.updateExercise(exercise, exercise.id);
    console.log(updatedExercise);

    // TODO Update app state with modified exercise
    const modifiedExercise = convertResponseTags(updatedExercise);
    console.log(modifiedExercise);
    updateExercisesList(modifiedExercise);

    toggleHidden();
    resetForm();
  };

  /* Tags Adding Handler */
  const AddTags = ({ formInputs }) => {
    const tagObjects = tags;
    // console.log(tagObjects);
    const allTags = tagObjects.map((tag) => tag.name);
    // const allTags = DummyTags;

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
  
  if (hidden) { return <ToggleForm callback={toggleHidden} /> }

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
