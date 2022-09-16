import { globalStyle, fontFace } from "@vanilla-extract/css"

export const theme = {
  background: {
    primary: "#fca311",
    global: "#14213d",
    pokeCard: "white",
    pokeType: "#14213d",
    progressBar: "#ededed",
    pokeBadge: "#fca311",
  },
  font: {
    primary: "#e5e5e5",
    pokeType: "white",
    infoContent: "#666",
    pokeBadge: "#14213d",
  },
  shadow: {
    pokemonCard: "#0c1527",
  },
}

const comicSans = fontFace({
  src: 'local("Comic Sans MS")',
})

globalStyle("html, body", {
  margin: 0,
  display: "flex",
  justifyContent: "center",
  width: "100vw",
  backgroundColor: theme.background.global,
  fontFamily: comicSans,
})
