import React, { useState } from "react";
import "./addMovie.scss";
import Dialog from "../dialog/dialog";
import { MovieForm } from "../movieForm/movieForm";

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