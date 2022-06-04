import * as React from "react";
import { SVGProps } from "react";

const SvgTrafficCone = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path
      className="traffic-cone_svg__fa-primary"
      d="M173.7 128 216 20.3C220.8 8.053 232.7 0 245.8 0h20.4c13.1 0 25 8.053 28.9 20.3L338.3 128H173.7zm189.7 64 37.7 96H110.9l37.7-96h214.8zM48 448l37.71-96H426.3l37.7 96h16c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.67 0-32-14.3-32-32s14.33-32 32-32h16z"
    />
    <path
      d="M173.7 128h164.6l25.1 64H148.6l25.1-64zm-62.8 160h290.2l25.2 64H85.71l25.19-64z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgTrafficCone;
