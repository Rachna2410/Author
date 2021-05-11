import {useState,useEffect} from 'react';
import axios from 'axios';

const useDataHelper=(url)=>{

	
	const [authorsList,setAuthorsList] = useState([{}]);
	useEffect(()=>{
			getAuthors();
		},[]);

	const handleError=(err)=>{
		console.log(err)
	}

	const getAuthors=()=>{
		axios.get(url)
		.then((res)=>{
			setAuthorsList(res.data);
	})
	
		.catch((err)=>{
			handleError(err);
		})
	}
	return [authorsList,setAuthorsList];

}
export default useDataHelper;