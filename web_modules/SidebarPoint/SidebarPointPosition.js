import React, { Component, PropTypes } from "react"
import Settings, { Setting } from "Settings"
import Range from "Range"
import { clamp } from "../../src/utils"

class SidebarPointPosition extends Component {
  handleXPositionChange = (e) => {
    const { project, point } = this.props
    const x = clamp(parseInt(e.target.value), 0, project.width)

    this.props.onXPositionChange(point.id, x)
  };

  handleYPositionChange = (e) => {
    const { project, point } = this.props
    const y = clamp(parseInt(e.target.value), 0, project.height)

    this.props.onYPositionChange(point.id, y)
  };

  render() {
    const { project, gridStep, point } = this.props

    return (
      <div>
        <Settings title="Point position">
          <Setting label="X">
            <Range
              min={ 0 }
              max={ project.width }
              step={ gridStep }
              value={ point.x }
              onChange={ this.handleXPositionChange } />
          </Setting>
          <Setting label="Y">
            <Range
              min={ 0 }
              max={ project.height }
              step={ gridStep }
              value={ point.y }
              onChange={ this.handleYPositionChange } />
          </Setting>
        </Settings>
      </div>
    )
  }
}

SidebarPointPosition.propTypes = {
  onXPositionChange: PropTypes.func.isRequired,
  onYPositionChange: PropTypes.func.isRequired,
  project: PropTypes.object.isRequired,
  gridStep: PropTypes.number.isRequired,
  point: PropTypes.object.isRequired,
}

export default SidebarPointPosition
