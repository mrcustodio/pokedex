import { Pokemon } from "../../api/pokedex-client"
import { Badge } from "./badge"
import { infoTitles, padding, infoContent } from "./index.css"

export const PokemonInfo = ({ pokemon }: { pokemon: Pokemon }) => {
  return (
    <div>
      <Badge id={pokemon.id} />
      <div className={padding}>
        <div className={infoTitles}>Name</div>
        <div className={infoContent}>{pokemon.name.english}</div>
        <div className={infoTitles}>Description</div>
        <div className={infoContent}>{pokemon.description}</div>
        <div className={infoTitles}>Specie</div>
        <div className={infoContent}>{pokemon.species}</div>
        <div className={infoTitles}>Type</div>
        <div className={infoContent}>
          {pokemon.type.map((type) => (
            <span key={type}>{type} </span>
          ))}
        </div>
      </div>
    </div>
  )
}
