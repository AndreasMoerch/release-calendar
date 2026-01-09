import './App.css'
import { ListView } from './components/ListView'
import { AllSets } from './data'
import { useUserLocale } from './hooks/useUserLocale'

function App() {

  const userLocale = useUserLocale();

  return (
    <>
      <div>
        <ListView sets={AllSets(userLocale)} />
      </div>
    </>
  )
}

export default App
