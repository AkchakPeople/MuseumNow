import React from "react";
import Header from "../components/Header";
import mainIng from "../images/mainImg.png";
import { ColorSystem } from "../utils/ColorSystem";
import { ACButton } from "../components/Button";
import styled from "styled-components";

const RabbitImg = styled.div`
  width: 492px;
  height: 703px;
  background-image: url(${mainIng});
  background-position: center;
  background-repeat: none;
  background-size: cover;
`;

export const HomePage = () => {
  return (
    <div>
      <div className="flex flex-row justify-between">
        <div className="flex flex-col mt-60">
          <h1
            className="text-6xl text-left float-left font-bold leading-snug ml-44 inline-block"
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
            className="text-left float-left clear-left text-16 ml-44 mt-4 inline-block"
            style={{ color: ColorSystem.Textcolor.secondText }}
          >
            Museum Now는 거리, 평점, 추천 순 등 원하는 전시회를 찾아볼 수 있는
            전시회 플랫폼 서비스입니다.
            <br />
            Museum Now와 함께 나에게 딱 맞는 전시를 찾아보고, 일상 속의 쉼표를
            느껴보세요.
            <br />
            <span
              style={{ color: ColorSystem.Maincolor.pink }}
              className="font-bold"
            >
              토끼의 앞모습이 궁금하지 않으신가요 ~?? 토끼는 안경을 썼습니다.
              토끼.... 좋아하시나요? 헤헿
            </span>
          </p>
          <div className="flex flex-row mt-40 ml-44">
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
        <RabbitImg className="mr-28 mt-40" />
      </div>
    </div>
  );
};
