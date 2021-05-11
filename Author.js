import React from 'react';

function Author({val,deleteAuthor}){
	console.log(val);
	return(
		<div>
		<div>First Name: {val.first_name}</div>
		<div>Last Name: {val.last_name}</div>
		<div>DOB: {val.dob}</div>
		<div>Dod: {val.dod}</div>
		<button onClick={()=>{deleteAuthor(val._id)}}>Delete</button>
		</div>
		)
}
export default Author;