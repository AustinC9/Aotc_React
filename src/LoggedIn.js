import React, { useEffect, useContext } from "react";
import axios from "axios";
import AppContext from "./AppContext";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Button,
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
  Container,
} from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";
//import { useEffect } from "react";

function LoggedIn({}) {
  const context = useContext(AppContext);
  const toggle4 = () => context.setIsOpen4(!context.isOpen4);
  const toggle5 = () => context.setModal5(!context.modal5);

  const clickHandler = () => {
    const url = `${context.heroku}/newpost`;
    const method = "post";
    const headers = {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${context.bearer}`,
    };
    const body = { title: context.postTitle, body: context.postBody };
    const data = { title: context.postTitle, body: context.postBody };
    axios({
      url,
      method,
      headers,
      body,
      data,
    })
      .then((res) => console.log(res), updatePosts())
      .catch((err) => console.log("error: ", err));
  };
  function updatePosts() {
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
      .then(
        (res) => context.setUserPosts((prevPost) => (prevPost = res.data)),
        console.log("YURTTTTTT")
      )
      .catch((err) => console.log("error: ", err))
      .then();
  }
  const logout = () => {
    const url = `${context.heroku}/logout`;
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
      .then(() => {
        context.setBearer("");
        window.localStorage.removeItem("token");
        context.setLogin(false);
      })
      .catch((err) => console.log("error: ", err));
  };

  return (
    <div>
      <link
        href="https://fonts.googleapis.com/css2?family=M+PLUS+Rounded+1c&display=swap"
        rel="stylesheet"
      ></link>
      <Navbar style={{backgroundColor:"#B9B7A7"}} light expand="md">
        <NavbarBrand href="/">
          <FontAwesomeIcon icon={faThumbsUp}  color="#7C90A0" size="2x" spin className="mr-3" />{" "}
          <NavbarText color="white" className="pr-5 h2 liker">LIKER</NavbarText>
        </NavbarBrand>
        <Container className="d-flex">
          <NavbarToggler onClick={toggle4} />
          <Collapse isOpen={context.isOpen4} navbar>
            <Nav className="mr-auto" navbar>
              <div className="login">
                <Button
                // color="primary"
                  //onMouseDown={console.log("new post")}
                  onClick={toggle5}
                >
                  New Post
                </Button>
                <Modal isOpen={context.modal5} toggle={toggle5}>
                  <ModalHeader style={{ backgroundColor: "#B9B7A7" }} toggle={toggle5}>Create Post</ModalHeader>
                  <ModalBody style={{ backgroundColor: "#4E5166" }}>
                    <Form>
                      <Row form>
                        <Col md={6}>
                          <FormGroup>
                            <Label className="label" for="title">Title</Label>
                            <Input
                              type="text"
                              name="title"
                              id="title"
                              placeholder="Title"
                              onChange={(e) =>
                                context.setPostTitle(e.target.value)
                              }
                            />
                          </FormGroup>
                          <FormGroup>
                            <Label className="label" for="postBody">Body</Label>
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
                      style={{backgroundColor:"#747274"}}
                      onMouseUp={toggle5}
                      onMouseDown={clickHandler}
                    >
                      Make Post
                    </Button>{" "}
                  </ModalFooter>
                </Modal>
              </div>
              <div>
                <Button style={{backgroundColor:"#747274"}} onMouseDown={logout}>
                  Log Out
                </Button>
              </div>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default LoggedIn;
