import React, { useState, useEffect } from 'react'
import './App.css';
import MovieCard from './components/MovieCard.js';
import MovieDetails from './components/MovieDetails.js';
import MovieList from './components/MovieList.js'
import SearchBar from './components/SearchBar.js'

function App() {

	// let [movie, setMovie] = useState([])

	// useEffect(() => {
	// 	// Batman: tt0096895
	// 	// The Shining: tt0081505
	// 	// fetch("http://www.omdbapi.com/?i=tt0081505&apikey=ec7d4f92")
	// 	fetch(`http://www.omdbapi.com/?t=${movieSearch}&apikey=ec7d4f92`)
	// 		.then(response => response.json())
	// 		.then(data => setMovie(data))
	// }, [])

	
	const [searchTerm, setSearchTerm] = useState('batman');
	const [isLoading, setIsLoading] = useState(true);
	const [movies, setMovies] = useState([]);
	const [error, setError] = useState(null);

	const loadMovie = async () => {
		const response = await fetch(`http://www.omdbapi.com/?s=${searchTerm}&apikey=ec7d4f92`)
		const data = await response.json();
		setMovies(data.Search);
		setError(null);
		setIsLoading(false);
	}
	useEffect(() => {
		setIsLoading(true);
		loadMovie();
	}, [])


	const moviePoster = movies.Poster;
	const movieTitle = movies.Title;
	const movieType = movies.Type;
	// const movieRated = movie.Rated;
	// const movieRutime = movie.Runtime;
	// const movieGenre = movie.Genre;
	// const moviePlot = movie.Plot;
	// const movieActors = movie.Actors;
	// const movieRating = movie.imdbRating;
	// const movieYear = movie.Year;

	return (
		<div className="App">

			<SearchBar />

			<MovieList
				// posterUrl={moviePoster}
				// title={movieTitle}
				// type={movieType}
				movies={movies}
			/>

			{/* <MovieDetails
				posterUrl={moviePoster}
				title={movieTitle}
				rated={movieRated}
				runtime={movieRutime}
				genre={movieGenre}
				plot={moviePlot}
				actors={movieActors}
				rating={movieRating}
				year={movieYear}
			/> */}

		</div>
	);
}

export default App;
