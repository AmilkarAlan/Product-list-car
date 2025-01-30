
import './App.css'
import CardContainer from './components/CardContainer'
import Cart from './components/Cart'

function App() {

  return (
    <main className='container mx-auto p-4'>
      <h1 className='text-4xl font-bold mb-8'>Desserts</h1>
      <CardContainer />
      <Cart items={4} />
    </main>
  )
}

export default App
