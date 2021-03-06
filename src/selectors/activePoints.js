import { createSelector } from "reselect"
import { activePathsSelector } from "./activePaths"

const pathsByIdSelector = (state) => state.present.pathsById
const pointsByIdSelector = (state) => state.present.pointsById

export const activePointsSelector = createSelector(
  pathsByIdSelector,
  pointsByIdSelector,
  activePathsSelector,
  (pathsById, pointsById, activePaths) => {
    return activePaths.reduce((acc, key) => [
      ...acc,
      ...pathsById[key].points.filter((id) => pointsById[id].isActive),
    ], [])
  }
)

export const pointSelector = createSelector(
  pointsByIdSelector,
  activePointsSelector,
  (pointsById, activePoints) => {
    if (activePoints.length === 1) {
      return pointsById[activePoints[0]]
    }
  }
)

export const previousPointSelector = createSelector(
  pathsByIdSelector,
  pointsByIdSelector,
  activePathsSelector,
  pointSelector,
  (pathsById, pointsById, activePaths, point) => {
    if (point) {
      return activePaths.reduce((acc, id) => {
        const { points } = pathsById[id]
        const index = points.indexOf(point.id)

        return index > 0 ? pointsById[points[index - 1]] : acc
      }, null)
    }
  }
)
