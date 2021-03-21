import React, { useState } from "react";
import * as Tone from "tone";
import { PianoKeyStyled } from "./styled";

interface Props {
  note: string;
  setNotesPlaying: React.Dispatch<React.SetStateAction<string[]>>;
}

const PianoKey = ({ note, setNotesPlaying }: Props) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handleClick = () => {
    if (!isPlaying) {
      setIsPlaying(true);
      setNotesPlaying((c) => [...c, note]);
    } else {
      setIsPlaying(false);
      setNotesPlaying((c) => c.filter((playingNote) => playingNote !== note));
    }
  };

  return (
    <PianoKeyStyled
      note={note}
      onClick={() => {
        Tone.start();
        handleClick();
      }}
      blackKey={note.includes("b")}
      playing={isPlaying}
    >
      {note}
    </PianoKeyStyled>
  );
};

export default PianoKey;
