import React from "react";
import styled from "styled-components";
import SetResult from "./SetResult";

const ResultContainer = styled.div`
  width: 900px;
  display: flex;
  flex-flow: column;
  justify-content: center;
`;

const ExerciseResults = () => {
  return (
    <ResultContainer>
      <SetResult />
      <SetResult />
      <SetResult />
    </ResultContainer>
  );
};

export default ExerciseResults;