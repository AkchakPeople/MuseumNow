import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { ColorSystem } from "../utils/ColorSystem";
import { Link, Router, useNavigate } from "react-router-dom";

const Positioner = styled.div`
  height: 56px;
  width: 100%;
`;

const HeaderBox = styled.div`
  height: 56px;
  width: 100%;
`;

// const LogoBox = styled.div`
//   height: 56px;
//   width: 100%;
//   position: absolute;
//   top: 0px;
// `;

const MenuTab = styled.div`
  font-size: 16px;
`;

const Logo = styled.div`
  font-size: 20px;
  height: 56px;
`;

const AccountTab = styled.div`
  font-size: 16px;
`;

const SignUpBtn = styled.div`
  font-size: 16px;
  background-color: #ff6d1c;
  color: #ffffff;
`;

const Header = ({ children }) => {
  //   function handleClick(e) {
  //     window.location.href = "/users";
  //   }
  const navigate = useNavigate();

  return (
    <Positioner className="fixed z-50 ">
      <HeaderBox className="flex justify-between z-50 bg-white">
        <MenuTab
          className="mr-auto ml-44 w-48 flex flex-row justify-between content-center items-center font-medium"
          style={{ color: ColorSystem.Textcolor.mainText }}
        >
          <div className="">전시 정보</div>
          <div>포스팅</div>
        </MenuTab>
        <Logo
          className="text-center font-bold ml-24 cursor-pointer"
          style={{ color: ColorSystem.Textcolor.mainText, lineHeight: "56px" }}
          onClick={() => navigate("/")}
        >
          MUSEUM NOW
        </Logo>
        <AccountTab
          className="mr-44 flex w-72 justify-between items-center ml-auto font-medium"
          style={{ color: ColorSystem.Textcolor.mainText }}
        >
          <SignUpBtn className="px-8 py-1 rounded-full">Sign up</SignUpBtn>
          <div className="cursor-pointer" onClick={() => navigate("/users")}>
            <FontAwesomeIcon icon={faUser} size="lg" color="#333333" />
          </div>
          <div>About</div>
        </AccountTab>
      </HeaderBox>
    </Positioner>
  );
};

export default Header;
