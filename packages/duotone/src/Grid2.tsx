import * as React from "react";
import { SVGProps } from "react";

const SvgGrid2 = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path
      className="grid-2_svg__fa-primary"
      d="M192 176c0 26.5-21.5 48-48 48H48c-26.51 0-48-21.5-48-48V80c0-26.51 21.49-48 48-48h96c26.5 0 48 21.49 48 48v96zm256 256c0 26.5-21.5 48-48 48h-96c-26.5 0-48-21.5-48-48v-96c0-26.5 21.5-48 48-48h96c26.5 0 48 21.5 48 48v96z"
    />
    <path
      d="M448 184c0 22.1-17.9 40-40 40H296c-22.1 0-40-17.9-40-40V72c0-22.09 17.9-40 40-40h112c22.1 0 40 17.91 40 40v112zM192 440c0 22.1-17.9 40-40 40H40c-22.09 0-40-17.9-40-40V328c0-22.1 17.91-40 40-40h112c22.1 0 40 17.9 40 40v112z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgGrid2;
