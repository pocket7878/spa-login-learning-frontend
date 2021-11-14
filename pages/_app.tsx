import '../styles/globals.css'
import { Auth0Provider } from '@auth0/auth0-react';

function MyApp({ Component, pageProps }) {
  const redirectUri = `${process.env["NEXT_PUBLIC_BASE_URL"]}/todos`

  return (<Auth0Provider
    domain={process.env.AUTH0_DOMAIN}
    clientId={process.env.AUTH0_CLIENT_ID}
    redirectUri={redirectUri}>
  <Component {...pageProps} />
  </Auth0Provider>);
}

export default MyApp
