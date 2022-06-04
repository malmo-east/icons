import * as React from "react";
import { SVGProps } from "react";

const SvgDiploma = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path
      className="diploma_svg__fa-primary"
      d="M480 112c0 11.4-2.506 22.19-6.844 32H400c17.7 0 32-14.3 32-32s-14.32-32-31.1-32c-15.93 0-27.67 2.639-68.88 64H384v336l-64-32.01L256 480V144h52.87C267.7 82.64 255.9 80 240 80c-17.67 0-32 14.33-32 32s14.33 32 32 32h-73.2c-4.3-9.8-6.8-20.6-6.8-32 0-43.85 35.7-80 79.5-80 32.8 0 55 15.08 80.5 46.95C345.5 47.08 367.7 32 400.5 32c43.8 0 79.5 36.15 79.5 80z"
    />
    <path
      d="M539.3 144H384v238l155.3 34c55.6 0 100.7-64.5 100.7-144s-45.1-128-100.7-128zM0 272c0 79.5 42.98 144 96 144l160-34.29V144H96c-53.02 0-96 48.5-96 128z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgDiploma;
