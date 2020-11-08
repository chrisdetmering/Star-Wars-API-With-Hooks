
import React, { useState, useEffect } from 'react'
import './App.css'
import axios from "axios"
import Table from "./components/Table"
import Input from './components/Input'

const App = () => {
  const [characters, setCharacters] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  // const [planets, setPlanets] = useState([])

  useEffect(() => {
    const fetchCharacters = async () => {
      const response = await axios('https://swapi.dev/api/people/?page=1')
      console.log(response.data.results);
      
      for (const character of response.data.results) {
        const homeworld = await axios.get(character.homeworld); //planet url
        character.homeworld = homeworld.data.name;
        console.log(character.homeworld);
      }

      for (const character of response.data.results) {
        const species = await axios.get(character.species); //species url
        character.species = species.data.name;
        console.log(character.species)
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