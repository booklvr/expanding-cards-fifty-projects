import { PANEL_IS_ACTIVE } from '../constants/panelConstants'

export const panelActiveReducer = (state = '', action) => {
  const { type, payload } = action

  switch (type) {
    case PANEL_IS_ACTIVE:
      return {
        ...state,
        activeIndex: payload,
      }
    default:
      return state
  }
}
