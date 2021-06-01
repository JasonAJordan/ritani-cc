//import logo from './logo.svg';
import './App.css';

import React, { useState, useEffect } from "react"; 
import Search from "./Search"; 
import UserData from "./UserData";

function App() {

  const [githubData, setGitHubData] = useState(null); 
  const [followers, setFollowers] = useState(null);
  const [page, setPage] = useState(1);
  


  function fetchFollowers(pageNumber = 1, github = githubData ){
    fetch(`https://api.github.com/users/${github.login}/followers?page=${pageNumber}&per_page=15`,{
              method: "GET",
              headers: {
                  Authorization: `token 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`, 
              },
              })
              .then(response => response.json())
              .then(data => {
                  setFollowers(data);
              })
  }

  return (
    <div className="grid-container">
      <div className="main">
        <div className="intro">
          Ritani's Code Challenge
        </div>


        <div className="search">
          <Search setGitHubData={setGitHubData} 
                  setFollowers={setFollowers} 
                  fetchFollowers={fetchFollowers} 
                  setPage={setPage}/>
        </div>

        <div className="searchData">
          <UserData githubData={githubData} 
                    followers={followers} 
                    fetchFollowers={fetchFollowers} 
                    page={page} 
                    setPage={setPage}/>

        </div>

      </div>
    </div>
    
  );
}

export default App;
