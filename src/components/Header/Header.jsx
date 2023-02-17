import React from "react";
import './header.css';

const Header = () => {
  return (
    <>
    <h1>Les bases du dev web</h1>
      <nav>
        <ul>
          <li>
            <a href="/">Accueil</a>
          </li>
          <li>
            <a href="/post">Publier</a>
          </li>
          <li>
            <a href="/articles">Articles</a>
          </li>
          <li>
            <a href="/weather">Météo</a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Header;