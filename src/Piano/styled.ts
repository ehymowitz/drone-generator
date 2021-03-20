import styled from "styled-components";

const PianoGrid = styled.div`
  display: flex;
  width: 70vw;
  overflow: scroll;
  background-color: white;
  border-radius: 5px;
  box-shadow: 7px 9px 19px #505050;
`;

const PianoWhiteStyled = styled.div`
  background: white;
  padding: 0 10px;
  height: 300px;
  border-right: 1px solid black;

  &:last-of-type {
    border-right: none;
  }
`;
const PianoBlackStyled = styled.div`
  color: white;
  background: black;
  padding: 0 5px;
  height: 300px;
  border-right: 1px solid black;

  &:last-of-type {
    border-right: none;
  }
`;

export { PianoBlackStyled, PianoWhiteStyled, PianoGrid };
