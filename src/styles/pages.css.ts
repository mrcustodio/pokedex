import { style } from "@vanilla-extract/css"
import { theme } from "./theme.css"

export const containerHome = style({
  padding: 20,
  width: "calc(100vw - 40px)",
  "@media": {
    "screen and (min-width: 1030px)": {
      maxWidth: 1000,
    },
  },
})

export const pokemonContainer = style({
  padding: 20,
  width: "calc(100vw - 40px)",
  "@media": {
    "screen and (min-width: 1030px)": {
      maxWidth: 1000,
    },
  },
})

export const pokemonBackBtnContainer = style({
  width: "100%",
  marginBottom: 24,
})

export const pokemonBackBtn = style({
  width: "100%",
  height: 35,
  borderRadius: 5,
  backgroundColor: theme.background.primary,
  border: "none",
  cursor: "pointer",
})
