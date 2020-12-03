import React, { useEffect } from 'react';
import axios from 'axios';
import {
    Card,
    Button,
    CardImg,
    CardText,
    CardBody,
    CardTitle,
    CardSubtitle,
  } from "reactstrap";

function UserDashBoard({bearer, setUserPosts,
    userPosts,}) {
    useEffect(() => {
        const url = "http://localhost:8000/userposts";
        const method = "get";
        const headers = {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: `Bearer ${bearer}`,
        };
        axios({
          url,
          method,
          headers
        })
          .then((res) => setUserPosts(res.data))
          .catch((err) => console.log("error: ", err));
      }, []);
      const userPost = userPosts;

      return userPost ? (
          userPost.map((item,idx) => {
           return (
               <>
               <Card key={idx}>
                   <CardTitle>{item.title}</CardTitle>
                   <CardBody>{item.body}</CardBody>
               </Card>
               </>
           );   
          })
      ) : (
          ""
      )
    }

export default UserDashBoard
