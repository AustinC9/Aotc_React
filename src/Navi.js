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
import "./Navi.css";

function Navi({
  userName,
  userEmail,
  userPassword,
  setUserName,
  setUserEmail,
  setUserPassword,
  isOpen,
  setIsOpen,
  modal,
  setModal,
  modal2,
  setModal2,
  loginEmail,
  setLoginEmail,
  loginPassword,
  setLoginPassword,
  bearer,
  setBearer,
  login,
  setLogin,
}) {
  const context = useContext(AppContext);
  const toggle2 = () => setModal(!modal);
  const toggle3 = () => setModal2(!modal2);
  const toggle = () => setIsOpen(!isOpen);

  const clickHandler = () => {
    const url = "http://localhost:8000/register";
    const method = "post";
    const headers = {
      "Content-Type": "application/json;charset=UTF-8",
      "Access-Control-Allow-Origin": "*",
    };
    const body = { name: userName, email: userEmail, password: userPassword };
    const data = { name: userName, email: userEmail, password: userPassword };
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
      client_secret: "WRwtnxeHIEeaRksqpLpubm7ATdCbu30XyXa2udCc",
      password: loginPassword,
      username: loginEmail,
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
          setBearer((prevBearer) => (prevBearer = res.data.access_token)),
        console.log("logged in")
      )
      .catch((err) => console.log("error: ", err));
    console.log(bearer);
  };
  useEffect(() => {
    {
      bearer &&
        axios({
          url: "http://localhost:8000/api/user",
          method: "get",
          headers: {
            Accept: "application/json",
            Authorization: `Bearer ${bearer}`,
          },
        })
          .then(() => setLogin(true), console.log(login))
          .catch((err) => console.log("error: ", err));
    }
    console.log(bearer);
  }, [bearer]);

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
          <Collapse isOpen={isOpen} navbar>
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
          </Collapse>
        </Container>
      </Navbar>
      <Modal isOpen={modal} toggle={toggle2}>
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
                    onChange={(e) => setLoginEmail(e.target.value)}
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="examplePassword">Password</Label>
                  <Input
                    type="password"
                    name="password"
                    id="examplePassword"
                    placeholder="Password"
                    onChange={(e) => setLoginPassword(e.target.value)}
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
      <Modal isOpen={modal2} toggle={toggle3}>
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
                    onChange={(e) => setUserName(e.target.value)}
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="exampleEmail">Email</Label>
                  <Input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email"
                    onChange={(e) => setUserEmail(e.target.value)}
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="examplePassword">Password</Label>
                  <Input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Password"
                    onChange={(e) => setUserPassword(e.target.value)}
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
