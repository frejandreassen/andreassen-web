import React from 'react'
import '../styles/globals.css'

function App({ Component, pageProps }) {
  return <React.Fragment>
    <Component {...pageProps} />
  </React.Fragment>
  
}

export default App
