import { useState } from "react";
import Header from "./../Header";
import Button from "../common/Button";
import NoteCard from "../NoteCard";
import InfoModal from "../InfoModal";
import searchSVG from "../../images/search.svg";
import infoSVG from "../../images/info.svg";
import noItemsSVG from "../../images/no-items.png";
import addSVG from "../../images/add.svg";

const Notes = ({ notes, onShowNote, onAddNote, onSearch }) => {
  const [showInfoModal, setShowInfoModal] = useState(false);

  return (
    <>
      <Header title='Notes'>
        <Button icon={searchSVG} onClick={onSearch} />
        <Button icon={infoSVG} onClick={() => setShowInfoModal(true)} />
      </Header>

      <main className='flex flex-col gap-5'>
        {notes.length ? (
          notes.map(note => <NoteCard key={note.id} note={note} onClick={onShowNote} />)
        ) : (
          <div className='flex flex-col items-center gap-5 mt-40'>
            <img src={noItemsSVG} alt='' />
            <p className='text-xl text-color'>Create your first Note!</p>
          </div>
        )}
      </main>

      <button className='p-2 shadow-md shadow-black rounded-full fixed right-10 bottom-10 bg-dark' onClick={onAddNote}>
        <img src={addSVG} alt='add' />
      </button>

      {showInfoModal && <InfoModal onOk={() => setShowInfoModal(false)} />}
    </>
  );
};

export default Notes;
