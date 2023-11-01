import { useEffect, useState } from "react";
import Notes from "./components/pages/Notes";
import Note from "./components/pages/Note";
import NoteForm from "./components/pages/NoteForm";
import Search from "./components/pages/Search";

const App = () => {
  const [page, setPage] = useState("notes");
  const [notes, setNotes] = useState(JSON.parse(localStorage.getItem("notes")) || []);
  const [currentNote, setCurrentNote] = useState(null);

  useEffect(() => localStorage.setItem("notes", JSON.stringify(notes)), [notes]);

  const handleShowNote = note => {
    setPage("note");
    setCurrentNote(note);
  };

  const handleBack = () => {
    setPage("notes");
    setCurrentNote(null);
  };

  const handleDelete = note => {
    setNotes(prevNotes => prevNotes.filter(n => n !== note));
    setCurrentNote(null);
    setPage("notes");
  };

  const handleAddNote = () => setPage("form");

  const handleSaveNote = note => {
    setNotes(prevNotes => (note.id ? prevNotes.map(n => (n.id === note.id ? note : n)) : [...prevNotes, { ...note, id: Date.now() }]));
    setCurrentNote(null);
    setPage("notes");
  };

  const handleEdit = note => {
    setPage("form");
    setCurrentNote(note);
  };

  const handleSearch = () => setPage("search");

  return (
    <div className='bg-dark text-white min-h-screen px-5 pt-28 pb-5 font-nunito'>
      {page === "notes" && <Notes notes={notes} onShowNote={handleShowNote} onAddNote={handleAddNote} onSearch={handleSearch} />}
      {page === "note" && <Note note={currentNote} onBack={handleBack} onDelete={handleDelete} onEdit={handleEdit} />}
      {page === "form" && <NoteForm note={currentNote} onBack={handleBack} onSaveNote={handleSaveNote} />}
      {page === "search" && <Search notes={notes} onBack={handleBack} onShowNote={handleShowNote} />}
    </div>
  );
};

export default App;
