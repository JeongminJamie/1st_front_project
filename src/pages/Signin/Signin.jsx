import React from "react";
import "./Signin.css";
import google from "../../component/google-logo.png";

import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  postSigninEmailPasswordToServer,
  signinActions,
} from "../../store/signin-slice";

import axios from "axios";
import {
  signInWithPopup,
  GoogleAuthProvider,
  signInWithCustomToken,
} from "firebase/auth";
import { auth } from "../../firebaseConfig";
import { googleSigninActions } from "../../store/googleSignin-slice";

const Signin = () => {
  const email = useSelector((state) => state.signin.email);
  const password = useSelector((state) => state.signin.password);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // slice의 이메일 상태값 변경하는 함수
  const emailInputChangeHandler = (e) => {
    const emailInput = e.target.value;
    dispatch(signinActions.setEmail(emailInput));
  };

  // slice의 패스워드 상태값 변경하는 함수
  const passwordInputChangeHandler = (e) => {
    const passwordInput = e.target.value;
    dispatch(signinActions.setPassword(passwordInput));
  };

  // sign in 버튼 눌렀을 때 핸들
  const signinClickHandler = (e) => {
    e.preventDefault();
    dispatch(signinActions.setIsClicked());
    // 비밀번호 6자 이하 또는 12자 이상 alert 띄우기
    if (password.trim().length < 6) {
      alert("비밀번호 6자 이상 입력이 필요합니다");
      return;
    } else if (password.trim().length > 12) {
      alert("비밀번호 12자 이하 입력이 필요합니다");
      return;
    }

    // 서버에 입력된 이메일과 패스워드 요청 보내기
    const signinData = {
      email,
      password,
    };
    dispatch(postSigninEmailPasswordToServer(signinData)).then((success) => {
      if (success === true) {
        navigate("/home");
      } else {
        console.error("Sign in failed");
        alert("아이디나 패스워드가 일치하지 않습니다.");
      }
    });
  };

  const loginWithGoogle = async (e) => {
    dispatch(googleSigninActions.setIsGoogleClicked());
    e.preventDefault(); // 기본 동작 막기

    const provider = new GoogleAuthProvider();

    try {
      // Firebase로 Google 로그인
      const result = await signInWithPopup(auth, provider);
      const idToken = await result.user.getIdToken();

      // id 토큰을 백엔드 API로 전달하여 커스텀 토큰을 요청
      const response = await axios.post(
        "http://localhost:8080/firebase/auth/google",
        { idToken }
      );
      const customToken = response.data;

      // 커스텀 토큰으로 firebase에 로그인
      await signInWithCustomToken(auth, customToken);
      console.log("User authenticated successfully");
      navigate("/home");
    } catch (error) {
      console.error("Error during authentication", error);
    }
  };

  return (
    <div className="signin-page-container">
      <div className="header_logo-container" onClick={() => navigate("/")}>
        <img src="/LinkedIn-logo.png" className="main-logo" alt="main-logo" />
      </div>
      <main className="signin-main-container">
        <h1 className="signin-title">Sign in</h1>
        <h2 className="signin-subtitle">
          Stay updated on your professional world
        </h2>
        <form className="signin-form">
          <input
            className="input-email"
            placeholder="Email"
            type="email"
            value={email}
            onChange={emailInputChangeHandler}
            required
          ></input>
          <input
            className="input-password"
            placeholder="Password"
            type="password"
            value={password}
            onChange={passwordInputChangeHandler}
            required
          ></input>
          <span className="span-forgot-password">Forgot password?</span>
          <button className="button-signin" onClick={signinClickHandler}>
            Sign in
          </button>
          <p className="or">or</p>
        </form>
        <div className="buttons-google-apple-container">
          <button className="button-google" onClick={loginWithGoogle}>
            <img src={google} className="google-logo" alt="google-logo" />
            Continue with Google
          </button>
          <button className="button-apple">
            {" "}
            <img
              src="/apple-logo.png"
              className="apple-logo"
              alt="apple-logo"
            />
            Sign in With Apple
          </button>
        </div>
      </main>
      <p className="to-signup">
        Need to LinkedIn?{" "}
        <Link to="/signup" className="join">
          Join now
        </Link>
      </p>
    </div>
  );
};

export default Signin;
