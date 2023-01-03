import { useDispatch } from "react-redux";
import { userLogin } from "../actions/userLogin";
import React, { useCallback, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import HeaderWithBack from "./HeaderWithBack";
import "./css/Login.css";
import { FlexWrapperWithHeader } from "../styledComponent/Wrapper";
import {
  FlexForm,
  FormInput,
  LoginRegisterBtn,
  KakaoLoginBtn,
} from "../styledComponent/LoginRegisterForm";

export const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const { state } = useLocation();

  const submit = (e) => {
    e.preventDefault();
    dispatch(
      userLogin({
        username: name,
        password: password,
      })
    )
      .then((response) => {
        console.log(response);
        if (response.payload.success) {
          navigate(state && state.wait ? state.wait : "/");
        } else {
          alert("유저네임이 올바르지 않거나 비밀번호가 올바르지 않습니다");
        }
      })
      .catch((e) => {});
  };

  return (
    <>
      <HeaderWithBack path={state?.back ? state?.back : -1} />
      <FlexWrapperWithHeader>
        <FlexForm onSubmit={(e) => submit(e)}>
          <div
            style={{
              display: "inline",
              paddingInline: "50px",
              paddingBlock: "50px",
            }}
          >
            <div className="d">
              <h1>BibleT</h1>
            </div>
            <div className="d">
              <h1>로그인</h1>
            </div>
          </div>
          <FormInput
            type="name"
            placeholder="아이디"
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></FormInput>
          <FormInput
            type="password"
            placeholder="비밀번호"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></FormInput>
          <LoginRegisterBtn>로그인하기</LoginRegisterBtn>
          <div style={{ marginTop: "15px" }}>
            <a
              onClick={() =>
                navigate("/register", {
                  state: {
                    wait: (state && state.wait) || "",
                    back: "/",
                  },
                })
              }
            >
              회원가입하기
            </a>
            <a>비밀번호 찾기</a>
          </div>
        </FlexForm>
      </FlexWrapperWithHeader>
    </>
  );
};
