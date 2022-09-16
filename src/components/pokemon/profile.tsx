import { Pokemon } from "../../api/pokedex-client"
import { padding, infoContent, infoTitles } from "./index.css"

export const PokemonProfile = ({ pokemon }: { pokemon: Pokemon }) => {
  const [male, female] = pokemon.profile.gender.split(":")
  const abilities = pokemon.profile.ability.filter(
    (ability) => ability[1] === "true"
  )

  return (
    <div className={padding}>
      <div className={infoTitles}>Profile</div>
      {pokemon.profile?.height && (
        <div className={infoContent}>Height: {pokemon.profile.height}</div>
      )}
      {pokemon.profile?.weight && (
        <div className={infoContent}>Weight: {pokemon.profile.weight}</div>
      )}
      {pokemon.profile?.egg && (
        <div className={infoContent}>
          Egg:{" "}
          {pokemon.profile.egg.map((type) => (
            <span key={type}>{type} </span>
          ))}
        </div>
      )}
      {abilities.length > 0 && (
        <div className={infoContent}>
          Abilities:{" "}
          {abilities.map((ability) => (
            <span key={ability[0]}>{ability[0]}</span>
          ))}
        </div>
      )}
      <div className={infoContent}>
        Gender: {male === "Genderless" ? male : male && `Male ${male}%`}{" "}
        {female && `- Female ${female}%`}
      </div>
    </div>
  )
}
