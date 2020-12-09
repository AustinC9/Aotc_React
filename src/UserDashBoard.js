import React, { useEffect, useContext } from "react";
import axios from "axios";
import AppContext from "./AppContext";
import {
  Card,
  Button,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
} from "reactstrap";

function UserDashBoard({}) {
  // const history = useHistory();
  const context = useContext(AppContext);
  useEffect(() => {
    const url = `${context.heroku}/userposts`;
    const method = "get";
    const headers = {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${context.bearer}`,
    };
    axios({
      url,
      method,
      headers,
    })
      .then((res) => context.setUserPosts(res.data))
      .catch((err) => console.log("error: ", err))
      .then();
  }, []);

  return context.userPosts
    ? context.userPosts.map((item, idx) => {
        return (
          <>
            <Card key={idx} style={{ backgroundColor: "#747274" }} className='posts'>

              <CardTitle className="title">{item.title}</CardTitle>
              <CardBody className="body">{item.body}</CardBody>
              
            </Card>
          </>
        );
      })
    : "";
}

export default UserDashBoard;
