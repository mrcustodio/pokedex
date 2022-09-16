import { createSlice } from "@reduxjs/toolkit"
import type { PayloadAction } from "@reduxjs/toolkit"
import { IPokemonListProps, Pokemon, PokedexClient } from "../../api/pokedex-client"

interface IHomeSlice extends IPokemonListProps {
  results: Pokemon[]
}

const Pokedex = new PokedexClient()

// Define the initial state using that type
const initialState: IHomeSlice = {
  name: "",
  results: [],
}

export const homeSlice = createSlice({
  name: "home",
  initialState,
  reducers: {
    searchByName: (state, action: PayloadAction<string>) => {
      state.name = action.payload
      state.results = Pokedex.listPokemon({
        name: action.payload,
        type: state.type,
        limit: state.limit,
      })
    },
    searchByType: (state, action: PayloadAction<string>) => {
      state.type = action.payload
      state.results = Pokedex.listPokemon({
        name: state.name,
        type: action.payload,
        limit: state.limit,
      })
    },
  },
})

export const { searchByName, searchByType } = homeSlice.actions

export default homeSlice.reducer
