import { useEffect, useState } from "react";
import Notes from "./components/pages/Notes";
import Note from "./components/pages/Note";

const App = () => {
  const [page, setPage] = useState("notes");
  const [notes, setNotes] = useState([]);
  const [currentNote, setCurrentNote] = useState(null);

  useEffect(() => {
    setNotes(JSON.parse(localStorage.getItem("notes")));
  }, []);

  const handleShowNote = note => {
    setPage("note");
    setCurrentNote(note);
  };

  const handleBack = () => {
    setPage("notes");
    setCurrentNote(null);
  };

  return (
    <div className='bg-dark text-white h-screen px-5 pt-28 font-nunito'>
      {page === "notes" && <Notes notes={notes} onShowNote={handleShowNote} />}
      {page === "note" && <Note note={currentNote} onBack={handleBack} />}
    </div>
  );
};

export default App;
