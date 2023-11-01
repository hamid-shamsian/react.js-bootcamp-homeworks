import { useEffect, useRef } from "react";
import Header from "../Header";
import Button from "../common/Button";
import saveSVG from "../../images/save.svg";

const colors = ["aqua", "blue", "fuchsia", "green", "lime", "maroon", "navy", "olive", "purple", "red", "teal", "yellow"];

const NoteForm = ({ note, onBack, onSaveNote }) => {
  const titleRef = useRef(null);
  const descRef = useRef(null);

  useEffect(() => {
    if (note) {
      titleRef.current.value = note.title;
      descRef.current.value = note.desc;
    }
  });

  const handleSubmit = () => {
    const { current: title } = titleRef;

    if (title.value) {
      const newNote = { title: title.value, desc: descRef.current.value, color: colors[Math.floor(Math.random() * 12)] };
      if (note) {
        newNote.id = note.id;
        newNote.color = note.color;
      }
      onSaveNote(newNote);
    } else {
      title.classList.add("invalid-input");
      title.focus();
    }
  };

  return (
    <>
      <Header onBack={onBack}>
        <Button icon={saveSVG} onClick={handleSubmit} />
      </Header>

      <main>
        <input type='text' placeholder='Title' ref={titleRef} required className='bg-transparent outline-none text-4xl mt-5 w-full' />
        <textarea rows='15' placeholder='Type something...' ref={descRef} className='w-full bg-transparent text-xl outline-none mt-10' />
      </main>
    </>
  );
};

export default NoteForm;
