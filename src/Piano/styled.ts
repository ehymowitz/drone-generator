import styled from "styled-components";

const playingColor = "red";

const PianoGrid = styled.div`
  display: flex;
  width: 70vw;
  overflow: scroll;
  background-color: white;
  border-radius: 5px;
  box-shadow: 7px 9px 19px #505050;
`;

const PianoKeyStyled = styled.div`
  background: white;
  padding: 0 10px;
  height: 300px;
  border-right: 1px solid black;
  ${(props) =>
    props.blackKey &&
    `
    color: white;
    background: black;
  `}

  ${(props) =>
    props.playing &&
    `
    background: ${playingColor};
    border-color: ${playingColor};
  `}

  &:last-of-type {
    border-right: none;
  }
`;

export { PianoKeyStyled, PianoGrid };
