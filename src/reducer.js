export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  // Remove after developement
  // token:
  //   'BQAVjMUQpsSI91t8tt8tFOQ_JE5zvPYXZnw02--etqd9chIxY8gsaWInX-Fru5uOgQuHNKKYhVpz2pDvEmbCXsYun7kG0_yp5YMe8S1sjgvf2fM_NvwruzF66MzPIfdEH9vl_5dq0FseHm-si9SO9y6glMc7aEvWdCOyxainLDZXDHqaiExpvboE4EtpULc2NP_-SNcoFZMo0R75xrKTW-P9IQ',
}

const reducer = (state, action) => {
  console.log(action)

  // Action -> type, [payload]
  switch (action.type) {
    case 'SET_USER':
      return {
        ...state,
        user: action.user,
      }
    case 'SET_TOKEN':
      return {
        ...state,
        token: action.token,
      }
    case 'SET_PLAYLISTS':
      return {
        ...state,
        playlists: action.playlists,
      }
    case 'SET_DISCOVER_WEEKLY':
      return {
        ...state,
        discover_weekly: action.discover_weekly,
      }
    default:
      return state
  }
}

export default reducer
