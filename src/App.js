
import React, { useState, useEffect } from 'react'
import './App.css'
import axios from "axios"
import Table from "./components/Table"
import Input from './components/Input'

const App = () => {
  const [characters, setCharacters] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  

  useEffect(() => {
    const fetchCharacters = async () => {
      const response = await axios('https://swapi.dev/api/people/?page=1')
      const speciesResponse = await axios('https://swapi.dev/api/species/?page=1')
      console.log(response.data.results);
      
      for (const character of response.data.results) {
        const homeworld = await axios.get(character.homeworld);
        character.homeworld = homeworld.data.name;

        const species = await axios.get(character.species); 
        !species.data.name ? character.species = "Human" : character.species = species.data.name;
      }
      
      setCharacters(response.data.results)
      setIsLoading(false);
    }

    fetchCharacters();
  }, [])
  
  return(
    <div>
        <h1>Star Wars API</h1>

      <Input /> 
      <Table characters={characters} isLoading={isLoading} />
    </div>
  )
}

export default App