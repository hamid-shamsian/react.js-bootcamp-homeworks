import { useRef } from "react";
import Header from "../Header";
import Button from "../common/Button";
import saveSVG from "../../images/save.svg";

const colors = ["aqua", "blue", "fuchsia", "green", "lime", "maroon", "navy", "olive", "purple", "red", "teal", "yellow"];

const AddNote = ({ onBack, onSaveNote }) => {
  const titleRef = useRef(null);
  const descRef = useRef(null);

  const handleSubmit = () => {
    const { current: title } = titleRef;

    if (title.value) {
      onSaveNote({ id: Date.now(), title: title.value, desc: descRef.current.value, color: colors[Math.floor(Math.random() * 12)] });
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

export default AddNote;
