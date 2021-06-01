//import React, { useState, useEffect } from "react"; 

function Search ({githubData, followers, fetchFollowers, page, setPage}){


    function handlePageChange(event){
        if (event.target.name === "prior"){
            fetchFollowers(page - 1)
            setPage(page - 1);
        } else {
            fetchFollowers(page + 1)
            setPage(page + 1);
        }
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
                <div >
                    <div className="data">
                        <h3>UserName: {githubData.login}</h3>
                        <img src={githubData.avatar_url} width="160" height="160"/>
                        <h4>Public Repos: {githubData.public_repos}</h4>
                        <a href={githubData.html_url} rel="noreferrer">GitHub Page</a>
                    </div>
                    <div className="following">
                        <h3>Followers Count: {githubData.followers}</h3>

                        <div className="followingimgscontainer" >
                            <h3> {followersMapped}</h3>
                        </div>
                        {(page === 1) ? null: 
                            <button onClick={handlePageChange} name="prior">Prior Page</button>}
                        {(followersMapped.length === 15) ? 
                            <button onClick={handlePageChange} name="next">Next Page</button> : null}
                    </div>
                    
                    
                </div>
            )
        }
       
    } else {
        return (
            <div>
                <h3>Search for any valid Github username!</h3>
            </div>
    
        );
    } 
    

 

}

export default Search