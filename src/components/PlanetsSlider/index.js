import Slider from 'react-slick'
import PlanetItem from '../PlanetItem'
import './index.css'

const PlanetsSlider = props => {
  const {planetsList} = props
  const settings = {
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  }

  return (
    <div className="bg-container">
      <div className="container" data-testid="planets">
        <Slider {...settings}>
          {planetsList.map(each => (
            <PlanetItem obj={each} key={each.id} />
          ))}
        </Slider>
      </div>
    </div>
  )
}
export default PlanetsSlider
