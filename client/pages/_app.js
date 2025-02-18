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
      </Head>
      <Navbar />
      <Component {...pageProps} /> {/* The page content */}
      <Footer />
    </div>
  );
}

export default App;
