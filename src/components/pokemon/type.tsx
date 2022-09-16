import { typeCard, typeCardContainer } from "./index.css"

export const PokemonType = ({ list }: { list: string[] }) => {
  return (
    <div className={typeCardContainer}>
      {list.map((type) => (
        <div key={type} className={typeCard}>
          {type}
        </div>
      ))}
    </div>
  )
}
