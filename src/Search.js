import React, { useState } from "react"; 

function Search ({setGitHubData, fetchFollowers, setPage}){
    const [search, setSearch] = useState("");

    function handleFormChange(event){
        setSearch(event.target.value);
    }


    function handleSearch(event){
        event.preventDefault();
    
        fetch(`https://api.github.com/users/${search}`,{
            method: "GET",
            headers: {
                Authorization: `token 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`, 
              },
            })
            .then(response => response.json())
            .then(data => {
                setGitHubData(data);
                handleFollowers(data);
                setPage(1);
            })
    }

    function handleFollowers(github){
        if (github.login){
            fetchFollowers(1, github);
        }
    }


    return (
        <div>
            Github Search: 

            <form onSubmit={handleSearch}>
                <input type="text" name="search" placeholder="Type in the username"
                    value={search}
                    onChange={handleFormChange}
                />

                <button type="submit">Search!</button>

            </form>

            

        </div>

    );
 

}

export default Search