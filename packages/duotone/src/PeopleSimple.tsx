import * as React from "react";
import { SVGProps } from "react";

const SvgPeopleSimple = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path
      className="people-simple_svg__fa-primary"
      d="M160 160H96c-35.35 0-64 28.7-64 64v96c0 17.67 14.33 32 32 32v128c0 17.67 14.33 32 32 32h64c17.67 0 32-14.33 32-32V352c17.67 0 32-14.33 32-32v-96c0-35.3-28.7-64-64-64zm351.4 203.6-48.22-168.8C457.3 174.2 438.4 160 416.1 160h-65.99c-21.43 0-40.27 14.21-46.15 34.81l-48.23 168.8C253.7 373.8 261.4 384 272 384h48v96c0 17.67 14.33 32 32 32h64c17.67 0 32-14.33 32-32v-96h47.99c10.61 0 18.31-10.2 15.41-20.4z"
    />
    <path
      d="M128 0C92.63 0 64 28.62 64 64s28.62 64 64 64 64-28.62 64-64-28.6-64-64-64zm256 0c-35.38 0-64 28.62-64 64s28.62 64 64 64 64-28.62 64-64-28.6-64-64-64z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgPeopleSimple;
