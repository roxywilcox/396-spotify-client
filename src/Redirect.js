import React from 'react';

class Redirect extends React.Component {

    constructor(props){
        super(props);
        this.redirectAuthorization = this.redirectAuthorization.bind(this);
    };

    redirectAuthorization(){
        const client_id = process.env.REACT_APP_CLIENT_ID;
        const redirect_uri = process.env.REACT_APP_REDIRECT_URI; // Your redirect uri
        var generateRandomString = function(length) {
            var text = '';
            var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
          
            for (var i = 0; i < length; i++) {
              text += possible.charAt(Math.floor(Math.random() * possible.length));
            }
            return text;
          };
          var scope = 'user-read-private%20user-library-read';
          var state = generateRandomString(16);
          var stateKey = 'spotify_auth_state';
          const url = "https://accounts.com/authorize?client_id=" + client_id + "&redirect_url=" + redirect_uri + "&scope=" + scope + "&resposne_type=token&state=" + state
          console.log(url)
          fetch(url) 
            .then(response => console.log(response))     
    }

    render() {
    return (
      <div className="login">
        <h1>This is an example of the Authorization Code flow</h1>
        <a className="btn btn-primary" href="/redirect">Log in with Spotify</a>
      </div>
    )
    }
};

export default Redirect;