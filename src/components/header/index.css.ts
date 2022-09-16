import { style } from "@vanilla-extract/css"
import { theme } from "../../styles/theme.css"

export const title = style({
  padding: 20,
  display: "flex",
  justifyContent: "center",
  fontSize: "2rem",
  fontWeight: "bold",
  color: theme.font.primary,
})

export const filterContainer = style({
  width: "100%",
  display: "flex",
  justifyContent: "space-between",
  marginTop: 20,
  flexWrap: "wrap",
})

export const searchInputContainer = style({
  width: 400,
  "@media": {
    "screen and (max-width: 768px)": {
      width: "100%",
      marginBottom: 24,
    },
  },
})

export const searchInput = style({
  height: 35,
  width: "calc(100% - 10px)",
  borderRadius: 8,
  borderStyle: "none",
  outline: "unset",
  fontSize: "0.9rem",
  paddingLeft: 10,
})

export const dropdownContainer = style({
  width: "auto",
  "@media": {
    "screen and (max-width: 768px)": {
      width: "100%",
    },
  },
})

export const selectStyle = style({
  width: 200,
  height: 35,
  borderRadius: 8,
  margin: "0 auto",
  border: "none",
  backgroundColor: theme.background.primary,
  outline: "unset",
  fontSize: "0.9rem",
  "@media": {
    "screen and (max-width: 768px)": {
      width: "100%",
    },
  },
})
