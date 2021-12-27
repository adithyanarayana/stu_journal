import { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import NotesList from "../components/NotesList";
import Search from "../components/Search";
import "../App.css";
const Notespage = () => {
  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      text: "This is Example note!",
      date: "15/04/2021",
    },
  ]);

  const [searchText, setSearchText] = useState("");

  // const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem("react-notes-app-data"));

    if (savedNotes) {
      setNotes(savedNotes);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("react-notes-app-data", JSON.stringify(notes));
  }, [notes]);

  const addNote = (text) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString(),
    };
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  };

  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  };

  return (
    <div className="parent_div">
      <h2>Notes</h2>
      <div className="child_div">
        <div>
          <div className="container">
            {/* <Header handleToggleDarkMode={setDarkMode} /> */}
            <Search handleSearchNote={setSearchText} />
            <NotesList
              notes={notes.filter((note) =>
                note.text.toLowerCase().includes(searchText)
              )}
              handleAddNote={addNote}
              handleDeleteNote={deleteNote}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notespage;
