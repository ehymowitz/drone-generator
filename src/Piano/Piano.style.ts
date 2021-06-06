import styled from "styled-components";

const playingColor = "red";

const PianoGrid = styled.div`
  display: flex;
  overflow: scroll;
  max-width: 70vw;
  background-color: white;
  border-radius: 5px;
  box-shadow: 7px 9px 19px #505050;
`;

const PianoKeyStyled = styled.div`
  background: ${(props) => (props.blackKey ? "black" : "white")};
  padding: 0 10px;
  width: ${(props) => (props.blackKey ? "5px" : "20px")};
  height: ${(props) => (props.blackKey ? "250px" : "300px")};
  border: 1px solid black;

  ${(props) =>
    props.playing &&
    `
    background: ${playingColor};
    border-color: ${playingColor};
  `}

  ${(props) =>
    props.blackKey &&
    `
    z-index: 2;
    position: relative;
    margin: -15px;
  `}

  ${(props) =>
    props.note.includes("B") &&
    `
    border-right: none;
  `}

  ${(props) =>
    props.note.includes("F") &&
    `
    border-left: none;
  `}
`;
export { PianoKeyStyled, PianoGrid };
