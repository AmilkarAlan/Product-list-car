
import './App.css'
import Card from './components/Card'
import items from "../data.json"

function App() {

  return (
    <>
      {items.map((item, index) => (
        <Card key={index} image={item.image} category={item.category} name={item.name} price={item.price} />
      ))}

    </>
  )
}

export default App
