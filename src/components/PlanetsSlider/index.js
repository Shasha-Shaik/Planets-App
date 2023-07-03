import './index.css'
import {Component} from 'react'

import Slider from 'react-slick'

import PlanetItem from '../PlanetItem'

class PlanetsSlider extends Component {
  render() {
    const {planetsList} = this.props
    return (
      <div className="app-container" data-testid="planets">
        <h1 className="main-heading">PLANETS</h1>
        <Slider>
          {planetsList.map(each => (
            <PlanetItem eachObj={each} key={each.id} />
          ))}
        </Slider>
      </div>
    )
  }
}
export default PlanetsSlider
