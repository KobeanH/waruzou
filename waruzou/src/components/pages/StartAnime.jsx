import { useState, useEffect, memo } from "react";
import { css } from "@emotion/css";

import logo from "../img/warican-logo.png";

export const StartAnime = memo(() => {
  const [anime, setAnime] = useState(true);
  const [titleAnime, setTitleAnime] = useState(false);
  const [logoAnime, setLogoAnime] = useState(false);

  //アニメーション全体をフェードアウト
  setTimeout(() => {
    setAnime(false);
  }, 2300);

  //タイトルのスライドアニメーション
  setTimeout(() => {
    setTitleAnime(true);
  }, 500);

  //ロゴのアニメーション
  useEffect(() => {
    setTimeout(() => {
      setLogoAnime(true);
    }, 1500);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setLogoAnime(false);
    }, 1650);
  }, []);

  return (
    <div className={anime ? startAnime : endAnime}>
      <div className={startTitle}>
        <img
          className={logoAnime ? logoOn : logoOff}
          src={logo}
          alt="warican-logo"
        />
        <p className={titleAnime ? startTitleTextOn : startTitleTextOff}>
          <span>わ</span>
          <span>り</span>
          <span className={startTitleTextEn}>C</span>
          <span className={startTitleTextEn}>a</span>
          <span className={startTitleTextEn}>n</span>
        </p>
      </div>
    </div>
  );
});

const startAnime = css`
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    z-index: 9000;
    background: #FFF;
    transition: 1.5s;
    &:before{
    content: "";
    display: block;
    position: absolute;
    width: 140px;
    height: 120px;
    border-radius: 50%;
    background-color: #FFB901;
    top: -23px;
    right: -40px;
    }
        &:after{
    content: "";
    display: block;
    position: absolute;
    width: 350px;
    height: 300px;
    border-radius: 50%;
    background-color: #FFB901;
    bottom: -113px;
    left: -120px;
    }
}
`;
const endAnime = css`
  opacity: 0;
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: 9000;
  background: #fff;
  &:before {
    content: "";
    display: block;
    position: absolute;
    width: 140px;
    height: 120px;
    border-radius: 50%;
    background-color: #ffb901;
    top: -23px;
    right: -40px;
  }
  &:after {
    content: "";
    display: block;
    position: absolute;
    width: 350px;
    height: 300px;
    border-radius: 50%;
    background-color: #ffb901;
    bottom: -113px;
    left: -120px;
  }
  transition: 1.5s;
`;
const logoOn = css`
  transform: rotate(-15deg);
  transition: 0.15s;
`;
const logoOff = css`
  transform: rotate(0deg);
  transition: 0.15s;
`;
const startTitle = css`
  position: absolute;
  top: 43%;
  left: 50%;
  transform: translate(-50%);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  width: 180px;
`;
const startTitleTextOff = css`
  font-size: 3.4rem;
  color: #000000;
  margin: 0;
  display: flex;
  overflow: hidden;
  & span {
    display: block;
    transform: translate(0, 105%);
    transition: transform cubic-bezier(0.215, 0.61, 0.355, 1) 0.5s;
  }
  & span:nth-child(2) {
    transition-delay: 0.06s;
  }
  & span:nth-child(3) {
    transition-delay: 0.12s;
    font-size: 3.8rem;
  }
  & span:nth-child(4) {
    transition-delay: 0.18s;
    font-size: 3.8rem;
  }
  & span:nth-child(5) {
    transition-delay: 0.24s;
    font-size: 3.8rem;
  }
`;
const startTitleTextOn = css`
  font-size: 3.4rem;
  color: #000000;
  margin: 0;
  display: flex;
  overflow: hidden;
  transform: translate(0, 0);
  & span {
    display: flex;
    align-items: center;
    transform: translate(0, 0%);
    transition: transform cubic-bezier(0.215, 0.61, 0.355, 1) 0.5s;
  }
  & span:nth-child(2) {
    transition-delay: 0.06s;
  }
  & span:nth-child(3) {
    transition-delay: 0.12s;
    font-size: 3.8rem;
  }
  & span:nth-child(4) {
    transition-delay: 0.18s;
    font-size: 3.8rem;
  }
  & span:nth-child(5) {
    transition-delay: 0.24s;
    font-size: 3.8rem;
  }
`;
const startTitleTextEn = css`
  color: #ffb901;
`;
