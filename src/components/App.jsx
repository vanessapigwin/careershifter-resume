import '../styles/App.css'
import inputElemGen from './datafields'
import { useState } from 'react'
import GenForm from './Form.jsx'



function App() {
  const [genInfo, setGenInfo] = useState(inputElemGen[0]);
  const [displayedInfo, setDisplayedInfo] = useState({})

  function handleChange(e) {
    setGenInfo({...genInfo, value:e.target.value})
  }

  function handleSubmit() {
    setDisplayedInfo(genInfo)
  }

  return (
    <>
      <GenForm genInfo={genInfo} onsubmit={handleSubmit} onchange={handleChange}></GenForm>
      <p>{displayedInfo.value}</p>
    </>
  )
}

export default App
