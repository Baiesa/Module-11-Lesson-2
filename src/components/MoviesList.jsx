// Filename: MoviesList.jsx

import React, { useState } from 'react';

const MoviesList = () => {
    const [movies, setMovies] = useState([
        { title: 'Inception', description: 'A mind-bending thriller', genre: 'Action' },
        { title: 'Titanic', description: 'A tragic love story', genre: 'Romance' },
        { title: 'The Matrix', description: 'A sci-fi adventure', genre: 'Action' },
    ]);
    const [viewAll, setViewAll] = useState(true);
    const [showDetails, setShowDetails] = useState({});

    const toggleDetails = (title) => {
        setShowDetails((prevDetails) => ({
            ...prevDetails,
            [title]: !prevDetails[title],
        }));
    };

    const removeMovie = (title) => {
        setMovies(movies.filter(movie => movie.title !== title));
    };

    const toggleView = () => {
        setViewAll(!viewAll);
    };

    const filteredMovies = viewAll ? movies : movies.filter(movie => movie.genre === 'Action');

    return (
        <div>
            <button onClick={toggleView}>
                {viewAll ? 'Show Only Action' : 'Show All Movies'}
            </button>
            <ul>
                {filteredMovies.map((movie) => (
                    <li key={movie.title}>
                        <span onClick={() => toggleDetails(movie.title)} style={{ cursor: 'pointer' }}>
                            {movie.title}
                        </span>
                        <button onClick={() => removeMovie(movie.title)}>Remove</button>
                        {showDetails[movie.title] && <p>{movie.description}</p>}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default MoviesList;