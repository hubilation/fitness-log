import React from "react";
import styled from "styled-components";
import LogRecord from './LogRecord';

class ExerciseSession extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <LogRecord />
        <LogRecord />
      </div>
    );
  }
}



export default ExerciseSession;
