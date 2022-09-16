import { badge } from "./index.css"

export const Badge = ({ id }: { id: number }) => {
  return <div className={badge}>#{id}</div>
}
