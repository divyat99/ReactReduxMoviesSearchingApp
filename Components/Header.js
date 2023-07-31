import React from "react";

import { useNavigate } from "react-router-dom";

import Search from "./Search";

const Header = () => {
  let navigate = useNavigate();

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark " style={{backgroundColor:'#160455'}}>
   
        <a className="navbar-brand" onClick={() => navigate("/newfile")}>
          Home
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
       
          <ul className="navbar-nav mr-auto">
         
           
            <li className="nav-item">
              <a className="nav-link" onClick={() => navigate("/favourite")}>
                Favourites 
              </a>
            </li>
          
          </ul>
       <h1 style={{color:'white'}}>ReactMovies</h1>
        </div>
      </nav>

   

<nav className="navbar navbar-expand-lg navbar-dark bg-dark" >
  <button
    className="navbar-toggler"
    type="button"
    data-toggle="collapse"
    data-target="#navbarSupportedContent"
    aria-controls="navbarSupportedContent"
    aria-expanded="false"
    aria-label="Toggle navigation"
  >
    <span className="navbar-toggler-icon" />
  </button>
  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav">
      <li className="nav-item">
        <a className="nav-link" onClick={() => navigate("/")}>
          Popular
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" onClick={() => navigate("/kids")}>
          Kids
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" onClick={() => navigate("/movie")}>
          Drama
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" onClick={() => navigate("/series")}>
          Tv-Series
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" onClick={() => navigate("/actionMovie")}>
          Action
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" onClick={() => navigate("/adventureMovie")}>
         Adventure
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" onClick={() => navigate("/comedy")}>
          Comedy
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" onClick={() => navigate("/crime")}>
         Crime
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" onClick={() => navigate("/thriller")}>
         Thriller
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" onClick={() => navigate("/family")}>
         Family
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" onClick={() => navigate("/horror")}>
         Horror
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" onClick={() => navigate("/sciencefiction")}>
         ScienceFiction
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" onClick={() => navigate("/music")}>
         Music
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" onClick={() => navigate("/documentry")}>
         Documentry
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" onClick={() => navigate("/mystry")}>
         Mystery
        </a>
      </li>
    </ul>
  </div>
</nav>

    
      <div>
      <Search />
      </div>
    </>
  );
};

export default Header;
