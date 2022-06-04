import * as React from "react";
import { SVGProps } from "react";

const SvgUtilityPole = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path
      className="utility-pole_svg__fa-primary"
      d="M512 64v32c0 17.67-14.33 32-32 32H288v384h-64V128H32c-17.67 0-32-14.3-32-32V64h224V16c0-8.838 7.2-16 16-16h32c8.8 0 16 7.162 16 16v48h224z"
    />
    <path
      d="M128 55.1c0-12.36-10.7-23.1-24-23.1S80 42.74 80 55.1V64h48v-8.9zM24 32C10.75 32 0 42.74 0 55.1V64h48v-8.9C48 42.74 37.25 32 24 32zm59.16 96L224 221.9v-38.5L140.8 128H83.16zM488 32c-13.25 0-24 10.74-24 23.1V64h48v-8.9c0-12.36-10.7-23.1-24-23.1zm-80 0c-13.3 0-24 10.74-24 23.1V64h48v-8.9c0-12.36-10.7-23.1-24-23.1zM288 183.4v38.46L428.8 128h-57.69L288 183.4z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgUtilityPole;
