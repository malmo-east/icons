import * as React from "react";
import { SVGProps } from "react";

const SvgScrewdriverWrench = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path
      className="screwdriver-wrench_svg__fa-primary"
      d="M384 278.6c-23.16-23.16-57.57-27.57-85.39-13.9L191.1 158V95.99L64 0 0 63.1l96 127.1 62.04.008 106.7 106.6c-13.67 27.82-9.251 62.23 13.91 85.39l117 117.1c14.62 14.5 38.21 14.5 52.71-.002l52.75-52.75c14.5-14.5 14.5-38.08-.002-52.71L384 278.6z"
    />
    <path
      d="m227.9 307-59.2-59.1L19.8 396.8c-26.37 26.37-26.37 69.08 0 95.45C32.96 505.4 50.21 512 67.5 512s34.54-6.592 47.72-19.78l119.1-119.1C225.5 352.3 222.6 329.4 227.9 307zM64 472c-13.25 0-24-10.75-24-24 0-13.26 10.75-24 24-24s24 10.7 24 24-10.75 24-24 24zm443.7-362.7c-1.641-6.43-8.184-10.31-14.61-8.67a12.028 12.028 0 0 0-5.533 3.152l-74.45 74.5-67.96-11.32-11.32-68.01 74.45-74.45c4.697-4.688 4.707-12.29.02-16.99a11.999 11.999 0 0 0-5.687-3.193c-49.09-12.22-100.1 2.191-136.7 37.98C226.2 81.94 215.2 139.5 231.8 189.6l-4.1 4.1 70.95 70.97c28.5-14.14 62.84-8.55 85.39 13.9l7.516 7.474c29.64-4.719 57.03-18.67 78.22-39.93C505.6 210.3 519.1 158.4 507.7 109.3z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgScrewdriverWrench;
