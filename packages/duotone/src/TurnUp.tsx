import * as React from "react";
import { SVGProps } from "react";

const SvgTurnUp = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path
      className="turn-up_svg__fa-primary"
      d="M209.6 7.671c-9.5-10.23-25.69-10.23-35.19 0l-104 112C63.92 126.7 62.19 136.8 66 145.6s12.45 14.41 22 14.41h208c9.547 0 18.19-5.656 22-14.41s2.078-18.94-4.406-25.92L209.6 7.671z"
    />
    <path
      d="M224 160v272c0 44.13-35.89 80-80 80H32c-17.67 0-32-14.31-32-32s14.33-32 32-32h112c8.8 0 16-7.2 16-16V160h64z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgTurnUp;
