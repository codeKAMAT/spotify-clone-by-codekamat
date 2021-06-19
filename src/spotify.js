// https://developer.spotify.com/documentation/web-playback-sdk/quick-start/#
export const authEndpoint = 'https://accounts.spotify.com/authorize'
// Replace with your app's client ID, redirect URI and desired scopes
const clientId = 'b8b2c0b589c34703948cb7f2b89b3666'
const redirectUri = 'http://localhost:3000'
const scopes = [
  'user-read-currently-playing',
  'user-read-recently-played',
  'user-read-playback-state',
  'user-top-read',
  'user-modify-playback-state',
]
// get the access_token from the url search and then export the getTokenFrom Url to App.js*********************************************
export const getTokenFromUrl = () => {
  return window.location.hash
    .substring(1)
    .split('&')
    .reduce((initial, item) => {
      var parts = item.split('=')
      initial[parts[0]] = decodeURIComponent(parts[1])

      return initial
    }, {})
}
// ****************************************************

// get the authentication from the spotify side********************************

export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
  '%20'
)}&response_type=token&show_dialog=true`

// '%20' is 'space' in ASCII
// ****************************************************************************
