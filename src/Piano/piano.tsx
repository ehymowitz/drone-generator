import React, { useEffect, useState } from "react";
import * as Tone from "tone";
import Notes from "../notes";
import { PianoGrid } from "./Piano.style";
import PianoKey from "./PianoKey";

const synth = new Tone.PolySynth({
  maxPolyphony: 7,
  voice: Tone.Synth,
}).toDestination();

const Piano = () => {
  const [notesPlaying, setNotesPlaying] = useState<string[]>([]);

  useEffect(() => {
    synth.releaseAll();
    synth.triggerAttack(notesPlaying);
  }, [notesPlaying, setNotesPlaying]);

  useEffect(() => {
    Tone.start();
  }, []);

  return (
    <PianoGrid>
      {Notes.map((note, i) => {
        return (
          <PianoKey key={i} note={note} setNotesPlaying={setNotesPlaying} />
        );
      })}
    </PianoGrid>
  );
};

export default Piano;
