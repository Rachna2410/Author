import React from 'react';
import {Link,BrowserRouter,Route} from 'react-router-dom';
import AllAuthors from './AllAuthors';

function ModifiedAuthors(props){
	console.log(props);

	return(
		<div>
		<Link to={`modifiedauthors/allauthors`}>Show all </Link><br/>

		</div>
		)
}
export default ModifiedAuthors;