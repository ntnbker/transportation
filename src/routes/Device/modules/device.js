// ------------------------------------
// Constants
// ------------------------------------
export const REDUCER_NAME = 'BOOK_TRIP'
export const BOOK_TRIP_VIEW_DETAIL = `${REDUCER_NAME}_VIEW_DETAIL`

// ------------------------------------
// Actions
// ------------------------------------

/*  This is a thunk, meaning it is a function that immediately
    returns a function for lazy evaluation. It is incredibly useful for
    creating async actions, especially when combined with redux-thunk! */

export const viewDetail = (id) => ({
  type    : BOOK_TRIP_VIEW_DETAIL,
  payload : id
})

export const actions = {
  viewDetail
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [BOOK_TRIP_VIEW_DETAIL]    : (state, action) => {
    const viewItem = state.list.filter(i => i.id === action.payload)[0]
    return {
      ...state, 
      viewItem,
    }
  }
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
  list: [{

  }],
  viewItem: null
}
export default function counterReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
