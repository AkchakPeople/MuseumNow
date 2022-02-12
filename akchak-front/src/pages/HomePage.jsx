import React from "react";
import Header from "../components/Header";
import mainIng from "../images/mainImg.png";
import { ColorSystem } from "../utils/ColorSystem";
import "../utils/Font.css";
import { ACButton } from "../components/Button";
import styled from "styled-components";

const RabbitImg = styled.div`
  width: 464px;
  height: 663px;
  background-image: url(${mainIng});
  background-position: center;
  background-repeat: none;
  background-size: cover;
`;

export const HomePage = () => {
  return (
    <>
      <Header />
      <div className="flex flex-row justify-between">
        <div className="flex flex-col mt-52">
          <h1
            className="text-6xl text-left float-left font-bold leading-snug ml-36 inline-block"
            style={{ color: ColorSystem.Textcolor.mainText }}
          >
            What kind of
            <br />
            <span style={{ color: ColorSystem.Maincolor.orange }}>
              Exhibition{" "}
            </span>
            inspires you?
          </h1>
          <p
            className="text-left float-left clear-left text-16 ml-36 mt-4 inline-block"
            style={{ color: ColorSystem.Textcolor.secondText }}
          >
            Museum Now는 거리, 평점, 추천 순 등 원하는 전시회를 찾아볼 수 있는
            전시회 플랫폼 서비스입니다.
            <br />
            Museum Now와 함께 나에게 딱 맞는 전시를 찾아보고, 일상 속의 쉼표를
            느껴보세요.
          </p>
          <div className="flex flex-row mt-36 ml-36">
            <ACButton
              buttonContext="MainButton"
              buttonContents="Exhibition Info"
              class="text-16"
            />
            <ACButton
              buttonContext="SubButton"
              buttonContents=" Review Posting"
              class="text-16 ml-8"
            />
          </div>
        </div>
        <RabbitImg className="mr-24 mt-36" />
      </div>
    </>
  );
};
