import * as React from "react";
import { SVGProps } from "react";

const SvgLampFloor = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path
      className="lamp-floor_svg__fa-primary"
      d="M256 448H127.1c-28.38 0-55.01 18.5-63.26 44.13C61.49 502 69.78 512 80.16 512h223.7c10.38 0 18.67-9.1 15.42-19.88C311 466.5 284.4 448 256 448zm125.4-268.6-68.63-160C307.8 7.625 296.3 0 283.4 0H100.6C87.72 0 76.22 7.625 71.22 19.38l-68.63 160a32.119 32.119 0 0 0 2.641 30.22c5.999 9 15.999 14.4 26.749 14.4h320c10.75 0 20.75-5.375 26.75-14.38a32.246 32.246 0 0 0 2.67-30.22z"
    />
    <path
      d="M224 448h-64l.01-224h64.01L224 448z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgLampFloor;
