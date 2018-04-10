import React from "react";
import styled from "styled-components";
import MdExpandMore from "react-icons/lib/md/expand-more";
import MdExpandLess from "react-icons/lib/md/expand-less";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
`;

const DescriptionContainer = styled.div`
  font-size: 48px;
  flex: 1;
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
`;

const WeightGoalContainer = styled.div`
  flex: 1;
  font-size: 140px;
  text-align: center;
  font-weight: 700;
`;
const IconContainer = styled.div`
  flex: initial;
  font-size: 75px;
`;

const ExerciseDescription = ({ handleClick, isExpanded }) => {
  return (
    <Wrapper>
      <DescriptionContainer>
        <div>Bench Press</div>
        <div>3x 8-12</div>
      </DescriptionContainer>
      <WeightGoalContainer>135</WeightGoalContainer>
      <IconContainer onClick={handleClick}>
       {isExpanded ? <MdExpandLess/> : <MdExpandMore />}
      </IconContainer>
    </Wrapper>
  );
};

export default ExerciseDescription;
