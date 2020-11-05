
import React, { useState, useEffect } from 'react'
import './App.css'
import axios from "axios"
import Table from "./components/Table"

const App = () => {
  const [characters, setCharacters] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [planets, setPlanets] = useState([])

  useEffect(() => {
    const fetchCharacters = async () => {
      const result = await axios('https://swapi.dev/api/people/?page=1')
      const planetResult = await axios('https://swapi.dev/api/planets/?page=1')

      console.log(result.data.results)
      setCharacters(result.data.results)
      setPlanets(planetResult.data.results)
      console.log(planetResult.data.results)
    }

    fetchCharacters();
  }, [])
  
  
  return(
    <div>
      
      <Table characters={characters} planets={planets}/>
    </div>
  )
}

export default App