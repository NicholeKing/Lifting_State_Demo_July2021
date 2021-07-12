import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from './components/Form';
import Results from './components/Results';
import { useState } from 'react';

function App() {
  const [listOfCharacters, setCharacters] = useState([]);
  const addChar = myForm => {
    // This is the function where the adding takes place
    // console.log("This is coming from App.js's addChar function!!");
    // console.log(myForm);
    setCharacters([...listOfCharacters, myForm]);
  }

  const updateIsAlive = i => {
    // this is where I update the isAlive status
    // console.log(listOfCharacters[i]);
    listOfCharacters[i].isAlive = !listOfCharacters[i].isAlive;
    setCharacters([...listOfCharacters]);
  }
  return (
    <div className="container-fluid">
      <h1 className="jumbotron">Heroes and Villains</h1>
      <div className="row">
        <Form newChar={addChar}/>
        <Results myList={listOfCharacters} updateStatus={updateIsAlive}/>
      </div>
    </div>
  );
}

export default App;
