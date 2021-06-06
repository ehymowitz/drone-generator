import React, { useState } from "react";
import { PianoKeyStyled } from "./Piano.style";

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

  console.log(note);

  return (
    <PianoKeyStyled
      note={note}
      onClick={() => {
        handleClick();
      }}
      blackKey={note.includes("b")}
      playing={isPlaying}
    />
  );
};

export default PianoKey;
