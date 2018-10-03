// Export actions.
export const MAPDRAW_SUCCESS = 'MAPDRAW_SUCCESS'

// Action functions.

// Success dispatch function.
export const mapdrawSuccess = () => ({
  type: MAPDRAW_SUCCESS
})

// Export dispatch function.
export const mapDraw = () => (
  dispatch => {
    // Dispatch success action.
    dispatch(mapdrawSuccess())
  }
)
