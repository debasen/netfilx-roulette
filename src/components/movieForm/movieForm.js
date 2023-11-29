import React from 'react';
import { useForm } from 'react-hook-form';
import Select from 'react-select';
import './movieForm.scss';

export const MovieForm = ({ movie, onSubmit }) => {

  // Default values when no movie object is provided
  const defaultValues = {
    title: '',
    release_date: '',
    poster_path: '',
    vote_average: '',
    genres: ['Action'],
    runtime: '',
    overview: '',
  };

  // Use the provided movie object or default values
  const {
    title,
    release_date: releaseDate,
    poster_path: movieUrl,
    vote_average: rating,
    genres,
    runtime,
    overview,
  } = movie || defaultValues;

  const { register, handleSubmit, setValue, watch } = useForm({
    defaultValues: {
      title,
      releaseDate,
      movieUrl,
      rating,
      genres: genres.map((genre) => ({ value: genre, label: genre })),
      runtime,
      overview,
    },
  });

  const handleFormSubmit = (data) => {
    // Map selected genres back to an array of strings
    const selectedGenres = data.genres ? data.genres.map((option) => option.value) : [];
    onSubmit({ ...data, genre: selectedGenres });
  };

  // Use watch to get the selected genre value
  const selectedGenre = watch('genres');


  return (
    <div className="form-container">
      <form onSubmit={handleSubmit(handleFormSubmit)}>
        <div className="form-grid">
          <div className="form-field">
            <label className="form-label" htmlFor="title">
              TITLE
            </label>
            <input
              className="form-input form-placeholder"
              type="text"
              id="title"
              {...register('title')}
              placeholder="Enter the movie title"
            />
          </div>
          <div className="form-field">
            <label className="form-label" htmlFor="releaseDate">
              RELEASE DATE
            </label>
            <input
              className="form-input"
              type="date"
              id="releaseDate"
              {...register('releaseDate')}
            />
          </div>
          <div className="form-field">
            <label className="form-label" htmlFor="movieUrl">
              MOVIE URL
            </label>
            <input
              className="form-input form-placeholder"
              type="text"
              id="movieUrl"
              {...register('movieUrl')}
              placeholder="Enter the movie URL"
            />
          </div>
          <div className="form-field">
            <label className="form-label" htmlFor="rating">
              RATING
            </label>
            <input
              className="form-input form-placeholder"
              type="text"
              id="rating"
              {...register('rating')}
              placeholder="Enter the movie rating"
            />
          </div>
          <div className="form-field">
            <label className="form-label" htmlFor="genre">
              GENRE
            </label>
            <Select
              classNamePrefix='form-select'
              {...register('genres', { required: true })} // Use register properly
              options={[
                { value: 'Action', label: 'Action' },
                { value: 'Comedy', label: 'Comedy' },
                { value: 'Drama', label: 'Drama' },
                { value: 'Horror', label: 'Horror' },
                { value: 'Science Fiction', label: 'Science Fiction' },
              ]}
              isMulti
              value={selectedGenre} // Set the value prop to avoid the mentioned error
              onChange={(selectedOptions) => setValue('genres', selectedOptions)} // Update the genre value on change
            />
          </div>
          <div className="form-field">
            <label className="form-label" htmlFor="runtime">
              RUNTIME
            </label>
            <input
              className="form-input form-placeholder"
              type="text"
              id="runtime"
              {...register('runtime')}
              placeholder="Enter the movie runtime"
            />
          </div>
        </div>
        <div className="form-field overview">
          <label className="form-label" htmlFor="overview">
            OVERVIEW
          </label>
          <textarea
            className="form-textarea form-placeholder"
            rows="4"
            id="overview"
            {...register('overview')}
            placeholder="Enter the movie overview"
          ></textarea>
        </div>
        <div className="form-action">
          <button className="form-reset-button" type="reset">
            RESET
          </button>
          <button className="form-button" type="submit">
            SUBMIT
          </button>
        </div>
      </form>
    </div>
  );
};
