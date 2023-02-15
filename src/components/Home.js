import React from "react";
import Box from "@mui/material/Box";
import { Button, Toolbar, Typography } from "@mui/material";
import { Link } from "react-router-dom";
function Home() {
  return (
    <Box className="content">
      <Box className="content_about">
        <h2 className="heading">Note App</h2>
        <p className="content_body">
          Add your first notes by clicking button below
        </p>

        <Box>
          <Link to="/notelist" className="btn_todo">
            Add Notes
          </Link>
        </Box>
      </Box>
      <Box className="content_image">
        <img
          src={process.env.PUBLIC_URL + "/images/notes_hom.jpeg"}
          className="background_image"
        ></img>
      </Box>
    </Box>
  );
}

export default Home;
