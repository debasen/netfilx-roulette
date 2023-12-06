import React, { useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import Dialog from "../dialog/dialog";
import { MovieForm } from "../movieForm/movieForm";
import { API_MOVIES_PATH } from "../../utils/constants";

export const AddMovieForm = () => {
  const [isOpen, setOpen] = useState(true);
  const router = useRouter();

  const addMovie = async (postData) => {
    try {
      const response = await axios.post(API_MOVIES_PATH, postData);
      console.log('Response:', response.data);
      setOpen(false);
      router.push(`/${response.data.id}`);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleClose = () => {
    setOpen(false);
    router.back();
  };

  return (
    <>
      <Dialog title='ADD MOVIE' isOpen={isOpen} onClose={handleClose}>
        <MovieForm onSubmit={addMovie}></MovieForm>
      </Dialog>
    </>
  );
};
