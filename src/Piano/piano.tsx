import React from "react";
import { PianoWhiteStyled, PianoBlackStyled, PianoGrid } from "./styled";
import * as Tone from "tone";
import Notes from "../notes";

const Piano = () => {
  const pianoSynth = new Tone.Synth().toDestination();

  const playNote = (note) => {
    const now = Tone.now();
    pianoSynth.triggerAttack(note, now);
    // wait one second before triggering the release
    pianoSynth.triggerRelease(now + 1);
  };

  return (
    <PianoGrid>
      {Notes.map((note, i) => {
        return note.includes("b") ? (
          <>
            <PianoBlackStyled onClick={() => playNote(note)} key={i}>
              {note}
            </PianoBlackStyled>
          </>
        ) : (
          <PianoWhiteStyled note={note} onClick={() => playNote(note)} key={i}>
            {note}
          </PianoWhiteStyled>
        );
      })}
    </PianoGrid>
  );
};

export default Piano;
