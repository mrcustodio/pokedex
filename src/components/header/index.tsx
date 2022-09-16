import {
  title,
  searchInput,
  searchInputContainer,
  filterContainer,
  dropdownContainer,
  selectStyle,
} from "./index.css"

interface HomeHeaderProps {
  titleOnly?: boolean
  initSearch?: { name: string; type: string }
  onSearch?: (e: React.FormEvent<HTMLInputElement>) => void
  onSelect?: (e: React.FormEvent<HTMLSelectElement>) => void
  typeList?: string[]
}

export const Header = (props: HomeHeaderProps) => {
  return (
    <>
      <div className={title}>Pokedex</div>
      {!props?.titleOnly && (
        <div className={filterContainer}>
          <div className={searchInputContainer}>
            <input
              className={searchInput}
              placeholder="Search any pokemon by name"
              onChange={props.onSearch}
              value={props.initSearch.name}
            />
          </div>
          <div className={dropdownContainer}>
            <select
              onChange={props.onSelect}
              className={selectStyle}
              defaultValue={props.initSearch.type}
            >
              <option value="---">Filter Pokemon Type</option>
              {props.typeList.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </div>
        </div>
      )}
    </>
  )
}
