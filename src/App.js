import React, { useState } from "react";
import Navi from "./Navi";
import Post from "./Post";
import LoggedIn from "./LoggedIn";
import UserDashBoard from "./UserDashBoard";
import { AppProvider } from './AppContext';

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
    setIsOpen4,
    postTitle,
    setPostTitle,
    postBody,
    setPostBody,
    modal5,
    setModal5,
    userPosts,
    setUserPosts
  }

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
      <div>
        <Navi
          userName={userName}
          userEmail={userEmail}
          userPassword={userPassword}
          setUserName={setUserName}
          setUserEmail={setUserEmail}
          setUserPassword={setUserPassword}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          modal={modal}
          modal2={modal2}
          setModal={setModal}
          setModal2={setModal2}
          loginEmail={loginEmail}
          setLoginEmail={setLoginEmail}
          loginPassword={loginPassword}
          setLoginPassword={setLoginPassword}
          bearer={bearer}
          setBearer={setBearer}
          login={login}
          setLogin={setLogin}
        />

        <Post posts={posts} setPosts={setPosts} />
      </div>
      </AppProvider>
    );
  }
}

export default App;
// signUpDetails={signUpDetails}
//       setSignUpDetails={setSignUpDetails}
