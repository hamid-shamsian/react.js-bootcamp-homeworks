import { useEffect, useState } from "react";
import Notes from "./components/pages/Notes";

const App = () => {
  const [page, setPage] = useState("notes");
  const [notes, setNotes] = useState([]);
  const [CurrentNote, setCurrentNote] = useState(null);

  useEffect(() => {
    setNotes(JSON.parse(localStorage.getItem("notes")));
  }, []);

  const handleShowNote = note => {
    setPage("note");
    setCurrentNote(note);
  };

  return (
    <div className='bg-dark text-white h-screen px-5 pt-28 font-nunito'>
      {page === "notes" && <Notes notes={notes} onShowNote={handleShowNote} />}
    </div>
  );
};

export default App;
