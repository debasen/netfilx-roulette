import React, { useState } from "react";
import Dialog from "../dialog/dialog";
import { MovieForm } from "../movieForm/movieForm";
import "./addMovie.scss";

export const AddMovie = () => {
  const [isOpen, setOpen] = useState(false);
  const addMovie = (movie) => {
    console.log("To be implemented", movie);
  }
  return (<>
    <button className="add-movie-button"
      onClick={() => setOpen(true)}
    >
      + ADD MOVIE
    </button>
    <Dialog title='ADD MOVIE' isOpen={isOpen} onClose={() => setOpen(false)}>
      <MovieForm onSubmit={addMovie}></MovieForm>
    </Dialog>
  </>)
};