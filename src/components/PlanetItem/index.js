import './index.css'

const PlanetItem = props => {
  const {obj} = props
  const {name, imageUrl, description} = obj

  return (
    <div className="itemContainer">
      <h1>Planets</h1>
      <img src={imageUrl} alt={`planet ${name}`} />
      <h2>{name}</h2>
      <p>{description}</p>
    </div>
  )
}
export default PlanetItem
