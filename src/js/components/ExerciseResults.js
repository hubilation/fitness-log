import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import SetResult from "./SetResult";

const ResultContainer = styled.div`
  width: 900px;
  display: flex;
  flex-flow: column;
  justify-content: center;
`;

const mapStateToProps = state => ({
  setResults: state
});

const ExerciseResults = props => {
  return (
    <ResultContainer>
      {props.setResults.map(value => (
        <SetResult updateField={() => {}} setResult={value} />
      ))}
    </ResultContainer>
  );
};

export default connect(mapStateToProps)(ExerciseResults);
