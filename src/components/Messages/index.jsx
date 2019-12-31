import React from 'react';

import {
  StyledDefaultMessage,
  StyledErrorMessage,
  StyledSuccessMessage,
} from './style';

const createMessage = (Component, props) => {
  const { message } = props;
  if (message === "") {
    return;
  }

  return (
    <Component>{message}</Component>
  );
};

export const displayMessage = (message, type = "") => {
  switch (type) {
    case "" || "default":
      return <DefaultMessage message={message} />
    case "error":
      return <ErrorMessage message={message} />
    case "success": 
      return <SuccessMessage message={message} />
    default:
      return;
  }
}

export const DefaultMessage = (props) => 
  createMessage(StyledDefaultMessage, props);

export const ErrorMessage = (props) => 
  createMessage(StyledErrorMessage, props);

export const SuccessMessage = (props) => 
  createMessage(StyledSuccessMessage, props);
