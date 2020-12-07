import React, { useEffect, useContext } from "react";
import axios from "axios";
import {
  Card,
  Button,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Row
} from "reactstrap";
import "./App.css";
import AppContext from "./AppContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp, faThumbsDown } from "@fortawesome/free-solid-svg-icons";

function Post() {
  const context = useContext(AppContext);
  useEffect(() => {
    const url = "http://localhost:8000/posts";
    const method = "get";
    axios({
      url,
      method,
    })
      .then((res) => context.setPosts(res.data))
      .catch((err) => console.log("error: ", err));
  }, []);
  console.log(context.posts);
  const allPosts = context.posts;
  //console.log(allPosts)

  return context.posts
    ? context.posts.map((item, idx) => {
        return (
          <>
            <link rel="preconnect" href="https://fonts.gstatic.com" />
            <link
              href="https://fonts.googleapis.com/css2?family=Major+Mono+Display&display=swap"
              rel="stylesheet"
            />
            <link rel="preconnect" href="https://fonts.gstatic.com" />
            <link
              href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap"
              rel="stylesheet"
            ></link>
            <Card key={idx} className="posts bg-warning">
              <CardTitle className="title">{item.title}</CardTitle>
              <CardSubtitle>Posted By:{item.user.name}</CardSubtitle>
              <CardBody className="body">{item.body}</CardBody>
              <Row>
                <Button>
                  <FontAwesomeIcon icon={faThumbsUp} className=""></FontAwesomeIcon>10
                </Button>
                <Button>
                  <FontAwesomeIcon icon={faThumbsDown}></FontAwesomeIcon>4
                </Button>
              </Row>
            </Card>
          </>
        );
      })
    : "";
}

export default Post;
{
  /* <Card>
      <CardImg
        top
        width="100%"
        src="/assets/318x180.svg"
        alt="Card image cap"
      />
      <CardBody>
        <CardTitle tag="h5">
          {posts.map((posts) => (
            <h5>{posts.title}</h5>
          ))}
        </CardTitle>
        <CardText>
          {posts.map((posts) => (
            <body>{posts.body}</body>
          ))}
        </CardText>
        <Button>Button</Button>
      </CardBody>
    </Card> */
}
