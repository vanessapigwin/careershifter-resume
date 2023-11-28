import '../styles/App.css'
import {inputElemGen, exp} from './datafields.js'
import { useState } from 'react'
import  { GenForm, ModForm } from './Form.jsx'
import {FormCard, ContentCard} from './Cards.jsx'


function App() {
  const [genData, setGenData] = useState(inputElemGen)
  const [expData, setExpData] = useState(exp)
  const [expList, setExpList] = useState([])
  const [projList, setProjList] = useState([])

  return (
    <>
      <FormCard>
        <h2>General Information</h2>
        <GenForm
          formData={genData} 
          setFormData={setGenData}
        />
      </FormCard>

      <FormCard>
        <h2>Work Experience</h2>
        <ModForm
          formData={expData}
          setFormData={setExpData}
          hasTextArea={true}
          dataList={expList}
          updateDataList={setExpList}
        />
      </FormCard>
      
      <ContentCard>
        <h1>{genData['name'].value}</h1>
        <h2>{genData['headline'].value}</h2>
        <p>{genData['email'].value}</p>
        <p>{genData['phone'].value}</p>
      </ContentCard>
    </>
  )
}

export default App 
