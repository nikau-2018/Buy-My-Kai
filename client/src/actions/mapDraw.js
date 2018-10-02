/* 
  FILE: MAPDRAW.JS - ACTION
  VER:  1.0.0
  DESC: Main action file for the map draw component.
  ----------------------------------------------------
*/

// Export actions.
export const MAPDRAW_PENDING = 'MAPDRAW_PENDING'
export const MAPDRAW_SUCCESS = 'MAPDRAW_SUCCESS'

// Action functions.

// Pending dispatch function.
export const mapdrawPending = error => ({
  type: MAPDRAW_PENDING,
  error
})

// Success dispatch function.
export const mapdrawSuccess = (drawState) => ({
  type: MAPDRAW_SUCCESS,
  drawState
})

// Export dispatch function.
export const mapDraw = ({drawState}) => (
  dispatch => {
    // Dispatch pending action.
    dispatch(mapdrawPending())

    // Dispatch success action.
    dispatch(mapdrawSuccess(drawState))
  }
)

