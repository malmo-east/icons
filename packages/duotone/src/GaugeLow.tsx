import * as React from "react";
import { SVGProps } from "react";

const SvgGaugeLow = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path
      className="gauge-low_svg__fa-primary"
      d="M254.1 288h1.9c35.3 0 64 28.7 64 64s-28.7 64-64 64-64-28.7-64-64c0-17.4 6.9-33.1 18.1-44.6L146 161.7c-5.3-12.2.2-26.3 12.3-31.7 12.2-5.3 26.3.2 30.8 12.3l65 145.7z"
    />
    <path
      d="M512 256c0 141.4-114.6 256-256 256S0 397.4 0 256 114.6 0 256 0s256 114.6 256 256zM256 64c-17.7 0-32 14.33-32 32 0 17.7 14.3 32 32 32s32-14.3 32-32c0-17.67-14.3-32-32-32zm0 352c35.3 0 64-28.7 64-64s-28.7-64-64-64h-1.9l-65-145.7c-4.5-12.1-18.6-17.6-30.8-12.3-12.1 5.4-17.6 19.5-12.3 31.7l64.1 145.7C198.9 318.9 192 334.6 192 352c0 35.3 28.7 64 64 64zM96 224c-17.67 0-32 14.3-32 32s14.33 32 32 32c17.7 0 32-14.3 32-32s-14.3-32-32-32zm320 64c17.7 0 32-14.3 32-32s-14.3-32-32-32-32 14.3-32 32 14.3 32 32 32zm-48-176c-17.7 0-32 14.3-32 32s14.3 32 32 32 32-14.3 32-32-14.3-32-32-32z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgGaugeLow;
