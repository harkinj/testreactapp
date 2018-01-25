import React, { Component } from 'react';

function Dialog(props) {
  return (
    <div color="blue">
      <h1 className="Dialog-title">
        {props.title}
      </h1>
      <p className="Dialog-message">
        {props.message}
      </p>
      {props.children}
    </div>
  );
}

export default Dialog;
