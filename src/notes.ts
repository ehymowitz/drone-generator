const Octaves = ["1", "2", "3", "4", "5", "6", "7"];

const Notes = Octaves.map((octave) => {
  return [
    `Ab${octave}`,
    `A${octave}`,
    `Bb${octave}`,
    `B${octave}`,
    `C${octave}`,
    `Db${octave}`,
    `D${octave}`,
    `Eb${octave}`,
    `E${octave}`,
    `F${octave}`,
    `Gb${octave}`,
    `G${octave}`,
  ];
}).flat();

export default Notes;
