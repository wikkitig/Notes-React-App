import "./App.css";
import "./sass/main.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotesList from "./components/NotesList";
import { useState } from "react";
import Home from "./components/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
function App() {
  const [notesList, SetnotesList] = useState([
    {
      content: "First Entry",
      date: "1.12.2022",
    },
    {
      content: "Complete the project",
      date: "11.12.2022",
    },
  ]);

  const addNotesItem = (text) => {
    const date = new Date();

    const notes_content = {
      content: text,
      date: date.toLocaleDateString(),
    };

    const new_notes_content = [...notesList, notes_content];
    SetnotesList(new_notes_content);
  };

  const deleteByid = (id) => {
    const notesList_totat = [...notesList];

    notesList_totat.splice(id, 1);
    SetnotesList(notesList_totat);
  };

  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route
            path="/notelist"
            element={
              <NotesList
                notesList={notesList}
                deleteByid={deleteByid}
                addNotesItem={addNotesItem}
              />
            }
          ></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
