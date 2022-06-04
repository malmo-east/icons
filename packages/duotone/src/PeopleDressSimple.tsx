import * as React from "react";
import { SVGProps } from "react";

const SvgPeopleDressSimple = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path
      className="people-dress-simple_svg__fa-primary"
      d="m511.4 363.6-48.22-168.8C457.3 174.2 438.4 160 416.1 160h-65.99c-21.43 0-40.27 14.21-46.15 34.81l-48.23 168.8C253.7 373.8 261.4 384 272 384h48v96c0 17.67 14.33 32 32 32h64c17.67 0 32-14.33 32-32v-96h47.99c10.61 0 18.31-10.2 15.41-20.4zM207.1 194.8c-5.8-20.6-24.7-34.8-47-34.8H95c-21.43 0-40.26 14.2-46.15 34.8L.63 363.6C-2.295 373.8 5.379 384 16.01 384H64v96c0 17.67 14.33 32 32 32h64c17.67 0 32-14.33 32-32v-96h47.99c10.63 0 18.3-10.18 15.38-20.4L207.1 194.8z"
    />
    <path
      d="M128 0C92.63 0 64 28.62 64 64s28.62 64 64 64 64-28.62 64-64-28.6-64-64-64zm256 0c-35.38 0-64 28.62-64 64s28.62 64 64 64 64-28.62 64-64-28.6-64-64-64z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgPeopleDressSimple;
