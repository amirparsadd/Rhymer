import { useState, useEffect } from 'react'
import "./styles/input.css"

export default function InputComponent({ afterDebounce, placeholder }){
  const [input, setInput] = useState("")

  function validateInput(input){
    return /^\S+$/.test(input) && input.length > 2
  }

  useEffect(() => {
    if(!validateInput(input)) return
    const getData = setTimeout(() => {
      afterDebounce(input)
    }, 500)

    return () => clearTimeout(getData)
  }, [input])

  return (
    <>
      <input maxLength={25} type="text" placeholder={placeholder} value={input} onChange={e => setInput(e.target.value)}/>
      <button onClick={e => { setInput("") }}>Clear</button>
    </>
  )
}
