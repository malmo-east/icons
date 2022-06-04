import * as React from "react";
import { SVGProps } from "react";

const SvgBoxOpen = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path
      className="box-open_svg__fa-primary"
      d="M403.4 202.1c7.4 13.3 22.3 19.1 36.2 15.2l136.4-39v200.2c0 22-15 41.2-36.4 46.6l-204.1 51c-10.2 2.6-20.8 2.6-31 0l-204.1-51C78.99 419.7 64 400.5 64 378.5V178.3l136.4 39c13.9 3.9 28.8-1.9 36.2-15.2L319.1 64l84.3 138.1z"
    />
    <path
      d="m17.24 125.5 41.7-83.38c3.03-6.06 9.56-9.56 16.29-8.72L320 63.1l-83.4 139c-7.4 13.3-22.3 19.1-36.2 15.2L37.07 170.6c-19.26-5.5-28.787-27.2-19.83-45.1zm585.66 45.1-163.3 46.7c-13.9 3.9-28.8-1.9-36.2-15.2L320 63.1l244.8-29.7c6.7-.84 13.2 2.66 16.3 8.72l41.7 83.38c8.9 17.9-.6 39.6-19.9 45.1z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgBoxOpen;
