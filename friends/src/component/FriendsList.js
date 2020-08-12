import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import FriendsForm from "./FriendsForm";


const FriendsList = () => {

    const [friends, setFriends] = useState([]);

    useEffect( () => {
        getData();
    }, [])
    


    const getData = () => {
        axiosWithAuth()
            .get("/friends")
            .then((res) => {
                console.log("res: getData yes", res);
                setFriends( res.data
                )
            })
            .catch((err) => 
            console.log("res: getData no", err)
            )
    }

    

    return (
        <div>
            <h1>
                My Friends List
            </h1>
            <FriendsForm getData={getData}/>
            <div>
                {friends.map(friend => (
                    <div className="friend">
                        <p>{friend.id}</p>
                        <p>{friend.name}</p>
                        <p>{friend.age}</p>
                        <p>{friend.email}</p>
                    </div> 
                ))}
            </div>
            
        </div>
        
    )
}

export default FriendsList;