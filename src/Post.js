import React, { useEffect } from "react";
import axios from "axios";
import {
  Card,
  Button,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
} from "reactstrap";

function Post({ posts, setPosts, bearer }) {
  useEffect(() => {
    const url = "http://localhost:8000/posts";
    const method = "get";
    axios({
      url,
      method,
    })
      .then((res) => setPosts(res.data))
      .catch((err) => console.log("error: ", err));
  }, []);
  //console.log(posts);
  const allPosts = posts;
  //console.log(allPosts)

  return allPosts ? (
    
  allPosts.map((item, idx) => {
    return (
      <>
      <Card key={idx}>
          <CardTitle>
              {item.title}
          </CardTitle>
          <CardBody>
              {item.body}
          </CardBody>
      </Card>
      </>
    );
})


) : (
    ""
    );
    
    
}


export default Post;
{/* <Card>
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
    </Card> */}
