import React from 'react';
import PropTypes from 'prop-types';
import placeholder from './placeholder.png';

export default function MovieList(props) {
	
	return (
		<div className='flex'>
			{props.movies.map((movie, index) => (
			<div key={index} className='movieCard'>
			<img className='cardMoviePoster' src={movie.Poster} alt={movie.Title} />
			<div className='detailsContainer'>
				<h2 className="cardMovieTitle">{movie.Title}</h2>
				<span className='cardMovieType'>{movie.Type}</span>
			</div>
		</div>
		))}
	  </div>
	)
}

// MovieList.propTypes = {
// 	posterUrl: PropTypes.string,
// 	title: PropTypes.string,
// 	type: PropTypes.string,
// 	movie: PropTypes.array,
// }

// MovieList.defaultProps = {
// 	posterUrl: `${placeholder}`,
// 	title: 'undefined',
// 	type: 'undefined',
// 	movie: []
// }