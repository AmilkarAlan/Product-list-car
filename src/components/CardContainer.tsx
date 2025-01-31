import items from "../../data.json"
import Card from './Card'

const CardContainer = () => {
  return (
    <section>
      <h1 className='text-4xl font-bold mb-8'>Desserts</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {items.map((item, index) => (
          <Card key={index} image={item.image} category={item.category} name={item.name} price={item.price} id={index + 1} />
        ))}
      </div>
    </section>
  )
}

export default CardContainer