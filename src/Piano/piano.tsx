import React, { useState } from "react";
import * as Tone from "tone";
import { PianoGrid } from "./styled";
import Notes from "../notes";
import PianoKey from "./pianoKey";
import options from "../monoSynth";

const Piano = () => {
  const [notesPlaying, setNotesPlaying] = useState<string[]>([]);
  const pianoSynth = new Tone.Synth(options).toDestination();

  return (
    <PianoGrid>
      {Notes.map((note, i) => {
        return (
          <PianoKey
            pianoSynth={pianoSynth}
            key={i}
            note={note}
            notesPlaying={notesPlaying}
            setNotesPlaying={setNotesPlaying}
          />
        );
      })}
    </PianoGrid>
  );
};

export default Piano;
