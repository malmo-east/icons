import * as React from "react";
import { SVGProps } from "react";

const SvgArrowUpFromSquare = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path
      className="arrow-up-from-square_svg__fa-primary"
      d="M167.8 159.7c8.895 0 17.63-3.711 23.76-10.39L224 113.9V320c0 17.7 14.33 32.02 32 32.02s32-14.32 32-32.02V113.9l32.4 35.39c6.321 6.881 14.96 10.38 23.63 10.38 17.65 0 31.97-14.29 31.97-32.01 0-7.734-2.781-15.51-8.409-21.66l-87.1-96.09C273.5 3.314 264.8 0 256 0s-17.5 3.314-23.6 9.945l-87.1 96.09a32.014 32.014 0 0 0-8.409 21.66C135.1 145.4 150.3 159.7 167.8 159.7z"
    />
    <path
      d="M512 160v288c0 35.28-28.72 64-64 64H64c-35.28 0-64-28.72-64-64V160c0-35.28 28.72-64 64-64h32v63.92L64 160v288h384V160l-32-.082V96h32c35.3 0 64 28.7 64 64z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgArrowUpFromSquare;
