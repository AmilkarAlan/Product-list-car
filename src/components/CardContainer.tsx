import items from "../../data.json"
import Card from './Card'
type Props = {}

const CardContainer = (props: Props) => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {items.map((item, index) => (
        <Card key={index} image={item.image} category={item.category} name={item.name} price={item.price} />
      ))}
    </section>
  )
}

export default CardContainer