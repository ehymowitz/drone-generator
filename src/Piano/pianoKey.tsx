import React, { useState } from "react";
import * as Tone from "tone";
import { PianoKeyStyled } from "./styled";

const PianoKey = ({ pianoSynth, note, notesPlaying, setNotesPlaying }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const playNote = (note: string) => {
    if (isPlaying) {
      Tone.Transport.stop();
      setIsPlaying(false);
      setNotesPlaying((c) => c.filter((element) => element !== note));
      return;
    }

    setIsPlaying(true);
    setNotesPlaying([...notesPlaying, note]);
  };

  return (
    <PianoKeyStyled
      note={note}
      onClick={() => playNote(note)}
      blackKey={note.includes("b")}
      playing={isPlaying}
    >
      {note}
    </PianoKeyStyled>
  );
};

export default PianoKey;
