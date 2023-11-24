import '../styles/App.css'
import inputElemGen from './datafields.js'
import { useState } from 'react'
import GenForm from './Form.jsx'
import FormCard from './Cards.jsx'


function App() {
  const [formData, setFormData] = useState(inputElemGen)

  function updateDisplay() {}

  return (
    <>
      <FormCard>
        <GenForm
          formData={formData} 
          setFormData={setFormData}
          updateDisplay={updateDisplay}
        ></GenForm>
      </FormCard>
      <p>{formData['name'].value}</p>
    </>
  )
}

export default App 
