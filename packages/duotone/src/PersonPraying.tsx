import * as React from "react";
import { SVGProps } from "react";

const SvgPersonPraying = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path
      className="person-praying_svg__fa-primary"
      d="M225.4 297.8c14 16.75 39 19.12 56.01 5.25l88.01-72c17-14 19.5-39.25 5.625-56.38-14-17.12-39.25-19.5-56.38-5.625L261.3 216l-39-46.25c-15.38-18.38-39.13-27.88-64.01-25.38-24.13 2.5-45.25 16.25-56.38 37l-49.38 92C29.13 317 43.88 369.8 86.76 397.1L131.5 432H40c-22.12 0-40 17.9-40 40s17.88 40 40 40h208c34.13 0 53.76-42.75 28.25-68.25L166.4 333.9l34.9-64.9 24.1 28.8z"
    />
    <path
      d="M255.1 128c35.38 0 63.1-28.62 63.1-64S289.58 0 255.1 0s-64 28.62-64 64 29.5 64 64 64z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgPersonPraying;
