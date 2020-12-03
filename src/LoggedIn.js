import React, { useEffect } from "react";
import axios from "axios";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
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
import { faReddit } from "@fortawesome/free-brands-svg-icons";
//import { useEffect } from "react";

function LoggedIn({
  isOpen4,
  setIsOpen4,
  modal5,
  setModal5,
  postBody,
  setPostBody,
  postTitle,
  setPostTitle,
  bearer,
  login,
  setLogin
}) {
  const toggle4 = () => setIsOpen4(!isOpen4);
  const toggle5 = () => setModal5(!modal5);

  const clickHandler = () => {
    const url = "http://localhost:8000/newpost";
    const method = "post";
    const headers = {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${bearer}`,
    };
    const body = { title: postTitle, body: postBody };
    const data = { title: postTitle, body: postBody };
    axios({
      url,
      method,
      headers,
      body,
      data,
    })
      .then((res) => console.log(res))
      .catch((err) => console.log("error: ", err));
  };
  const logout = () => {
    const url = "http://localhost:8000/logout";
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
    .then(() => setLogin(false))
    .catch((err) => console.log("error: ", err))
  }

  return (
    <div>
      <link
        href="https://fonts.googleapis.com/css2?family=M+PLUS+Rounded+1c&display=swap"
        rel="stylesheet"
      ></link>
      <Navbar color="white" light expand="md">
        <NavbarBrand href="/">
          <FontAwesomeIcon icon={faReddit} color="red" size="2x" spin />
          reddit
        </NavbarBrand>
        <Container className="d-flex">
          <NavbarToggler onClick={toggle4} />
          <Collapse isOpen={isOpen4} navbar>
            <Nav className="mr-auto" navbar>
              <NavItem>
                <NavLink href="/components/">Components</NavLink>
              </NavItem>
              <div className="login">
                <Button
                  outline
                  color="primary"
                  //onMouseDown={console.log("new post")}
                  onClick={toggle5}
                >
                  New Post
                </Button>
                <Modal isOpen={modal5} toggle={toggle5}>
                  <ModalHeader toggle={toggle5}>Create Post</ModalHeader>
                  <ModalBody>
                    <Form>
                      <Row form>
                        <Col md={6}>
                          <FormGroup>
                            <Label for="title">Title</Label>
                            <Input
                              type="text"
                              name="title"
                              id="title"
                              placeholder="Title"
                              onChange={(e) => setPostTitle(e.target.value)}
                            />
                          </FormGroup>
                          <FormGroup>
                            <Label for="postBody">Body</Label>
                            <Input
                              type="text"
                              name="body"
                              id="body"
                              placeholder="Body"
                              onChange={(e) => setPostBody(e.target.value)}
                            />
                          </FormGroup>
                        </Col>
                      </Row>
                    </Form>
                  </ModalBody>
                  <ModalFooter>
                    <Button
                      color="primary"
                      onMouseUp={toggle5}
                      onMouseDown={clickHandler}
                    >
                      Make Post
                    </Button>{" "}
                  </ModalFooter>
                </Modal>
              </div>
              <div>
                <Button
                  color="primary" onMouseDown={logout}
                >
                  Log Out
                </Button>
              </div>
              <Col className="align-self-end">
                <UncontrolledDropdown nav inNavbar>
                  <DropdownToggle nav caret>
                    Options
                  </DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem>Option 1</DropdownItem>
                    <DropdownItem>Option 2</DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem>Reset</DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </Col>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </div>
    
  );
}

export default LoggedIn;