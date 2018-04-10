import React from "react";
import TextField from "material-ui/TextField";
import styled from "styled-components";
import ExerciseResults from "./ExerciseResults";
import ExerciseDescription from "./ExerciseDescription";

const flexContainerStyle = {
  display: "flex",
  flexFlow: "row nowrap",
  justifyContent: "flex-start",
  width: "100%"
};

const generateCells = (setCount, repCount, targetWeight) => {
  let cells = [];
  for (let i = 0; i < setCount; i++) {
    cells.push(<Cell value={i} index={i} />);
  }
  return cells;
};

const RecordContents = styled.div`
  display: flex;
  justify-content: center;
  width: 900px;
  flex-flow: column;
  flex: initial;
`;

const OuterWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const Bookend = styled.div`
  flex: 1;
`;

class LogRecord extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        resultsExpanded: false
    }
    this.handleDescriptionExpandClick = this.handleDescriptionExpandClick.bind(this);
  };

  handleDescriptionExpandClick() {
      this.setState({resultsExpanded: !this.state.resultsExpanded});
  }

  render() {
    return (
        <OuterWrapper>
          <Bookend />
          <RecordContents>
            <ExerciseDescription handleClick={this.handleDescriptionExpandClick} isExpanded={this.state.resultsExpanded} />
            {this.state.resultsExpanded ? <ExerciseResults /> : ''}
          </RecordContents>
          <Bookend />
        </OuterWrapper>
      );
  }

};

export default LogRecord;
