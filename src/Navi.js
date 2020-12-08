import React from "react";
import axios from "axios";
import AppContext from "./AppContext";
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  NavbarText,
  Nav,
  NavItem,
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
import { useContext } from "react";
import "./App.css";

function Navi() {
  const context = useContext(AppContext);
  const toggle2 = () => context.setModal(!context.modal);
  const toggle3 = () => context.setModal2(!context.modal2);
  const toggle = () => context.setIsOpen(!context.isOpen);

  const clickHandler = () => {
    const url = "http://localhost:8000/register";
    const method = "post";
    const headers = {
      "Content-Type": "application/json;charset=UTF-8",
      "Access-Control-Allow-Origin": "*",
    };
    const body = {
      name: context.userName,
      email: context.userEmail,
      password: context.userPassword,
    };
    const data = {
      name: context.userName,
      email: context.userEmail,
      password: context.userPassword,
    };
    axios({
      url,
      method,
      headers,
      body,
      data,
    })
      .then((res) => {
        context.setBearer(res.data.data.token)
          window.localStorage.setItem('token', res.data.data.token)
        console.log(res)
      })
      .catch((err) => console.log("error: ", err));
  };
  const clickHandler2 = () => {
    const url = "http://localhost:8000/v1/oauth/token";
    const method = "post";
    const headers = {
      "Content-Type": "application/json; charset=utf-8",
      "Access-Control-Allow-Origin": "*",
    };

    const data = {
      grant_type: "password",
      client_id: 2,
      client_secret: "AJGPwNY3J3wF14gHJjjEjJvXIy8FnFnuvAoHxa95",
      password: context.loginPassword,
      username: context.loginEmail,
      scope: "",
    };
    axios({
      url,
      method,
      headers,
      data,
    })
      .then(
        (res) =>{
          context.setBearer(res.data.access_token)
          window.localStorage.setItem('token', res.data.access_token)
}
      )
      .catch((err) => console.log("error: ", err));
    console.log(context.bearer);
  };

  // .catch(err => console.log('error: ', err))
  return (
    <div>
      <link
        href="https://fonts.googleapis.com/css2?family=M+PLUS+Rounded+1c&display=swap"
        rel="stylesheet"
      ></link>
      <Navbar style={{backgroundColor:"#B9B7A7"}} light expand="md">
        <NavbarBrand href="/" className="pr-5">
          <FontAwesomeIcon icon={faThumbsUp} color="#7C90A0" size="2x" spin className="mr-3" />{" "}
          <NavbarText color="white" className="pr-5 h2">LIKER</NavbarText>
        </NavbarBrand>
        <Container className="d-flex justify-content-end">
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={context.isOpen} navbar>
            <div className="navi">
              <Nav pills>
                {/* <NavItem>
                <NavLink href="/components/">Components</NavLink>
              </NavItem> */}
                {/* <NavItem>
              <NavLink href="https://github.com/reactstrap/reactstrap">
                GitHub
              </NavLink>
            </NavItem> */}

                <NavItem onClick={toggle2} className="login">
                  <Button outline>
                    Login
                  </Button>
                </NavItem>

                <NavItem onClick={toggle3}>
                  <Button style={{backgroundColor:"#747274"}}>Sign Up</Button>
                </NavItem>
                {/* <Col className="align-self-end">
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
              </Col> */}
              </Nav>
            </div>
          </Collapse>
        </Container>
      </Navbar>
      <Modal isOpen={context.modal} toggle={toggle2}>
        <ModalHeader toggle={toggle2}>Login</ModalHeader>
        <ModalBody>
          <Form>
            <Row form>
              <Col md={6}>
                <FormGroup>
                  <Label for="exampleEmail">Email</Label>
                  <Input
                    type="email"
                    name="email"
                    id="exampleEmail"
                    placeholder="Email"
                    onChange={(e) => context.setLoginEmail(e.target.value)}
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="examplePassword">Password</Label>
                  <Input
                    type="password"
                    name="password"
                    id="examplePassword"
                    placeholder="Password"
                    onChange={(e) => context.setLoginPassword(e.target.value)}
                  />
                </FormGroup>
              </Col>
            </Row>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button
            color="primary"
            onMouseUp={toggle2}
            onMouseDown={clickHandler2}
          >
            Login
          </Button>{" "}
        </ModalFooter>
      </Modal>
      <Modal isOpen={context.modal2} toggle={toggle3}>
        <ModalHeader toggle={toggle3}>Sign Up</ModalHeader>
        <ModalBody>
          <Form>
            <Row form>
              <Col md={6}>
                <FormGroup>
                  <Label for="name">Name</Label>
                  <Input
                    type="name"
                    name="name"
                    id="username"
                    placeholder="Name"
                    onChange={(e) => context.setUserName(e.target.value)}
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="exampleEmail">Email</Label>
                  <Input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email"
                    onChange={(e) => context.setUserEmail(e.target.value)}
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="examplePassword">Password</Label>
                  <Input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Password"
                    onChange={(e) => context.setUserPassword(e.target.value)}
                  />
                </FormGroup>
              </Col>
            </Row>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button
            color="primary"
            onMouseDown={clickHandler}
            onMouseUp={toggle3}
          >
            Sign Up
          </Button>{" "}
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default Navi;
