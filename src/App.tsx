import { useState } from 'react'
import './App.css'
import CardContainer from './components/CardContainer'
import Cart from './components/Cart'
import Confirmation from './components/Confirmation';

function App() {
  const [confirm, setConfirm] = useState(false);

  return (
    <>
      <main className='container mx-auto p-4 flex flex-col gap-8 lg:flex-row'>
        
        <CardContainer />
        <Cart setConfirm={setConfirm}/>
        {confirm ? <Confirmation setConfirm={setConfirm}/> : null}
      </main>
    </>
  )
}

export default App
