import {useState,useEffect} from 'react';
import axios from 'axios';
import Author from './Author';
import AuthorForm from './AuthorForm';
import useDataHelper from './useDataHelper';
import {Link,BrowserRouter} from 'react-router-dom';

function Authors()
{
	const [authorList,setAuthorsList] = useDataHelper('/author');
	
	useEffect(()=>{
		getAuthors();
	},[]);

const getAuthors = ()=>{
	axios.get('/author')
	.then((res)=>{
		setAuthorsList(res.data);
	})
	.catch((err)=>{
		handleError(err);
	})
}
const handleError = (err)=>{
	console.log(err);
	alert(err.toString());
}
const deleteAuthor = (id)=>{
	alert(id);
	axios.delete('/author/'+id)
	.then((res)=>{
		console.log(res.data);
		getAuthors();
	})
	.catch((err)=>{
		handleError(err);
	})
}

const addAuthor =(e)=>{
	console.log(e);
	alert(e);
	e.preventDefault();
	const {first_name,last_name,dob,dod } = e.target;
		let authorOb ={
			first_name:first_name.value,
			last_name:last_name.value,
			dob:dob.value,
			dod:dod.value
		}
		axios.post('/author',authorOb)
		.then((res)=>{
			console.log(res.data);
			axios.get('/author')
			.then((res)=>{
				setAuthorsList(res.data);
			})
			.catch((err)=>{
		handleError(err);
			})
			
		});


	console.log(authorOb);
}
return(

	<div>
	{console.log(authorList)}
{
	authorList.map((val)=>
		<Author deleteAuthor = {deleteAuthor} val ={val}/>
	)
}

	<AuthorForm addAuthor ={addAuthor}/>
	<Link to = "/modifiedauthors">Modified Authors</Link><br/>
	</div>
	)
}
export default Authors;