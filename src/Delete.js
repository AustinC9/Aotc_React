import React, { useContext } from 'react'
import AppContext from './AppContext'
import { Button } from "reactstrap";
import axios from 'axios';

function Delete(props) {
    const context =useContext(AppContext);
    const deletePost = (res) => {
        context.setUserPosts(res)
    }
    
    const url = `http://localhost:8000/deletepost/${props.id}`;
    const method = "post";
    const headers = {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${context.bearer}`,
    };
const clickHandler = () => {
    // const data = { id }
    axios({
      url,
      method,
      headers,
      // data
    })
      .then((res) => {
          deletePost()
        console.log(res.data)
      })
      .catch((err) => console.log("error: ", err));
  };
    return (
        <div>
            <Button onClick={clickHandler}
            style={{ backgroundColor: "#474A5D" }}>Delete</Button>
        </div>
    )
}

export default Delete
