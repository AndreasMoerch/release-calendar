import './App.css'
import { ListView } from './components/ListView'
import { LEGOSets } from './data'

function App() {

  return (
    <>
      <div>
        <p>Look at all those awesome LEGO sets!</p>
        <ListView sets={LEGOSets} /> 
      </div>
    </>
  )
}

export default App
