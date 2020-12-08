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
  Row,
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
  // console.log(context.posts);
  const setLike = (post) => {
    console.log(post.likes, context.user.id, context.bearer);
    const foundUser = post.likes.find((p) => p.user_id == context.user.id);
    if (foundUser) {
      if (foundUser.liked == 1) {
        deletelike(post.id);
      } else {
        //switch from disliked to liked
      }
    } else {
      createLike(post.id);
    }
  };
  const createLike = (post_id) => {
    console.log("liked", post_id);
    const url = "http://localhost:8000/createlike";
    const method = "post";
    const data = { post_id };
    axios({
      url,
      method,
      data,
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${context.bearer}`,
      },
    })
      .then((res) => context.setPosts(res.data))
      .catch((err) => console.log("error: ", err));
  };
  const deletelike = (post_id) => {
    console.log("delete like", post_id);
    const url = "http://localhost:8000/deletelike";
    const method = "post";
    const data = { post_id };
    axios({
      url,
      method,
      data,
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${context.bearer}`,
      },
    })
      .then((res) => context.setPosts(res.data))
      .catch((err) => console.log("error: ", err));
  };
  const setDislike = (post) => {
    console.log(post.likes, context.user.id, context.bearer);
    const foundUser = post.likes.find((p) => p.user_id == context.user.id);
    if (foundUser) {
      if (foundUser.liked == 0) {
        deleteDislike(post.id);
      } else {
        //switch from disliked to liked
      }
    } else {
      createDislike(post.id);
    }
  };
  const createDislike = (post_id) => {
    console.log("created dislike", post_id);
    const url = "http://localhost:8000/createDislike";
    const method = "post";
    const data = { post_id };
    axios({
      url,
      method,
      data,
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${context.bearer}`,
      },
    })
      .then((res) => context.setPosts(res.data))
      .catch((err) => console.log("error: ", err));
  };
  const deleteDislike = (post_id) => {
    console.log("delete dislike", post_id);
    const url = "http://localhost:8000/deleteDislike";
    const method = "post";
    const data = { post_id };
    axios({
      url,
      method,
      data,
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${context.bearer}`,
      },
    })
      .then((res) => context.setPosts(res.data))
      .catch((err) => console.log("error: ", err));
  };

  return context.posts
    ? context.posts.map((post, idx) => {
        const likes = post.likes.filter((p) => p.liked == 1);
        const dislikes = post.likes.filter((p) => p.liked == 0);
        return (
          <>
            <link rel="preconnect" href="https://fonts.gstatic.com"/>
<link href="https://fonts.googleapis.com/css2?family=Oldenburg&family=Roboto+Slab&display=swap" rel="stylesheet"/>
            <Card
              key={idx}
              className="posts"
              style={{ backgroundColor: "#747274" }}
            >
              <CardTitle className="title">{post.title}</CardTitle>
              <CardSubtitle className="author">Posted By:{post.user.name}</CardSubtitle>
              <CardBody className="body">{post.body}</CardBody>
              <Row>
                <Button
                  onClick={() => setLike(post)}
                  style={{ backgroundColor: "#B9B7A7" }}
                >
                  <FontAwesomeIcon
                    icon={faThumbsUp}
                    className=""
                  ></FontAwesomeIcon>{" "}
                  {likes.length}
                </Button>
                <Button
                  onClick={() => setDislike(post)}
                  style={{ backgroundColor: "#B9B7A7" }}
                >
                  <FontAwesomeIcon icon={faThumbsDown}></FontAwesomeIcon>{" "}
                  {dislikes.length}
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
