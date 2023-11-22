import '../styles/App.css'
import {Form, TextField} from './Form.jsx'
import SectionCard from './Cards'


function App() {

  return (
    <>
    <h2>General Information</h2>
    <Form>
      <TextField name='name' placeholder='name'/>
    </Form>
    </>
  )
}

export default App
