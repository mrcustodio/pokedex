import Image from "next/image"
import { Pokemon } from "../../api/pokedex-client"
import { PokemonInfo } from "../../components/pokemon/info"
import { PokemonProfile } from "../../components/pokemon/profile"
import { PokemonStats } from "../../components/pokemon/stats"
import { PokemonEvolution } from "../../components/pokemon/evolution"
import {
  image,
  detailsTopContainer,
  pkInfoContainer,
  detailsMidContainer,
  pkProfileContainer,
  pkStatsContainer,
} from "./index.css"

interface IPokeDetailsProps {
  pokemon: Pokemon
  evolutions: Pokemon[]
}

export const PokemonDetails = ({ pokemon, evolutions }: IPokeDetailsProps) => {
  return (
    <>
      <div className={detailsTopContainer}>
        <div className={image}>
          <Image
            alt={pokemon.name.english}
            title={pokemon.name.english}
            src={pokemon.image.hires}
            width={300}
            height={300}
          />
        </div>
        <div className={pkInfoContainer}>
          <PokemonInfo pokemon={pokemon} />
        </div>
      </div>
      <div className={detailsMidContainer}>
        <div className={pkProfileContainer}>
          <PokemonProfile pokemon={pokemon} />
        </div>
        {pokemon.base && (
          <div className={pkStatsContainer}>
            <PokemonStats pokemon={pokemon} />
          </div>
        )}
      </div>
      {evolutions.length > 0 && (
        <div>
          <PokemonEvolution evolutions={evolutions} />
        </div>
      )}
    </>
  )
}
