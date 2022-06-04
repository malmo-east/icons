import * as React from "react";
import { SVGProps } from "react";

const SvgBroom = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path
      className="broom_svg__fa-primary"
      d="M93.13 257.7c-21.88 17.4-40.13 55.8-54.5 97.4l60.37-22c5.75-2.125 10.62 4.751 6.625 9.499L11 454.7c-7.25 31.4-11 55.5-11 55.5s206.6 13.62 266.6-34.12c60-47.87 76.63-150.1 76.63-150.1L256.5 216.7s-103.4-7.6-163.37 41zm342.47 16.5-108-135.1c-5.1-7.2-15.1-6-18.6 1.4l-25.2 53.6 86.75 109.2 58.75-12.5c8-.7 11.3-10.2 6.3-16.6z"
    />
    <path
      d="m627.7 57.24-225.2 175.2-39.82-50.14L588.38 6.7c14-10.83 34.06-8.28 44.91 5.624C644.1 26.28 641.6 46.38 627.7 57.24z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgBroom;
