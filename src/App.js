//import logo from './logo.svg';
//import './App.css';

import React, { useState, useEffect } from "react"; 
import Search from "./Search"; 
import UserData from "./UserData";


function App() {

  const [githubData, setGitHubData] = useState(null); 
  const [followers, setFollowers] = useState(null);
  const [page, setPage] = useState(1);


  function fetchFollowers(pageNumber, github = githubData ){
    fetch(`https://api.github.com/users/${github.login.toLowerCase()}/followers?page=${pageNumber}&per_page=20`,{
                method: "GET",
                headers: {
                    'Content-Type': 'application/json',
                  },
                })
                .then(response => response.json())
                .then(data => {
                    setFollowers(data);
                })
  }

  return (
    <div className="App">
      <header className="App-header">
        Hi github, init commit 
      </header>


      <div>
        <Search setGitHubData={setGitHubData} setFollowers={setFollowers} fetchFollowers={fetchFollowers}/>
      </div>

      <div>
        UserData Here: 

        <UserData githubData={githubData} followers={followers} page={page} setPage={setPage} fetchFollowers={fetchFollowers}/>

      </div>


    </div>
  );
}

export default App;
