import * as React from "react";
import { SVGProps } from "react";

const SvgCirclePlay = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path
      className="circle-play_svg__fa-primary"
      d="M356.5 235.5c7.1 4.4 11.5 12.1 11.5 20.5s-4.4 16.1-11.5 20.5l-144 88c-7.4 4.5-16.7 4.7-24.2.4-7.6-4.2-12.3-12.2-12.3-20.9V168c0-8.7 4.7-16.7 12.3-20.9 7.5-4.3 16.8-5 24.2.4l144 88z"
    />
    <path
      d="M512 256c0 141.4-114.6 256-256 256S0 397.4 0 256 114.6 0 256 0s256 114.6 256 256zm-336-88v176c0 8.7 4.7 16.7 12.3 20.9 7.5 4.3 16.8 4.1 24.2-.4l144-88c7.1-4.4 11.5-12.1 11.5-20.5s-4.4-16.1-11.5-20.5l-144-88c-7.4-5.4-16.7-4.7-24.2-.4-7.6 4.2-12.3 12.2-12.3 20.9z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgCirclePlay;
