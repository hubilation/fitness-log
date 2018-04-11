import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import SetResult from "./SetResult";

import { updateAction } from "../store/setResult";
import { addSetAction } from "../store/exerciseResults";
import bindIndexToActionCreators from "../store/bindIndexToActionCreators";

const ResultContainer = styled.div`
  width: 900px;
  display: flex;
  flex-flow: column;
  justify-content: center;
`;

const mapStateToProps = state => ({
  setResults: state.exerciseResults.results,
  startWeight: state.exerciseResults.startWeight
});

const setDispatchProperties = index => dispatch => ({
  updateField(field, value) {
    dispatch(bindIndexToActionCreators(updateAction, index)(field, value));
  }
});

const mapDispatchToProps = dispatch => ({
  addSet(startWeight) {
    dispatch(addSetAction(startWeight));
  },
  dispatch
})

const ExerciseResults = props => {
  return (
    <ResultContainer>
      {props.setResults.map((value, index) => (
        <SetResult
          key={index}
          setResult={value}
          {...setDispatchProperties(index)(props.dispatch)}
        />
      ))}
      <div onClick={()=>props.addSet(props.startWeight)}>Add Set</div>
    </ResultContainer>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(ExerciseResults);
