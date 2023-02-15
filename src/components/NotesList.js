import React from "react";
import { Box } from "@mui/system";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import DeleteIcon from "@mui/icons-material/Delete";
import AddNotes from "./AddNotes";
import styled from "@emotion/styled";
import { Container } from "@mui/system";
import { Button } from "@mui/material";
function NotesList({ notesList, addNotesItem, deleteByid }) {
  const Body = styled(Box)({
    minHeight: "100vh",
    // backgroundColor: "yellow",
  });

  const InputArea = styled(Box)({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100px",
    // backgroundColor: "pink",
  });

  return (
    <Container>
      <Body>
        <InputArea>
          <AddNotes addNotesItem={addNotesItem} />
        </InputArea>
        <Box className="notes_list">
          {Object.keys(notesList).length !== 0
            ? notesList.map((notes, index) => (
                <Card className="note_list_item" key={index}>
                  <Box className="list_item_body">
                    <p>{notes.content}</p>
                  </Box>
                  <Box className="list_item_body_action">
                    <Box className="left">{notes.date}</Box>
                    <Box className="right">
                      <button
                        className="right_delete"
                        onClick={() => {
                          deleteByid(index);
                        }}
                      >
                        <DeleteIcon color="error" />
                      </button>
                    </Box>
                  </Box>
                  {/* <CardContent>{notes.content}</CardContent>
                  <CardActions className="actions">
                    <Box className="action_content">
                      {notes.date}
                      <DeleteIcon />
                    </Box>
                  </CardActions> */}
                </Card>
              ))
            : "no Data"}
        </Box>
      </Body>
    </Container>
  );
}

export default NotesList;
