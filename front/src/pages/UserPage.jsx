import React from "react";
import { ColorSystem } from "../utils/ColorSystem";
import subImg from "../images/subImg.png";
import styled from "styled-components";

const RoginImg = styled.div`
  width: 638px;
  height: 917px;
  background-image: url(${subImg});
  background-position: center;
  background-repeat: none;
  background-size: cover;
`;

export const UserPage = () => {
  return (
    <div className="flex justify-between">
      <h1 style={{ color: ColorSystem.Maincolor.green }}>User Page</h1>
      <RoginImg />
    </div>
  );
};
