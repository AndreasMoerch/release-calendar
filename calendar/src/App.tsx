import './App.css'
import { ListView } from './components/ListView'
import { LEGOSets } from './data'

function App() {

  return (
    <>
      <div>
        <ListView sets={LEGOSets} /> 
      </div>
    </>
  )
}

export default App
