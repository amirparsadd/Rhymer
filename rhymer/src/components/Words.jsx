import { useState, useEffect } from 'react'
import "./styles/words.css"

export default function WordsComponent({ words }){

  return (
    <>
      { words.length == 0 ? <p className='none'>No Rhymes Available</p> : ""}
      <div className="words">
        {
          words.map((value) => {
            return (
              <div key={crypto.randomUUID()} className="word">
                <span className="word-text">{value}</span>
              </div>
            )
          })
        }
      </div>
    </>
  )
}
