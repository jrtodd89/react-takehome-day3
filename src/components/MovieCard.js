import React from 'react';
import PropTypes from 'prop-types';
import placeholder from './placeholder.png';

export default function MovieCard(props) {	
	return (
		<div className='movieCard'>
			<img className='cardMoviePoster' src={props.posterUrl} alt={props.title} />
			<div className='detailsContainer'>
				<h2 className="cardMovieTitle">{props.title}</h2>
				<span className='cardMovieType'>{props.type}</span>
			</div>
		</div>
	)
}

MovieCard.propTypes = {
	posterUrl: PropTypes.string,
	title: PropTypes.string,
	type: PropTypes.string,
}

MovieCard.defaultProps = {
	posterUrl: `${placeholder}`,
	title: 'undefined',
	type: 'undefined'
}