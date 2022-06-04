import * as React from "react";
import { SVGProps } from "react";

const SvgEthernet = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path
      className="ethernet_svg__fa-primary"
      d="M96 448h32V320H96v128zm96 0h32V320h-32v128zm96 0h32V320h-32v128zm96-128v128h32V320h-32z"
    />
    <path
      d="M512 208v224c0 8.75-7.25 16-16 16h-80V320h-32v128h-64V320h-32v128h-64V320h-32v128h-64V320H96v128H16c-8.75 0-16-7.2-16-16V208c0-8.8 7.25-16 16-16h48v-48c0-8.8 7.25-16 16-16h48V80c0-8.75 7.2-16 16-16h224c8.8 0 16 7.25 16 16v48h48c8.8 0 16 7.2 16 16v48h48c8.8 0 16 7.2 16 16z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgEthernet;
