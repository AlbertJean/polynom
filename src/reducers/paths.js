import points from "./points"
import {
  ADD_PATH,
  REMOVE_PATH,
  SET_ACTIVE_PATH,
  SET_RELATIVE,
  SET_CLOSED,
  SET_FILLED,
  SET_POINT_CODE,
  SET_POINT_X,
  SET_POINT_Y,
  SET_QUAD_X1,
  SET_QUAD_Y1,
  SET_CUB_X1,
  SET_CUB_Y1,
  SET_CUB_X2,
  SET_CUB_Y2,
  SET_SMOOTH_X2,
  SET_SMOOTH_Y2,
  SET_ARC_RX,
  SET_ARC_RY,
  SET_ARC_ROT,
  SET_ARC_LARGE,
  SET_ARC_SWEEP,
} from "../constants/ActionTypes"

const initialState = [
  {
    id: 0,
    name: "First Path",
    isActive: true,
    isClosed: false,
    isRelative: false,
    isFilled: false,
    points: points(undefined, { type: null }),
  },
  /*{
    id: 1,
    name: "Second Path",
    isActive: false,
    isClosed: false,
    isRelative: false,
    isFilled: false,
    points: points(undefined, { type: null }),
  },*/
]

function path(state = {
  id: 0,
  name: "",
  isActive: false,
  isClosed: false,
  isRelative: false,
  isFilled: false,
  points: [],
}, action) {
  switch (action.type) {
  case SET_RELATIVE:
    return {
      ...state,
      isRelative: action.isRelative,
    }

  case SET_CLOSED:
    return {
      ...state,
      isClosed: action.isClosed,
    }

  case SET_FILLED:
    return {
      ...state,
      isFilled: action.isFilled,
    }

  case SET_POINT_CODE:
  case SET_POINT_X:
  case SET_POINT_Y:
  case SET_QUAD_X1:
  case SET_QUAD_Y1:
  case SET_CUB_X1:
  case SET_CUB_Y1:
  case SET_CUB_X2:
  case SET_CUB_Y2:
  case SET_SMOOTH_X2:
  case SET_SMOOTH_Y2:
  case SET_ARC_RX:
  case SET_ARC_RY:
  case SET_ARC_ROT:
  case SET_ARC_LARGE:
  case SET_ARC_SWEEP:
    return {
      ...state,
      points: points(state.points, action),
    }

  default:
    return state
  }
}

export default function paths(state = initialState, action) {
  switch (action.type) {
  case REMOVE_PATH:
    return state.reduce((acc, p) =>
      p.id !== action.id ? [...acc, p] : acc, [])

  case SET_ACTIVE_PATH:
    return state.map((p) => ({
      ...p,
      isActive: p.id === action.id,
    }))

  case SET_RELATIVE:
  case SET_CLOSED:
  case SET_FILLED:
  case SET_POINT_CODE:
  case SET_POINT_X:
  case SET_POINT_Y:
  case SET_QUAD_X1:
  case SET_QUAD_Y1:
  case SET_CUB_X1:
  case SET_CUB_Y1:
  case SET_CUB_X2:
  case SET_CUB_Y2:
  case SET_SMOOTH_X2:
  case SET_SMOOTH_Y2:
  case SET_ARC_RX:
  case SET_ARC_RY:
  case SET_ARC_ROT:
  case SET_ARC_LARGE:
  case SET_ARC_SWEEP:
    return state.map((p) =>
      p.id === action.id ? path(p, action) : p)

  default:
    return state
  }
}
