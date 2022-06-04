import * as React from "react";
import { SVGProps } from "react";

const SvgShieldSlash = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path
      className="shield-slash_svg__fa-primary"
      d="M639.1 487.1c0 13.5-9.3 24.9-24 24.9-5.174 0-10.4-1.667-14.81-5.117L9.189 42.89C3.152 38.16.001 31.12.001 24 0 11.21 10.28 0 24.03 0c5.156 0 10.38 1.672 14.78 5.109l591.1 463.1c6.89 5.591 9.19 12.691 9.19 18.891z"
    />
    <path
      d="M319.9 512c37.26 0 102.9-58.24 117.3-72.57L81.16 160.3C96.42 398.1 272.1 512 319.9 512zM530.5 83.71l-192-80C333.6 1.672 325.3 0 320.1 0c-5.3 0-13.6 1.672-18.5 3.703L128.9 75.68l367.6 288.1C533.4 303.5 560 225.5 560 127.1c0-18.5-11.7-36-29.5-43.39z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgShieldSlash;
