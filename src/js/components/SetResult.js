import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 0;
  width: 100%;
`;

const RepContainer = styled.div`
  flex: 1;
  text-align: center;
`;

const RepInput = styled.input`
  width: 250px;
  height: 150px;
  border: 1px solid black;
  margin: 0 auto;
  font-size: 75px;
  text-align: center;
`;

const Weight = styled.div`
  flex: 1;
  font-size: 75px;
  text-align: center;
`;

//updateField should be a redux thing, take an exercise id, a set id, and a field name, plus the new value

const SetResult = ({reps, weight, updateField}) => {
  return (
    <Container>
      <RepContainer>
        <RepInput value={reps} onChange={updateField} />
      </RepContainer>
      <Weight>{weight}</Weight>
    </Container>
  );
};

export default SetResult;
