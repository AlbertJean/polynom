import { connect } from "react-redux"
import { projectsActions, pathsActions, pointsActions } from "../../src/actions"
import * as selectors from "../../src/selectors"
import Overview from "./Overview"

const mapStateToProps = (state, props) => ({
  pathsById: state.pathsById,
  pointsById: state.pointsById,
  activePaths: selectors.activePathsSelector(state, props),
  activePoints: selectors.activePointsSelector(state, props),
})

const mapDispatchToProps = (dispatch, props) => ({
  onActivate(pathIds, pointIds) {
    dispatch(pathsActions.setActivePaths(pathIds, true))
    dispatch(pointsActions.setActivePoints(pointIds, true))
  },
  onDeactivate(pathIds, pointIds) {
    dispatch(pathsActions.setActivePaths(pathIds, false))
    dispatch(pointsActions.setActivePoints(pointIds, false))
  },
  onOverviewCreatePath(x, y) {
    dispatch(pathsActions.createPath(props.project.id, x, y))
    dispatch(projectsActions.update(props.project.id))
  },
  onOverviewCreatePoint(pathId, code, x, y, parameters) {
    dispatch(pointsActions.createPoint(pathId, code, x, y, parameters))
    dispatch(projectsActions.update(props.project.id))
  },
  onOverviewDelete(pointIds) {
    dispatch(pointsActions.deletePoints(pointIds))
    dispatch(projectsActions.update(props.project.id))
  },
  onXPositionsChange(pointIds, dx, format) {
    dispatch(pointsActions.setPointsX(pointIds, dx, format))
    dispatch(projectsActions.update(props.project.id))
  },
  onYPositionsChange(pointIds, dy, format) {
    dispatch(pointsActions.setPointsY(pointIds, dy, format))
    dispatch(projectsActions.update(props.project.id))
  },
  onParametersChange(pointId, parameters) {
    dispatch(pointsActions.setPointParameters(pointId, parameters))
    dispatch(projectsActions.update(props.project.id))
  },
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Overview)
