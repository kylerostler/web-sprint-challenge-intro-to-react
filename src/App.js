import React, { useState, useEffect } from 'react';
import './App.css';
import Axios from 'axios';


const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
const [characters, setCharacters] = useState([]);
const [currentCharId, setCurrentCharId] = useState('1');
  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  const openDetails = id => {
    setCurrentCharId(id)
  }

  const closeDetails = () => {
    setCurrentCharId(null)
  }
  
useEffect(() => {
  Axios.get(`https://swapi.dev/api/people`)
    .then(response => {
      setCharacters(response.data);
    })
    .catch(error => {
      console.log(error)
    })
}, [])

console.log(characters)

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
    </div>
  );
}

export default App;
