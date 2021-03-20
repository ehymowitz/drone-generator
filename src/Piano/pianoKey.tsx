import React, { useEffect, useState } from "react";
import * as Tone from "tone";
import { PianoKeyStyled } from "./styled";

const PianoKey = ({ pianoSynth, note, notesPlaying, setNotesPlaying }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const seed = Math.floor(Math.random() * 6);
    const loop = setInterval(() => {
      if (isPlaying) {
        pianoSynth.triggerAttackRelease(note, seed);
      }
    }, 5000);
    return () => {
      clearInterval(loop);
    };
  });

  return (
    <PianoKeyStyled
      note={note}
      onClick={() => {
        Tone.start();
        setIsPlaying(!isPlaying);
      }}
      blackKey={note.includes("b")}
      playing={isPlaying}
    >
      {note}
    </PianoKeyStyled>
  );
};

export default PianoKey;
