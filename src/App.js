import React, { useState, useEffect } from 'react'
import './App.css';
import MovieCard from './components/MovieCard.js';
import MovieDetails from './components/MovieDetails.js';

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

	
	let [movie, setMovie] = useState([])

	const loadMovie = async () => {
		const response = await fetch(`http://www.omdbapi.com/?i=tt0081505&apikey=ec7d4f92`)
		const data = await response.json();
		setMovie(data);
	}
	useEffect(() => {
		loadMovie();
	}, [])


	console.log(movie);

	const moviePoster = movie.Poster;
	const movieTitle = movie.Title;
	const movieType = movie.Type;
	const movieRated = movie.Rated;
	const movieRutime = movie.Runtime;
	const movieGenre = movie.Genre;
	const moviePlot = movie.Plot;
	const movieActors = movie.Actors;
	const movieRating = movie.imdbRating;
	const movieYear = movie.Year;

	return (
		<div className="App">

			<MovieCard
				posterUrl={moviePoster}
				title={movieTitle}
				type={movieType}
			/>
			<center>~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~</center>
			<MovieDetails
				posterUrl={moviePoster}
				title={movieTitle}
				rated={movieRated}
				runtime={movieRutime}
				genre={movieGenre}
				plot={moviePlot}
				actors={movieActors}
				rating={movieRating}
				year={movieYear}
			/>

		</div>
	);
}

export default App;
