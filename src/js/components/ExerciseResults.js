import React from "react";
import styled from "styled-components";
import SetResult from "./SetResult";

const ResultContainer = styled.div`
  width: 900px;
  display: flex;
  flex-flow: column;
  justify-content: center;
`;

//TODO: create shape of data, updates should probably be immediately saved to server in case of reload, at this point data will probably want to look as follows:
var data = [
  {
    reps: 0,
    weight: 135
  },
  {
    reps: 0,
    weight: 135
  },
  {
    reps: 0,
    weight: 135
  },
];

const ExerciseResults = () => {
  return (
    <ResultContainer>
      <SetResult reps={10} weight={135}/>
      <SetResult />
      <SetResult />
    </ResultContainer>
  );
};

export default ExerciseResults;
