import '../styles/App.css'
import inputElemGen from './datafields'
import { useState } from 'react'
import GenForm from './Form.jsx'


function App() {
  const [formData, setFormData] = useState(inputElemGen)
  const [displayedInfo, setDisplayedInfo] = useState({})

  function updateDisplay() {
    setDisplayedInfo(formData)
  }

  return (
    <>
      <GenForm
        formData={formData} 
        setFormData={setFormData}
        updateDisplay={updateDisplay}
      />
      <p>{displayedInfo['name'].value}</p>
    </>
  )
}

export default App 
