import React, { useState } from "react";
import Dialog from "../dialog/dialog";
import { MovieForm } from "../movieForm/movieForm";
import { useNavigate } from "react-router-dom";

export const AddMovieForm = () => {
  const [isOpen, setOpen] = useState(true);
  const navigate = useNavigate();
  const addMovie = (movie) => {
    console.log("To be implemented", movie);
  }
  const handleClose = () => {
    setOpen(false);
    navigate(-1);
  }
  return (<>
    <Dialog title='ADD MOVIE' isOpen={isOpen} onClose={handleClose}>
      <MovieForm onSubmit={addMovie}></MovieForm>
    </Dialog>
  </>)
};