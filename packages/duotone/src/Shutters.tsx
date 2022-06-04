import * as React from "react";
import { SVGProps } from "react";

const SvgShutters = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path
      className="shutters_svg__fa-primary"
      d="M512 64c0 17.66-14.34 32-32 32H32C14.34 96 0 81.66 0 64s14.34-32 32-32h448c17.7 0 32 14.34 32 32z"
    />
    <path
      d="M20.48 224h471c10.4 0 18.05-9.793 15.52-19.87L488 128H24L4.961 204.1C2.432 214.2 10.08 224 20.48 224zM488 256H24L4.96 332.13C2.432 342.2 10.08 352 20.48 352h471c10.4 0 18.05-9.793 15.52-19.87L488 256zm0 128H24L4.96 460.13C2.432 470.2 10.08 480 20.48 480h471c10.4 0 18.05-9.793 15.52-19.87L488 384z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgShutters;
