import * as React from "react";
import { SVGProps } from "react";

const SvgSquarePersonConfined = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path
      className="square-person-confined_svg__fa-primary"
      d="M160 144c0-26.5 21.5-48 48-48s48 21.5 48 48-21.5 48-48 48-48-21.5-48-48zm192 104v102.1c0 36.4-29.5 65.9-65.9 65.9-17.5 0-34.3-6.9-46.7-19.3L184.8 342l-28.2 56.3c-7.9 15.8-27.1 22.2-42.9 14.3-15.81-7.9-22.22-27.1-14.31-42.9l48.01-96c3.7-9.2 13.3-15.6 23.5-17.3 10.1-1.6 20.5 1.7 27.7 9l41.4 41.3V248c0-30.9 25.1-56 56-56s56 25.1 56 56z"
    />
    <path
      d="M384 32c35.3 0 64 28.65 64 64v320c0 35.3-28.7 64-64 64H64c-35.35 0-64-28.7-64-64V96c0-35.35 28.65-64 64-64h320zM208 96c-26.5 0-48 21.5-48 48s21.5 48 48 48 48-21.5 48-48-21.5-48-48-48zm32 210.7-41.4-41.3c-7.2-7.3-17.6-10.6-27.7-9-10.2 1.7-19.8 8.1-23.5 17.3l-48.01 96c-7.91 15.8-1.5 35 14.31 42.9 15.8 7.9 35 1.5 42.9-14.3l28.2-56.3 54.6 54.7c12.4 12.4 29.2 19.3 46.7 19.3 36.4 0 65.9-29.5 65.9-65.9V248c0-30.9-25.1-56-56-56s-56 25.1-56 56v58.7z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgSquarePersonConfined;
