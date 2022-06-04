import * as React from "react";
import { SVGProps } from "react";

const SvgBoothCurtain = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path
      className="booth-curtain_svg__fa-primary"
      d="M448 0v400c0 26.5-21.5 48-48 48-24.46 0-44.45-18.21-48-41.54-3.6 23.34-23.5 41.54-48 41.54s-44.45-18.22-48-41.54C252.4 429.8 232.5 448 208 448c-26.5 0-48-21.5-48-48V0h288z"
    />
    <path
      d="M0 32v464c0 8.8 7.25 16 15.1 16H48c8.75 0 16-7.2 16-16V64h96V0H32C14.25 0 0 14.25 0 32zM480 0h-32v496c0 8.75 7.25 16 16 16h32c8.75 0 16-7.25 16-16V32c0-17.75-14.2-32-32-32z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgBoothCurtain;
