import React from 'react';
import useDataHelper from './useDataHelper';
import Author from './Author';

function AllAuthors(){
	const [authorsList,setAuthorsList] = useDataHelper('/author');
	return(
		<div>
		 {authorsList && authorsList.map( (val) => (
                <div><b>{`${val.first_name} ${val.last_name}`}</b><br /><br /></div>
            ))}
		</div>
		)
}
export default AllAuthors;