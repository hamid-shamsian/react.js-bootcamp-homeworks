import Header from "./../Header";
import Button from "../common/Button";
import NoteCard from "../NoteCard";
import searchSVG from "../../images/search.svg";
import infoSVG from "../../images/info.svg";
import noItemsSVG from "../../images/no-items.png";

const Notes = ({ notes, onShowNote }) => {
  return (
    <>
      <Header title='Notes'>
        <Button icon={searchSVG} />
        <Button icon={infoSVG} />
      </Header>

      <main className='flex flex-col gap-5 h-full'>
        {notes.length ? (
          notes.map(note => <NoteCard key={note.id} note={note} onClick={onShowNote} />)
        ) : (
          <div className='flex flex-col justify-center items-center gap-5 h-full'>
            <img src={noItemsSVG} alt='' />
            <p className='text-xl text-color'>Create your first Note!</p>
          </div>
        )}
      </main>
    </>
  );
};

export default Notes;
