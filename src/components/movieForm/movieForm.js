import './movieForm.scss'

import React, { useState } from 'react';

export const MovieForm = ({ movie, onSubmit }) => {
  // Default values when no movie object is provided
  const defaultValues = {
    title: '',
    release_date: '',
    poster_path: '',
    vote_average: '',
    genres: ['action'],
    runtime: '',
    overview: '',
  };

  // Use the provided movie object or default values
  const {
    title,
    release_date,
    poster_path: movieUrl,
    vote_average: rating,
    genres,
    runtime,
    overview,
  } = movie || defaultValues;

  // State to hold form data
  const [formData, setFormData] = useState({
    title,
    release_date,
    movieUrl,
    rating,
    genre: genres[0],
    runtime,
    overview,
  });

  // Handle input changes and update form data
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    onSubmit({ ...movie, ...formData });
  }

  return (
    <div className="form-container">
      <form onSubmit={handleFormSubmit}>
        <div className="form-grid">
          <div className="form-field">
            <label className="form-label" htmlFor="title">
              TITLE
            </label>
            <input
              className="form-input form-placeholder"
              type="text"
              id="title"
              name="title"
              placeholder="Enter the movie title"
              value={formData.title}
              onChange={handleInputChange}
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
              name="release_date"
              value={formData.release_date}
              onChange={handleInputChange}
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
              name="movieUrl"
              placeholder="Enter the movie URL"
              value={formData.movieUrl}
              onChange={handleInputChange}
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
              name="rating"
              placeholder="Enter the movie rating"
              value={formData.rating}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-field">
            <label className="form-label" htmlFor="genre">
              GENRE
            </label>
            <select
              className="form-select"
              id="genre"
              name="genre"
              value={formData.genre}
              onChange={handleInputChange}
            >
              <option value="action">Action</option>
              <option value="comedy">Comedy</option>
              <option value="drama">Drama</option>
              <option value="sci-fi">Sci-Fi</option>
            </select>
          </div>
          <div className="form-field">
            <label className="form-label" htmlFor="runtime">
              RUNTIME
            </label>
            <input
              className="form-input form-placeholder"
              type="text"
              id="runtime"
              name="runtime"
              placeholder="Enter the movie runtime"
              value={formData.runtime}
              onChange={handleInputChange}
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
            name="overview"
            placeholder="Enter the movie overview"
            value={formData.overview}
            onChange={handleInputChange}
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
