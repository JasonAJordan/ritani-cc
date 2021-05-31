import React, { useState, useEffect } from "react"; 

function Search ({setGitHubData, setFollowers, fetchFollowers}){
    const [search, setSearch] = useState("");


    function handleFormChange(event){
        setSearch(event.target.value);
    }

    // function handleFormChange(event){
    //     setFormData({...formData,
    //     [event.target.name]: event.target.value
    //     })
    // }

    function handleSearch(event){
        event.preventDefault();
    
        fetch(`https://api.github.com/users/${search}`,{
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
              },
            })
            .then(response => response.json())
            .then(data => {
                setGitHubData(data)
                handleFollowers(data);
            })

    }

    function handleFollowers(github){
        if (github.login){
            fetchFollowers(1, github);
        }
    }


    return (
        <div>
            Search Form: 

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