import { PokemonCard } from "../../components/pokemon/card"
import { Pokemon } from "../../api/pokedex-client"
import { container } from "./index.css"

export const PokemonCardSet = ({ list }: { list: Pokemon[] }) => {
  return (
    <div className={container}>
      {list.map((pokemon) => (
        <PokemonCard key={pokemon.id} pokemon={pokemon} />
      ))}
    </div>
  )
}
