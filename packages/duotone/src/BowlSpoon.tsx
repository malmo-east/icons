import * as React from "react";
import { SVGProps } from "react";

const SvgBowlSpoon = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path
      className="bowl-spoon_svg__fa-primary"
      d="M511.1 256.2c0 95.7-50.6 179-128 223.8 0 17.7-13.4 32-32 32H160c-17.7 0-32-14.3-32-32C51.5 435.2.004 351.9.004 256.2c0-17.8 14.376-33.1 31.996-33.1h447.1c18.5 0 32 15.3 32 33.1z"
    />
    <path
      d="M0 96C0 42.98 56.88 0 127 0c55.3 0 83.3 26.8 92.9 64H480c17.7 0 32 14.33 32 32 0 17.7-14.3 32-32 32H219.9c-9.6 37.2-37.6 64-92.9 64C56.88 192 0 149 0 96z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgBowlSpoon;
