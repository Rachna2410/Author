import logo from './logo.svg';
import './App.css';
import {useState} from 'react';
import {BrowserRouter,Switch,Route,Link} from 'react-router-dom';
import Student from './Student';
import Authors from './Authors';
import ModifiedAuthors from './ModifiedAuthors';
import AllAuthors from './AllAuthors';



function App() {

  return (
    <div className="App">

     <BrowserRouter>
        <Authors />
        <Route exact path="/modifiedauthors" render={(props) => {
          return (<ModifiedAuthors {...props}/>)
        }}>
        </Route>

        <Route path={`/modifiedauthors/allauthors`}>
          <AllAuthors />
        </Route>
      </BrowserRouter>

    

    </div>
  );
}
export default App;
