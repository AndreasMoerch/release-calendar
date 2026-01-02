import './App.css'
import { ListView } from './components/ListView'
import { LEGOSets } from './data'
import { useUserLocale } from './hooks/useUserLocale'

function App() {

  const userLocale = useUserLocale();

  return (
    <>
      <div>
        <ListView sets={LEGOSets(userLocale)} />
      </div>
    </>
  )
}

export default App
