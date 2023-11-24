import { useState } from 'react';
import './movieTile.scss';
import Dialog from '../dialog/dialog';
import { MovieForm } from '../movieForm/movieForm';

const MovieTile = ({ movie, onClick }) => {
    let { poster_path: imageUrl, title: movieName, release_date: releaseDate, genres } = movie;
    const [showMenu, setShowMenu] = useState(false);
    const [showEditModal, setShowEditModal] = useState(false);
    const [showDeleteModal, setShowDeleteModal] = useState(false);

    const onMovieSelect = () => {
        onClick(movie)
    }
    const handleShowMenu = (event) => {
        event.stopPropagation(); // So that the edit pop up doesn't open
        setShowMenu(!showMenu);
    }

    const handleEdit = (event) => {
        event.stopPropagation();
        setShowEditModal(true);
    }

    const handleDelete = (event) => {
        event.stopPropagation();
        setShowDeleteModal(true);
    }

    const handleEditSubmit = (movie) => {
        console.log("To be implemented", movie);
    }
    const handleDeleteSubmit = () => {
        console.log("To be implemented");
    }

    const addImageFallback = (event) => {
        event.currentTarget.src = process.env.PUBLIC_URL + '/assets/img/placeholder.png';
    }

    return (<>
        <div className="movie-tile" onClick={onMovieSelect}>
            <div className="movie-poster">
                <img src={imageUrl} alt={movieName} onError={addImageFallback} />
            </div>
            <div className="movie-tile-details">
                <div className="movie-details-left">
                    <p className="movie-title">{movieName}</p>
                    <p className='movie-tile-genre'>{genres.join(', ')}</p>
                </div>
                <div className="movie-details-right">
                    <p className="movie-tile-release-year">{releaseDate.split('-')[0]}</p>
                </div>
            </div>
            <button className="menu-button" onClick={handleShowMenu}>⋮</button>
            {showMenu &&
                <div className='context-menu'>
                    <div className="menu-item" onClick={handleEdit}>
                        Edit
                    </div>
                    <div className="menu-item" onClick={handleDelete}>
                        Delete
                    </div>
                </div>}
        </div>
        <Dialog title='EDIT MOVIE' isOpen={showEditModal} onClose={() => setShowEditModal(false)} >
            <MovieForm movie={movie} onSubmit={handleEditSubmit} />
        </Dialog>
        <Dialog title='DELETE MOVIE' isOpen={showDeleteModal} onClose={() => setShowDeleteModal(false)} >
            Are you sure you want to delete this movie?
            <div className="delete-action">
                <button className="delete-button" onClick={handleDeleteSubmit}>CONFIRM</button>
            </div>
        </Dialog>
    </>
    )
}
export default MovieTile;