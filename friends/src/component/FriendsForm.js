import React, { useState } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const FriendsForm = (props) => {

    const [addFriends, setAddFriends] = useState({
        id: Date.now(),
        name: "",
        age: "",
        email: ""

    });



    const inputHandler = e => {
        setAddFriends({ ...addFriends, [e.target.name]: e.target.value})
    }

    const submitHandler = e => {
        e.preventDefault();
        postData(addFriends);   
    }


    const postData = (add) => {
        axiosWithAuth()
            .post("/friends", add)
            .then(res => {
                console.log("res: post data", res)
                props.getData();
            })
            .catch(err => 
                console.log("err: postData no", err))
    }
            


    return (
        <div>
            <form onSubmit={submitHandler}> 
                    <h1>Add Friend</h1>
                        <label htmlFor="name">
                            Name
                            <input name="name" type="text" placeholder="Enter Name" onChange={inputHandler} />
                        </label>
                        <label htmlFor="age">
                            Age
                            <input name="age" type="text" placeholder="Enter Age" onChange={inputHandler} />
                        </label>
                        <label htmlFor="email">
                            Email
                            <input name="email" type="text" placeholder="Enter Email" onChange={inputHandler} />
                        </label>
            </form>
            <button>Add Friend</button>
        </div>
    );
};

export default FriendsForm;