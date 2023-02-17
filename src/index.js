import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import './index.css';

import Layout from "./layouts/Layout";
import HomePage from './routes/Home';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Articles from "./routes/Articles";
import Meteo from "./routes/Meteo";
import Publier from "./routes/Publier";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Header />
    <main>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/articles" element={<Articles articles={[]} />} />
          <Route path="/weather" element={<Meteo />} />
          <Route path="/post" element={<Publier />} />
        </Routes>
      </Layout>
    </main>
    <Footer />
  </BrowserRouter>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.unregister();
