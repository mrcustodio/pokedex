import pokedata from "./data/pokemon.json"

export type Pokemon = typeof pokedata[number]
export interface IPokemonListProps {
  name?: string
  type?: string
  limit?: number
}

/**
 * To initialize: const Pokedex = new PokedexClient()
 *
 * const pokemon = PokedexClient.listPokemon()
 * const charizard = PokedexClient.getPokemonByName('charizard')
 */
export class PokedexClient {
  private pokedex: Map<string, Pokemon> = new Map()
  private pokedexWithId: Map<number, Pokemon> = new Map()

  constructor() {
    pokedata.forEach((pokemon) => {
      this.pokedex.set(pokemon.name.english.toLocaleLowerCase(), pokemon)
      this.pokedexWithId.set(pokemon.id, pokemon)
    })
  }

  /**
   * Returns a list of pokemon filtered by name and or type
   */
  listPokemon({ name, type, limit }: IPokemonListProps) {
    let response: Pokemon[] = []

    /* Search for pokemon name and fill the response array */
    if (name?.length > 0) {
      const result = Array.from(this.pokedex.keys())
        .filter((engName) => engName.includes(name.toLocaleLowerCase()))
        .map((engName) => this.pokedex.get(engName))
      response.push(...result)
    }

    if (type) {
      /** If type is presente but not during a name search, then filter from source
       * otherwise filter from the response array.
       */
      if (response.length === 0) {
        const values = Array.from(this.pokedex.values())
        response.push(...this.filterPokemonsByType(values, type))
      } else {
        response = this.filterPokemonsByType(response, type)
      }
    }

    /* Return the initial list */
    if (!name && !type) {
      const values = Array.from(this.pokedex.values())
      return values.slice(0, limit)
    }

    return response.slice(0, limit)
  }

  /**
   * Returns a single pokemon selected by exact name match
   */
  getPokemonByName(name: string): Pokemon {
    return this.pokedex.get(name.toLocaleLowerCase())
  }

  /**
   * Returns a list of all pokemon types
   */
  getTypeList(): string[] {
    const values = Array.from(this.pokedex.values())
    const types = values.map((pokemon) => pokemon.type)
    return types.flat().filter((v, i, a) => a.indexOf(v) === i)
  }

  /**
   * Returns a single pokemon selected by id
   */
  getPokemonById(id: number): Pokemon {
    return this.pokedexWithId.get(id)
  }

  /**
   * Filter list of pokemons by type
   */
  private filterPokemonsByType(source: Pokemon[], type: string): Pokemon[] {
    return source.filter((pokemon) => pokemon.type.some((pType) => pType === type))
  }
}
