import { PANEL_IS_ACTIVE } from '../constants/panelConstants'

export const panelIsActive = (id) => (dispatch) => {
  dispatch({
    type: PANEL_IS_ACTIVE,
    payload: id,
  })
}
