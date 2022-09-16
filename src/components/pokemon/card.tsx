import { Pokemon } from "../../api/pokedex-client"
import { cardContainer, title, image } from "./index.css"
import { useRouter } from "next/router"
import Image from "next/image"
import { PokemonType } from "./type"
import { Badge } from "./badge"

export const PokemonCard = ({ pokemon }: { pokemon: Pokemon }) => {
  const router = useRouter()

  const handleCardClick = (e) => {
    e.preventDefault()
    router.push(`/pokemon/${pokemon.name.english}`)
  }

  return (
    <div className={cardContainer} onClick={handleCardClick}>
      <Badge id={pokemon.id} />
      <div className={title}>{pokemon.name.english}</div>
      <div className={image}>
        <Image
          alt={pokemon.name.english}
          title={pokemon.name.english}
          src={pokemon.image.thumbnail}
          width={100}
          height={100}
        />
      </div>
      <PokemonType list={pokemon.type} />
    </div>
  )
}
