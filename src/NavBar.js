import React from "react";


//import { fa-reddit } from '@fortawesome/free-brands-svg-icons';
function Navbar({userName,userEmail,userPassword,setUserName, setUserEmail,setUserPassword, isOpen, setIsOpen,modal,setModal,modal2,setModal2}){




  


  // const {
  //   buttonLabel,
  //   className
  // } = props;

  

  x
  return (
    <div className="App">
      <link
        href="https://fonts.googleapis.com/css2?family=M+PLUS+Rounded+1c&display=swap"
        rel="stylesheet"
      ></link>
      <Navbar color="white" light expand="md">
        <NavbarBrand href="/">
          <FontAwesomeIcon icon={faReddit} color="red" size="lg" spin /> reddit
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/components/">Components</NavLink>
            </NavItem>
            {/* <NavItem>
              <NavLink href="https://github.com/reactstrap/reactstrap">
                GitHub
              </NavLink>
            </NavItem> */}
            <div>
              <Button outline color="primary" onClick={toggle2}>
                Login
              </Button>
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
                          />
                        </FormGroup>
                        <FormGroup>
                          <Label for="examplePassword">Password</Label>
                          <Input
                            type="password"
                            name="password"
                            id="examplePassword"
                            placeholder="Password"
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                  </Form>
                </ModalBody>
                <ModalFooter>
                  <Button color="primary" onClick={toggle2}>
                    Login
                  </Button>{" "}
                </ModalFooter>
              </Modal>
            </div>
            <div>
              <Button color="primary" onClick={toggle3}>
                Sign Up
              </Button>
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
                            id='username'
                            placeholder="Name"
                            onChange = {e => setUserName(e.target.value) }
                          />
                        </FormGroup>
                        <FormGroup>
                          <Label for="exampleEmail">Email</Label>
                          <Input
                            type="email"
                            name="email"
                            id='email'
                            placeholder="Email"
                            onChange= {e => setUserEmail(e.target.value) }
                          />
                        </FormGroup>
                        <FormGroup>
                          <Label for="examplePassword">Password</Label>
                          <Input
                            type="password"
                            name='password'
                            id='password'
                            placeholder="Password"
                            onChange= {e => setUserPassword(e.target.value) }
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                  </Form>
                </ModalBody>
                <ModalFooter>
                  <Button color="primary" onMouseDown={clickHandler} onMouseUp={toggle3}>
                    Sign Up
                  </Button>{" "}
                </ModalFooter>
              </Modal>
            </div>
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
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};


export default NavBar;