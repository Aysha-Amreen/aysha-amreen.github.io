import React from 'react';
import Head from 'next/head';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

import '../styles/App.css';
import '../styles/index.css';

function App({ Component, pageProps }) {
  return (
    <div className="App">
      <Head>
        <title>Aysha Amreen</title> 
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Chakra+Petch:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap"
          rel="stylesheet"
        /> 
      </Head>
      <Navbar />
      <Component {...pageProps} /> 
      <Footer />
    </div>
  );
}

export default App;
