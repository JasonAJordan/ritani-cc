import React, { useState, useEffect } from "react"; 

function Search ({githubData, followers, page, setPage, fetchFollowers}){

    //const [loadedFollowers, setLoadFollowers] = useState(false);
    function handleNextPage(num){
        fetchFollowers(page + num);
        setPage(page + num); 
    }

    let followersMapped = [];

    if (followers) {
        followersMapped = followers.map((user) => {
            return <img key={user.id} src={user.avatar_url} width="80" height="80"/>
        })
    }

    if (githubData){
        if (githubData.message){
            return (
                <div>
                    <h3>User Not Found 404</h3>
                </div>
            )
        } else {

            return (
                <div>
                    <h3>UserName: {githubData.login}</h3>
                    <h3>Followers Count {githubData.followers}</h3>
                    
                    <h3> Followers: {followersMapped}</h3>
                    {(page === 1) ? null: 
                        <button onCLick={handleNextPage(-1)}>Prior Page</button>}
                    {(followersMapped.length === 20) ? 
                        <button onClick={handleNextPage(1)}>Next Page</button> : null}
                    <h3>UserName: {githubData.login}</h3>
                    
                </div>
            )
        }
       
    } else {
        return (
            <div>
                
                <h3>Search a user</h3>
            </div>
    
        );
    } 
    

 

}

export default Search