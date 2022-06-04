import * as React from "react";
import { SVGProps } from "react";

const SvgCoinVertical = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path
      className="coin-vertical_svg__fa-primary"
      d="M266.1 48c-10.7-18.28-24.3-34.79-40-48h29c28.7 0 54.5 17.79 75.5 48h-64.5zm18.2 32h64.6c12.9 27.1 22.8 59.8 28.7 96h-64.3c-6-35.1-15.9-67.6-29-96zm33.3 224c1.6-15.7 1.5-31.7 1.5-48s.1-32.3-1.5-48h64.2c1.4 15.5 1.3 31.6 1.3 48s.1 32.5-1.3 48h-64.2zm-4.3 32h64.3c-5.9 36.2-15.8 68.9-28.7 96h-64.6c13.1-28.4 23-60.9 29-96zm17.3 128c-21 30.2-46.8 48-75.5 48h-29c15.7-13.2 29.3-29.7 40-48h64.5zM87.84 425.4c-11.36-12-20.12-27.7-26.81-44.4C47.6 347.4 40 303.2 40 256s7.6-91.4 21.03-125.9c6.69-15.8 15.45-31.5 26.81-43.51C99.26 74.5 115.5 64 136 64c20.5 0 36.7 10.5 48.2 22.59 11.3 12.01 20.1 27.71 25.9 43.51C224.4 164.6 232 208.8 232 256s-7.6 91.4-21.9 125c-5.8 16.7-14.6 32.4-25.9 44.4-11.5 12.1-27.7 22.6-48.2 22.6-20.5 0-36.73-10.5-48.16-22.6zM136 96c-35.3 0-64 71.6-64 160s28.7 160 64 160 64-71.6 64-160-28.7-160-64-160z"
    />
    <path
      d="M200 256c0 88.4-28.7 160-64 160s-64-71.6-64-160 28.7-160 64-160 64 71.6 64 160zM0 256C0 114.6 64.47 0 144 0c79.5 0 144 114.6 144 256s-64.5 256-144 256C64.47 512 0 397.4 0 256zm136 192c20.5 0 36.7-10.5 48.2-22.6 11.3-12 20.1-27.7 25.9-44.4 14.3-33.6 21.9-77.8 21.9-125s-7.6-91.4-21.9-125.9c-5.8-15.8-14.6-31.5-25.9-43.51C172.7 74.5 156.5 64 136 64c-20.5 0-36.73 10.5-48.16 22.59C76.48 98.6 67.72 114.3 61.03 130.1 47.6 164.6 40 208.8 40 256s7.6 91.4 21.03 125c6.69 16.7 15.45 32.4 26.81 44.4C99.26 437.5 115.5 448 136 448z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgCoinVertical;
