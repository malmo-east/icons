import * as React from "react";
import { SVGProps } from "react";

const SvgCapsules = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path
      className="capsules_svg__fa-primary"
      d="M0 367.5c0 60.71 51.14 111.8 111.9 111.8s111.9-51.12 111.9-111.8V255.7H0v111.8zm556.2-67.1-63.93-92.66-188.6 131 63.93 92.66c35.16 51.12 108.7 63.91 159.8 28.76s63.9-108.66 28.8-159.76z"
    />
    <path
      d="M111.1 32C51.24 32-.002 83.25-.002 143.1L0 255.7h223.7l.2-111.8C223.9 83.23 172.7 32 111.1 32zm314 79.9c-35.16-51.12-108.7-63.91-159.8-28.76l-9.6 9.57v178.9l47.94 67.1 188.6-131-67.14-95.81z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgCapsules;
