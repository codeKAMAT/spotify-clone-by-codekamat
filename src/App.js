import { useEffect } from 'react'
import './App.css'
import Login from './Login'
import { getTokenFromUrl } from './spotify'
import SpotifyWebApi from 'spotify-web-api-js'
import Player from './Player'

import { useDataLayerValue } from './DataLayer'

const spotify = new SpotifyWebApi()

function App() {
  // we get the accesstoken from the url and authenticate the user from the spotify side*****************************
  const [{ user, token }, dispatch] = useDataLayerValue()
  useEffect(() => {
    const hash = getTokenFromUrl()
    // clean the URL search
    window.location.hash = ''

    const _token = hash.access_token
    if (_token) {
      dispatch({
        type: 'SET_TOKEN',
        token: _token,
      })

      spotify.setAccessToken(_token)

      // get the user when you authenticate spotify
      spotify.getMe().then((user) => {
        dispatch({
          type: 'SET_USER',
          user: user,
        })
      })
      // Get the playlist from the spotify
      spotify.getUserPlaylists().then((playlists) => {
        dispatch({
          type: 'SET_PLAYLISTS',
          playlists,
        })
      })
      spotify.getPlaylist('1XlwBIwDBXkzxuVS9XbeIX').then((response) =>
        dispatch({
          type: 'SET_DISCOVER_WEEKLY',
          discover_weekly: response,
        })
      )
    }
    // console.log('Lelo token 🚀', _token)
  }, [])
  console.log('🚀🚀🚀🚀', user)
  console.log('🚀', token)

  // ***************************************
  return <div>{token ? <Player spotify={spotify} /> : <Login />}</div>
}

export default App
