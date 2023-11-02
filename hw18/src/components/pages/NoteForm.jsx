import { useEffect, useRef } from "react";
import Header from "../Header";
import Button from "../common/Button";
import saveSVG from "../../images/save.svg";

const colors = ["#ff9d9e", "#fd99ff", "#90f48e", "#fff599", "#9dffff", "#b69cff"];

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
      const randomColor = colors[Math.floor(Math.random() * colors.length)];
      const newNote = { title: title.value, desc: descRef.current.value, color: note?.color ?? randomColor, id: note?.id };
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
