import * as React from "react";
import { SVGProps } from "react";

const SvgCompass = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path
      className="compass_svg__fa-primary"
      d="m131.4 349.6 55.5-144.3c3.2-8.5 9.9-15.2 18.4-18.4l144.3-55.5c19.4-7.5 38.5 10.7 31 31l-55.5 144.3c-3.2 8.5-9.9 15.2-18.4 18.4l-144.3 55.5c-20.3 7.5-38.5-11.6-31-31zm123.7-62.5c18.6 0 32.9-13.4 32.9-32 0-16.8-14.3-32-32.9-32-16.8 0-32 15.2-32 32 0 18.6 15.2 32 32 32z"
    />
    <path
      d="M0 256C0 114.6 114.6 0 256 0s256 114.6 256 256-114.6 256-256 256S0 397.4 0 256zm162.4 124.6 144.3-55.5c8.5-3.2 15.2-9.9 18.4-18.4l55.5-144.3c7.5-20.3-11.6-38.5-31-31l-144.3 55.5c-8.5 3.2-15.2 9.9-18.4 18.4l-55.5 144.3c-7.5 19.4 10.7 38.5 31 31z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgCompass;
