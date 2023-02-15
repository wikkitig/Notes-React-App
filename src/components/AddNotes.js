import React, { useState } from "react";
import { Box } from "@mui/system";
import { Button, TextField } from "@mui/material";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";
function AddNotes({ addNotesItem }) {
  const [addNotes, setNotes] = useState("");

  const saveNotes = () => {
    if (!addNotes) {
      toast.error("Enter Notes");
      return false;
    } else {
      addNotesItem(addNotes);
    }
  };

  return (
    <Box className="form">
      <ToastContainer
        toastStyle={{ backgroundColor: "white", color: "white" }}
      />
      <TextField
        onChange={(e) => setNotes(e.target.value)}
        label="Add Notes"
        variant="standard"
        value={addNotes}
      />
      {/* <input type="text"></input> */}
      {/* <button onClick={saveNotes} className="input_field" variant="contained">
    Save
  </button> */}
      <button onClick={saveNotes} className="btn_todo">
        Add Note
      </button>

      {/* <Box>
        <Link to="/notelist" className="btn_todo">
          Add Notes
        </Link>
      </Box> */}
    </Box>
  );
}

export default AddNotes;
