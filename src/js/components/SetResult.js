import React from "react";
import { connect } from "react-redux";
import { updateAction } from "../store/setResult";
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

class SetResult extends React.Component {
  constructor(props){
    super(props);

    this.updateReps = this.updateReps.bind(this);
    this.updateWeight = this.updateReps.bind(this);
  };

  updateReps(event){
    this.props.updateField('reps', event.target.value);
  }

  updateWeight(event){
    this.props.updateField('weight', event.target.value);
  }

  render(){
    return (
      <Container>
        <RepContainer>
          <RepInput value={this.props.setResult.reps} onChange={this.updateReps}/>
        </RepContainer>
        <Weight>{this.props.setResult.weight}</Weight>
      </Container>
    );
  }

};

export default SetResult;

