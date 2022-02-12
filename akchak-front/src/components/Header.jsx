import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import "../utils/Font.css";
import { ColorSystem } from "../utils/ColorSystem";
import { Link } from "react-router-dom";

const Positioner = styled.div`
  top: 0px;
`;

const HeaderBox = styled.div`
  height: 56px;
  width: 100%;
`;

const LogoBox = styled.div`
  height: 56px;
  width: 100%;
  position: absolute;

  top: 0px;
`;

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

  return (
    <Positioner className="flex flex-col">
      <LogoBox bg-transparent>
        <Logo
          className="mx-auto flex flex-row items-center justify-center font-bold"
          style={{ color: ColorSystem.Textcolor.mainText }}
        >
          MUSEUM NOW
        </Logo>
      </LogoBox>
      <HeaderBox className="flex flex-row">
        <MenuTab className="mr-auto ml-36 flex flex-row justify-between content-center">
          <ul
            className="flex flex-row items-center font-medium"
            style={{ color: ColorSystem.Textcolor.mainText }}
          >
            <li className="mr-16 ">전시 정보</li>
            <li>포스팅</li>
          </ul>
        </MenuTab>
        <AccountTab
          className="mr-36 flex flex-row justify-between items-center ml-auto font-medium"
          style={{ color: ColorSystem.Textcolor.mainText }}
        >
          <SignUpBtn className="mr-16 px-8 py-1 rounded-full">
            Sign up
          </SignUpBtn>
          <Link to="/users">
            <FontAwesomeIcon
              icon={faUser}
              size="lg"
              className="mr-16"
              color="#333333"
            />
          </Link>

          <p>About</p>
        </AccountTab>
      </HeaderBox>
    </Positioner>
  );
};

export default Header;
