import React from 'react';
import PropTypes from 'prop-types';
import placeholder from './placeholder.png';

export default function MovieDetails(props) {
	return (
		<div className='movieDetails'>
			<img className='moviePoster' src={props.posterUrl} alt={props.name} />
			<div className='flex'>
				<div>
					<h2 className="movieTitle">{props.title} <span className='movieRating'>{props.rating}</span></h2>
					<span className='detail rated'>{props.rated}</span>
					<span className='detail runtime'>{props.runtime}</span>
					<span className='detail genre'>{props.genre}</span>
					<div>
						<h3>Plot</h3>
						<p className='paragraphContent'>{props.plot}</p>
						<h3>Actors</h3>
						<p className='paragraphContent'>{props.actors}</p>
						<h3>Year</h3>
						<p className='paragraphContent'>{props.year}</p>
					</div>
				</div>
			</div>
		</div>
	)
}


MovieDetails.propTypes = {
	posterUrl: PropTypes.string,
	title: PropTypes.string,
	rated: PropTypes.string,
	runtime: PropTypes.string,
	genre: PropTypes.string,
	plot: PropTypes.string,
	actors: PropTypes.string,
	rating: PropTypes.string,
}

MovieDetails.defaultProps = {
	posterUrl: `${placeholder}`,
	title: 'Undefined',
	rated: 'Undefined',
	runtime: 'Undefined',
	genre: 'Undefined',
	plot: 'Undefined',
	actors: 'Undefined',
	rating: 'Undefined',
}