import * as React from "react";
import { SVGProps } from "react";

const SvgUserLarge = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path
      className="user-large_svg__fa-primary"
      d="M351.1 320H160C71.64 320 0 391.63 0 480c0 17.67 14.33 32 31.1 32H480c17.67 0 31.1-14.33 31.1-32 .9-88.4-70.7-160-160-160z"
    />
    <path
      d="M256 288c79.53 0 144-64.47 144-144S335.53 0 256 0c-79.52 0-144 64.47-144 144s64.5 144 144 144z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgUserLarge;
