import * as React from "react";
import { SVGProps } from "react";

const SvgGenderless = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path
      className="genderless_svg__fa-primary"
      d="M192 160c52.94 0 96 43.06 96 96s-43.06 96-96 96-96-43.1-96-96 43.1-96 96-96zm0-80C94.83 80 16 158.8 16 256c0 97.17 78.83 176 176 176s176-78.83 176-176c0-97.2-78.8-176-176-176z"
    />
    <path
      d="M192 320c-35.3 0-64-28.7-64-64s28.7-64 64-64 64 28.7 64 64-28.7 64-64 64z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgGenderless;
