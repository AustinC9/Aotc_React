import React, { useEffect, useState } from "react";
import Navi from "./Navi";
import Post from "./Post";
import LoggedIn from "./LoggedIn";
import UserDashBoard from "./UserDashBoard";
import { AppProvider } from "./AppContext";
import { Container, Row,Col } from "reactstrap";
import axios from "axios";
import "./App.css";

//import { fa-reddit } from '@fortawesome/free-brands-svg-icons';

function App() {
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [modal, setModal] = useState(false);
  const [modal2, setModal2] = useState(false);
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [bearer, setBearer] = useState("");
  const [posts, setPosts] = useState();
  const [login, setLogin] = useState(false);
  const [isOpen4, setIsOpen4] = useState(false);
  const [postTitle, setPostTitle] = useState("");
  const [postBody, setPostBody] = useState("");
  const [modal5, setModal5] = useState(false);
  const [userPosts, setUserPosts] = useState();
  const [user, setUser] = useState({});
  const [heroku] = 'https://cors-anywhere.herokuapp.com/https://liker-project.herokuapp.com'
  // const [history, useHistory] = useHistory();

  const initialContext = {
    userName,
    setUserName,
    userEmail,
    setUserEmail,
    userPassword,
    setUserPassword,
    isOpen,
    setIsOpen4,
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
    posts,
    setPosts,
    login,
    setLogin,
    isOpen4,
    postTitle,
    setPostTitle,
    postBody,
    setPostBody,
    modal5,
    setModal5,
    userPosts,
    setUserPosts,
    user,
    setUser,
    heroku
  };
  useEffect(() => {
    const lstoken = window.localStorage.getItem("token");
    if (lstoken) {
      setBearer(lstoken);
    }
  }, []);
  useEffect(() => {
    {
      if (bearer !== "") {
        axios({
          url: "http://localhost:8000/api/user",
          method: "get",
          headers: {
            Accept: "application/json",
            Authorization: `Bearer ${bearer}`,
          },
        })
          .then((res) => {
            setLogin(true);
            setUser(res.data);
            console.log(login);
          })
          .catch((err) => console.log("error: ", err));
      }
    }
  }, [bearer]);

  return (
    <AppProvider value={initialContext}>
      <div className="bg-front" style={{backgroundColor:'#4E5166'}}>
        {!login ? (
          <>
            <Navi className="navi" />
          </>
        ) : (
          <>
            <LoggedIn />
          <Container className="postContainer" style={{backgroundColor:'#B5AA9D'}}>
          <Row className="h1 text-center">
          <Col>
          <h1 className="h1 text-center yourposts" style={{}}>Your Posts</h1>
          </Col>
          </Row>
          <Row>

          <Col>
            <UserDashBoard />
            </Col>
            </Row>
            </Container>
          </>
        )}
        <Container className="postContainer" style={{backgroundColor:'#B5AA9D'}}>
        <Row className="h1 text-center">
          <Col>
          <h1 className="h1 text-center yourposts" style={{}}>All Public Posts</h1>
          </Col>
        </Row>
        <Row>
          <Col>
          <Post posts={posts} setPosts={setPosts} />

          </Col>
        </Row>
        </Container>
      </div>
    </AppProvider>
  );
}

export default App;
// signUpDetails={signUpDetails}
//       setSignUpDetails={setSignUpDetails}
