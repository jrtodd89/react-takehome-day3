export default function SearchBar(props) {
	
	function handleSubmit(e) {
		e.preventDefault();
		console.log(e);
	}

	return (
		<div className='flex'>
			<form onSubmit={handleSubmit}>
				<input type='text' placeholder="Batman"/>
				<select>
					<option value='movie'>Movie</option>
					<option value='series'>Series</option>
					<option value='episode'>Episode</option>
				</select>
				<input
				type="submit"
				value="Submit"

				/>
			</form>
	  </div>
	)
}