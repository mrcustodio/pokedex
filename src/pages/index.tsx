import HomePage from "./home"
import { PokedexClient } from "../api/pokedex-client"

export default function Home({ initialList, typeList }) {
  return <HomePage initialList={initialList} typeList={typeList} />
}

export async function getServerSideProps() {
  const Pokedex = new PokedexClient()

  const initialList = Pokedex.listPokemon({ limit: 50 })
  const typeList = Pokedex.getTypeList()

  return { props: { initialList, typeList } }
}
