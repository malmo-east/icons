import * as React from "react";
import { SVGProps } from "react";

const SvgCircleParking = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path
      className="circle-parking_svg__fa-primary"
      d="M240 352c0 17.7-14.3 32-32 32s-32-14.3-32-32V168c0-22.1 17.9-40 40-40h72c53 0 96 42.1 96 96 0 53-43 96-96 96h-48v32zm0-160v64h48c17.7 0 32-14.3 32-32s-14.3-32-32-32h-48z"
    />
    <path
      d="M0 256C0 114.6 114.6 0 256 0s256 114.6 256 256-114.6 256-256 256S0 397.4 0 256zm256 192c106 0 192-86 192-192 0-106.9-86-192-192-192-106.9 0-192 85.1-192 192 0 106 85.1 192 192 192z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgCircleParking;
