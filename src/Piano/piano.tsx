import React, { useEffect, useState } from "react";
import * as Tone from "tone";
import { PianoGrid } from "./styled";
import Notes from "../notes";
import PianoKey from "./pianoKey";

const Piano = () => {
  const [notesPlaying, setNotesPlaying] = useState<string[]>([]);
  const reverb = new Tone.Reverb(10).toDestination();
  const pianoSynth = new Tone.AMSynth().chain(reverb).toDestination();
  pianoSynth.set({
    harmonicity: 2.5,
    oscillator: {
      phase: 0,
      type: "fmsine",
    },
    envelope: {
      attack: 0.5,
      attackCurve: "exponential",
      release: 0.3,
      releaseCurve: "exponential",
      sustain: 0.2,
    },
    modulation: {
      partialCount: 0,
      phase: 0,
      type: "square",
    },
    modulationEnvelope: {
      attack: 0.1,
      attackCurve: "linear",
      decay: 0.01,
      decayCurve: "exponential",
      release: 0.5,
      releaseCurve: "exponential",
      sustain: 1,
    },
  });

  Tone.Transport.start(0);

  useEffect(() => {
    const getNotes = () => {
      const notes = notesPlaying.map((note, i) => {
        return { time: i + 0.5, note, velocity: 0.4 + i * 0.1 };
      });
      return notes;
    };

    const part = new Tone.Part((time, value) => {
      pianoSynth.triggerAttackRelease(
        value.note,
        value.time,
        time,
        value.velocity
      );
    }, getNotes()).start();
    part.loop = true;

    return () => {
      part.dispose();
    };
  }, [notesPlaying, pianoSynth]);

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
