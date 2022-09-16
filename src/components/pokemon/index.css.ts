import { style } from "@vanilla-extract/css"
import { theme } from "../../styles/theme.css"

export const cardContainer = style({
  width: 180,
  height: 220,
  backgroundColor: theme.background.pokeCard,
  flexDirection: "column",
  borderRadius: 5,
  boxShadow: `0px 6px 7px 0px ${theme.shadow.pokemonCard}`,
  WebkitBoxShadow: `0px 6px 7px 0px ${theme.shadow.pokemonCard}`,
  marginBottom: 25,
  cursor: "pointer",
  "@media": {
    "screen and (max-width: 1030px)": {
      width: "calc(33.3% - 18px)",
    },
    "screen and (max-width: 768px)": {
      width: "calc(50% - 12px)",
    },
    "screen and (max-width: 480px)": {
      width: "100%",
    },
  },
})

export const title = style({
  width: "100%",
  height: 20,
  display: "flex",
  justifyContent: "center",
})

export const badge = style({
  width: 50,
  height: 25,
  borderTopLeftRadius: 5,
  borderBottomRightRadius: 5,
  backgroundColor: theme.background.pokeBadge,
  color: theme.font.pokeBadge,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  fontSize: "0.9rem",
})

export const image = style({
  width: "100%",
  display: "flex",
  justifyContent: "center",
  marginTop: 15,
})

export const typeCard = style({
  background: theme.background.pokeType,
  borderRadius: 5,
  padding: 4,
  paddingLeft: 8,
  paddingRight: 8,
  color: theme.font.pokeType,
  fontSize: "0.8rem",
})

export const typeCardContainer = style({
  width: "100%",
  display: "flex",
  justifyContent: "space-evenly",
  marginTop: 15,
})

export const infoTitles = style({
  width: "100%",
  color: theme.background.primary,
  fontWeight: "bold",
  fontSize: "1.1rem",
})

export const infoContent = style({
  color: theme.font.infoContent,
  marginBottom: 12,
})

export const padding = style({
  padding: 24,
})

export const statsContainer = style({
  width: "100%",
})

export const progressBar = style({
  width: "100%",
  backgroundColor: theme.background.progressBar,
  padding: 3,
  borderRadius: 3,
  boxShadow: "inset 0 1px 3px rgba(0, 0, 0, .2)",
})

export const progressBarFill = style({
  display: "block",
  height: 22,
  backgroundColor: theme.background.primary,
  borderRadius: 3,
  transition: "width 500ms ease-in-out",
})

export const pkEvolutionCards = style({
  width: "100%",
  display: "flex",
  justifyContent: "space-between",
  marginTop: 12,
  flexWrap: "wrap",
})

export const pkEvolutionSection = style({
  width: "100%",
  marginTop: 24,
})
