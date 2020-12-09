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
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Col,
  Row,
  Form,
  FormGroup,
  Label,
  Input,
} from "reactstrap";
import Delete from './Delete'

function UserDashBoard({}) {
  // const history = useHistory();
  const context = useContext(AppContext);
  const toggle6 = () => context.setModal6(!context.modal6);
  // const clickHandler = () => {
  //   const url = "http://localhost:8000/register";
  //   const method = "post";
  //   const headers = {
  //     "Content-Type": "application/json;charset=UTF-8",
  //     "Access-Control-Allow-Origin": "*",
  //   };
  //   const body = {
  //     name: context.userName,
  //     email: context.userEmail,
  //     password: context.userPassword,
  //   };
  //   const data = {
  //     name: context.userName,
  //     email: context.userEmail,
  //     password: context.userPassword,
  //   };
  //   axios({
  //     url,
  //     method,
  //     headers,
  //     body,
  //     data,
  //   })
  //     .then((res) => {
  //       context.setBearer(res.data.data.token);
  //       window.localStorage.setItem("token", res.data.data.token);
  //       console.log(res);
  //     })
  //     .catch((err) => console.log("error: ", err));
  // };
  
  
  useEffect(() => {
    const url = "http://localhost:8000/userposts";
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
            <Card
              key={idx}
              style={{ backgroundColor: "#747274" }}
              className="posts"
            >
            {/* {console.log({item})} */}
              <CardTitle className="title">{item.title}</CardTitle>
              <CardBody className="body">{item.body}</CardBody>
              <div className="login">
                <Row>
                    <Button
                      style={{ backgroundColor: "#B9B7A7" }}
                      // color="primary"
                      //onMouseDown={console.log("new post")}
                      onMouseDown={toggle6}
                      // onMouseUp={() => context.editPost(userPosts[idx])}
                    >
                      Edit Post
                    </Button>
                </Row>
                <Modal isOpen={context.modal6} toggle={toggle6}>
                  <ModalHeader
                    style={{ backgroundColor: "#B9B7A7" }}
                    toggle={toggle6}
                  >
                    Edit Post
                  </ModalHeader>
                  <ModalBody style={{ backgroundColor: "#4E5166" }}>
                    <Form>
                      <Row form>
                        <Col md={6}>
                          <FormGroup>
                            <Label className="label" for="title">
                              Title
                            </Label>
                            <Input
                              value={context.postTitle}
                              type="text"
                              name="title"
                              id="title"
                              // placeholder="Title"
                              onChange={(e) =>
                                context.setPostTitle(e.target.value)
                              }
                            />
                          </FormGroup>
                          <FormGroup>
                            <Label className="label" for="postBody">
                              Body
                            </Label>
                            <Input
                              type="text"
                              name="body"
                              id="body"
                              placeholder="Body"
                              onChange={(e) =>
                                context.setPostBody(e.target.value)
                              }
                            />
                          </FormGroup>
                        </Col>
                      </Row>
                    </Form>
                  </ModalBody>
                  <ModalFooter style={{ backgroundColor: "#B9B7A7" }}>
                    <Button
                      style={{ backgroundColor: "#747274" }}
                      onMouseUp={toggle6}
                      // onMouseDown={}
                    >
                      Edit Post
                    </Button>{" "}
                      <Delete
                      id={item.id}>Delete</Delete>
                    
                  </ModalFooter>
                </Modal>
              </div>
            </Card>
          </>
        );
      })
    : "";
}

export default UserDashBoard;
