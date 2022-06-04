import * as React from "react";
import { SVGProps } from "react";

const SvgUserNurse = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path
      className="user-nurse_svg__fa-primary"
      d="M327.2 312.8 224 416 120.8 312.8C50.87 335.1 0 400.05 0 477.4 0 496.5 15.52 512 34.66 512H413.3c19.14 0 34.66-15.46 34.66-34.61C447.1 400.1 397.1 335.1 327.2 312.8zM352 65.88c0-13.38-8.25-25.38-20.75-30L246.5 4.125C239.3 1.375 231.6 0 224 0s-15.2 1.375-22.5 4.125L116.8 35.88C104.3 40.5 96 52.5 96 65.88V160h256V65.88zm-88 22.5c0 2.75-2.25 5-5 5h-21.62V115c0 2.75-2.25 5-5 5H215.6c-2.75 0-5-2.25-5-5V93.38H189c-2.75 0-5-2.25-5-5V71.63c0-2.75 2.25-5 5-5h21.62V45c0-2.75 2.25-5 5-5h16.75c2.75 0 5 2.25 5 5v21.62H259c2.75 0 5 2.25 5 5v16.76z"
    />
    <path
      d="M96 176c0 70.75 57.25 128 128 128s128-57.25 128-128v-16H96v16z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgUserNurse;
