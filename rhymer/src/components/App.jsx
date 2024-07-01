import dotenv from "dotenv"
import axios from 'axios'

import { useState } from 'react'
import './styles/app.css'
import InputComponent from './Input';
import WordsComponent from './Words';

function App() {
  dotenv.config()
  const [words, setWords] = useState([])

  function callAPI(str){
    axios
      .get(
          `https://api.api-ninjas.com/v1/rhyme?word=${str}`,
          {
            headers: { "X-Api-Key": procces.env.API_KEY }
          }
      )
      .then((response) => {
          setWords(response.data)
      });
  }

  return (
    <>
      <div className="wrapper">
        <div className="title-container">
          <h1 className="title">Rhymer </h1>
          <h5 className="subtitle">Let Your Lyrics Flow</h5>
        </div>
        <div className="search-container">
          <InputComponent afterDebounce={callAPI} placeholder="Enter A Word"/> 
        </div>
        <div className="results-container">
          <WordsComponent words={words}/>
        </div>
      </div>
    </>
  )
}

export default App
