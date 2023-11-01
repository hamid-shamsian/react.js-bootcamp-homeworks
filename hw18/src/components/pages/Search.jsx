import { useEffect, useState } from "react";
import Header from "../Header";
import NoteCard from "../NoteCard";
import notFoundSVG from "../../images/not-found.png";
import crossSVG from "../../images/close.svg";

const Search = ({ notes, onBack, onShowNote }) => {
  const [query, setQuery] = useState("");
  const [foundNotes, setFoundNotes] = useState([]);

  useEffect(() => {
    setFoundNotes(query ? notes.filter(n => n.title.toLowerCase().includes(query.toLowerCase())) : []);
  }, [query, notes]);

  const handleChange = ({ target }) => setQuery(target.value);

  const { length: count } = foundNotes;

  return (
    <>
      <Header title='Search Notes' onBack={onBack}></Header>

      <div className='bg-[#3b3b3b] rounded-full px-7 py-3 flex items-center'>
        <input
          type='text'
          value={query}
          onChange={handleChange}
          placeholder='Search in notes...'
          className='outline-none flex-1 text-lg bg-transparent'
        />
        <button onClick={() => setQuery("")}>
          <img src={crossSVG} alt='' />
        </button>
      </div>

      <main className='flex flex-col gap-5 mt-10'>
        {count ? (
          <>
            <p className='ml-5 text-lg'>
              Found {count} item{count > 1 && "s"}
            </p>
            {foundNotes.map(note => (
              <NoteCard key={note.id} note={note} onClick={onShowNote} />
            ))}
          </>
        ) : (
          <div className='flex flex-col items-center gap-5 mt-40'>
            <img src={notFoundSVG} alt='' />
            {query && <p className='text-xl text-color'>No items Found!</p>}
          </div>
        )}
      </main>
    </>
  );
};

export default Search;
