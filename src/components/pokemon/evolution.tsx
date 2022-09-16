import { Pokemon } from "../../api/pokedex-client"
import { PokemonCard } from "./card"
import { pkEvolutionSection, pkEvolutionCards, infoTitles } from "./index.css"

export const PokemonEvolution = ({ evolutions }: { evolutions: Pokemon[] }) => {
  return (
    <div className={pkEvolutionSection}>
      <div className={infoTitles}>Evolutions</div>
      <div className={pkEvolutionCards}>
        {evolutions.map((pokemon) => (
          <PokemonCard key={pokemon.id} pokemon={pokemon} />
        ))}
      </div>
    </div>
  )
}
