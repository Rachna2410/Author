import React from 'react';

const AuthorForm =({addAuthor})=> {

	return(
		<div>
	<form onSubmit = {addAuthor}>
<input type = "text" name="first_name" />
<input type = "text" name="last_name" />
<input type="date" name="dob" />
<input type="date" name="dod"/>
<button> Add Author </button>
</form>
</div>

)
}
export default AuthorForm;

