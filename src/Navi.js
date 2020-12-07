import React from "react";
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
import { useContext, useEffect } from "react";
import "./App.css";

function Navi({
}) {
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
    const body = { name: context.userName, email: context.userEmail, password: context.userPassword };
    const data = { name: context.userName, email: context.userEmail, password: context.userPassword };
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
      client_secret: "VYmXFly1MteogwguvwdLf0BwEo2vMBmlI22r9rLF",
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
        (res) =>
        context.setBearer((prevBearer) => (prevBearer = res.data.access_token)),
        console.log(data)
      )
      .catch((err) => console.log("error: ", err));
    console.log(context.bearer);
  };
  useEffect(() => {
    {
      context.bearer &&
        axios({
          url: "http://localhost:8000/api/user",
          method: "get",
          headers: {
            Accept: "application/json",
            Authorization: `Bearer ${context.bearer}`,
          },
        })
          .then(() => context.setLogin(true), console.log(context.login))
          .catch((err) => console.log("error: ", err));
    }
    console.log(context.bearer);
  }, [context.bearer]);

  // .catch(err => console.log('error: ', err))
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
                <Button outline color="primary">
                  Login
                </Button>
              </NavItem>

              <NavItem onClick={toggle3}>
                <Button color="primary">Sign Up</Button>
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
