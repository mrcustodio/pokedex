import { Pokemon } from "../../api/pokedex-client"
import { statsContainer, progressBar, progressBarFill } from "./index.css"

export const PokemonStats = ({ pokemon }: { pokemon: Pokemon }) => {
  return (
    <div className={statsContainer}>
      {pokemon.base &&
        Object.keys(pokemon.base).map((key) => (
          <div key={key}>
            {key} - {pokemon.base[key]}
            {renderBar(pokemon.base[key])}
          </div>
        ))}
    </div>
  )
}

const renderBar = (value: number) => {
  return (
    <div className={progressBar}>
      <span
        className={progressBarFill}
        style={{ width: `${value > 100 ? 100 : value}%` }}
      ></span>
    </div>
  )
}
