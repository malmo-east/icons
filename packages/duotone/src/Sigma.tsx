import * as React from "react";
import { SVGProps } from "react";

const SvgSigma = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path
      d="M352 480H32c-12.94 0-24.62-7.781-29.56-19.75-4.969-11.97-2.219-25.72 6.938-34.88l169.4-169.4L9.375 86.64C.219 77.48-2.531 63.73 2.438 51.76 7.375 39.8 19.06 32.01 32 32.01h320c17.69 0 32 14.31 32 32v64c0 17.69-14.31 31.1-32 31.1S320 145.7 320 128V96H109.3l137.4 137.4c12.5 12.5 12.5 32.75 0 45.25l-137.4 137.4H320v-32c0-17.69 14.31-32 31.1-32S384 366.3 384 384v64c0 17.7-14.3 32-32 32z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgSigma;
