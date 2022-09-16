import { style } from "@vanilla-extract/css"
import { theme } from "../../styles/theme.css"

const shadowBase = style({
  borderRadius: 10,
  backgroundColor: "white",
  boxShadow: `0px 6px 7px 0px ${theme.shadow.pokemonCard}`,
  WebkitBoxShadow: `0px 6px 7px 0px ${theme.shadow.pokemonCard}`,
})

export const image = style([
  shadowBase,
  {
    width: "calc(40% - 92px)",
    display: "flex",
    justifyContent: "center",
    padding: 40,
    "@media": {
      "screen and (max-width: 1030px)": {
        width: "100%",
      },
    },
  },
])

export const detailsTopContainer = style({
  width: "100%",
  display: "flex",
  justifyContent: "space-between",
  flexWrap: "wrap",
})

export const pkInfoContainer = style([
  shadowBase,
  {
    width: "calc(60% - 12px)",
    display: "flex",
    justifyContent: "flex-start",
    "@media": {
      "screen and (max-width: 1030px)": {
        width: "100%",
        marginTop: 24,
      },
    },
  },
])

export const detailsMidContainer = style({
  width: "100%",
  display: "flex",
  justifyContent: "space-between",
  marginTop: 24,
  flexWrap: "wrap",
})

export const pkProfileContainer = style([
  shadowBase,
  {
    width: "calc(35% - 12px)",
    "@media": {
      "screen and (max-width: 1030px)": {
        width: "100%",
      },
    },
  },
])

export const pkStatsContainer = style([
  shadowBase,
  {
    width: "calc(65% - 60px)",
    display: "flex",
    justifyContent: "center",
    padding: 24,
    "@media": {
      "screen and (max-width: 1030px)": {
        width: "100%",
        marginTop: 24,
      },
    },
  },
])
