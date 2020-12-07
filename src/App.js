import React, { useState } from "react";
import Navi from "./Navi";
import Post from "./Post";
import LoggedIn from "./LoggedIn";
import UserDashBoard from "./UserDashBoard";
import { AppProvider } from "./AppContext";
import { Container } from "reactstrap";
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
  };

  if (login !== false) {
    return (
      <AppProvider value={initialContext}>
        <div>
          <LoggedIn />
          <UserDashBoard />
        </div>
      </AppProvider>
    );
  } else {
    return (
      <AppProvider value={initialContext}>
        <div className="bg-secondary">
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Lato&display=swap"
            rel="stylesheet"
          />

          <Navi
          className="navi"
          />
          <Container className="bg-dark postContainer">
            <Post posts={posts} setPosts={setPosts} />
          </Container>
        </div>
      </AppProvider>
    );
  }
}

export default App;
// signUpDetails={signUpDetails}
//       setSignUpDetails={setSignUpDetails}
