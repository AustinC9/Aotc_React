import React, { useState } from "react";
import Navi from "./Navi";

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

  return (
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
      />
    </div>
  );
}

export default App;
// signUpDetails={signUpDetails}
//       setSignUpDetails={setSignUpDetails}
