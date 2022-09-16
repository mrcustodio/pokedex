import { GetServerSideProps } from "next"
import { useRouter } from "next/router"
import { PokemonDetails } from "../../../modules/pokemon-details"
import { PokedexClient } from "../../../api/pokedex-client"
import {
  pokemonContainer,
  pokemonBackBtnContainer,
  pokemonBackBtn,
} from "../../../styles/pages.css"
import { Header } from "../../../components/header"

export default function Pokemon({ pokemon, evolutions }) {
  const router = useRouter()

  const handleBackClick = (e) => {
    e.preventDefault()
    router.push("/")
  }

  return (
    <div className={pokemonContainer}>
      <Header titleOnly={true} />
      <div className={pokemonBackBtnContainer}>
        <button className={pokemonBackBtn} onClick={handleBackClick}>
          Back
        </button>
      </div>
      <PokemonDetails pokemon={pokemon} evolutions={evolutions} />
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const Pokedex = new PokedexClient()
  const name = context.params?.name as string

  const pokemon = Pokedex.getPokemonByName(name)

  if (!pokemon) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    }
  }

  let first = Pokedex.getPokemonById(parseInt(pokemon.evolution?.prev?.[0]))
  let second = pokemon
  let third = Pokedex.getPokemonById(parseInt(pokemon.evolution?.next?.[0][0]))

  if (!third) {
    third = second
    second = first
    first = Pokedex.getPokemonById(parseInt(second?.evolution?.prev?.[0]))
  } else if (!first) {
    first = pokemon
    second = third
    third = Pokedex.getPokemonById(parseInt(second?.evolution?.next?.[0][0]))
  }

  let evolutions = [first, second, third].filter((evo) => evo !== undefined)

  if (
    evolutions.length === 1 &&
    JSON.stringify(evolutions[0]) === JSON.stringify(pokemon)
  ) {
    evolutions = []
  }

  return { props: { pokemon, evolutions } }
}
