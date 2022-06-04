import * as React from "react";
import { SVGProps } from "react";

const SvgHandHoldingHeart = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path
      className="hand-holding-heart_svg__fa-primary"
      d="M275.2 250.5c7 7.375 18.5 7.375 25.5 0l108.1-114.2c31.5-33.12 29.72-88.1-5.65-118.7-30.88-26.75-76.75-21.9-104.9 7.724L287.1 36.91l-10.3-11.63c-28.1-29.625-74.1-34.474-105.7-7.72-34.4 30.62-36.4 85.64-4.7 118.74l108.8 114.2z"
    />
    <path
      d="M568.2 336.3c-13.12-17.81-38.14-21.66-55.93-8.469l-119.7 88.17h-120.6c-8.748 0-15.1-7.25-15.1-15.1 0-8.746 7.25-15.1 15.1-15.1h78.25c15.1 0 30.75-10.87 33.37-26.62 3.25-19.1-12.12-37.37-31.62-37.37H191.1c-26.1 0-53.12 9.25-74.12 26.25l-46.5 37.74-55.37-.025c-8.748 0-15.1 7.275-15.1 16.02L0 496c0 8.8 7.251 16 15.1 16h346.1c22.03 0 43.92-7.187 61.7-20.28L558 392.21c19.5-13.11 23.3-38.11 10.2-55.91z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgHandHoldingHeart;
