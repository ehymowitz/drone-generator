import React, { useEffect, useState } from "react";
import * as Tone from "tone";
import { PianoGrid } from "./styled";
import Notes from "../notes";
import PianoKey from "./pianoKey";
import options from "../monoSynth";

const Piano = () => {
  const [notesPlaying, setNotesPlaying] = useState<string[]>([]);
  const pianoSynth = new Tone.PolySynth(options).toDestination();

  useEffect(() => {
    console.log(notesPlaying);
    const loop = new Tone.Loop((time) => {
      // triggered every eighth note.
      notesPlaying.forEach((note) => {
        pianoSynth.triggerAttackRelease(note, 2);
      });
    }, "10").start(0);
    Tone.Transport.start();
    loop.humanize = 1;
    loop.interval = "8n";
    Tone.Transport.start();
  }, [notesPlaying, pianoSynth]);

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
