
import React, { useState, useEffect } from 'react'
import './App.css'
import axios from "axios"
import Table from "./components/Table"
import Input from './components/Input'

const App = () => {
  const [characters, setCharacters] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [species, setSpecies] = useState([])

  useEffect(() => {
    const fetchCharacters = async () => {
      const response = await axios('https://swapi.dev/api/people/?page=1')
      const speciesResponse = await axios('https://swapi.dev/api/species/?page=1')
      console.log(response.data.results);
      
      for (const character of response.data.results) {
        const homeworld = await axios.get(character.homeworld); 
        character.homeworld = homeworld.data.name;
        console.log(character.homeworld);
      }
      
      setCharacters(response.data.results)
    }

    fetchCharacters();
  }, [])
  
  return(
    <div>
        <h1>Star Wars API</h1>

       <Input /> 
      <Table characters={characters} />
    </div>
  )
}

export default App