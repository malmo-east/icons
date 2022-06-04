import * as React from "react";
import { SVGProps } from "react";

const SvgUpDown = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512" {...props}>
    <path
      className="up-down_svg__fa-primary"
      d="M1.999 145.6c-3.812-8.8-2.077-18.9 4.407-25.9l104-112c9.094-9.781 26.09-9.781 35.19 0l104 112a24.014 24.014 0 0 1 4.406 25.92C250.2 154.3 241.5 160 232 160h-56v96H80v-96H24c-9.55 0-18.188-5.7-22.001-14.4z"
    />
    <path
      d="M254 366.7c3.812 8.75 2.078 18.94-4.406 25.92l-104 112c-9.094 9.781-26.09 9.781-35.19 0l-104-112C-.078 385.7-1.813 375.5 2 366.7s12.45-14.4 22-14.4h56v-96h96v96h56c9.5 0 18.2 4.8 22 14.4z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgUpDown;
