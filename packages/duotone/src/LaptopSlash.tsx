import * as React from "react";
import { SVGProps } from "react";

const SvgLaptopSlash = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path
      className="laptop-slash_svg__fa-primary"
      d="M615.1 512c-5.156 0-10.38-1.674-14.79-5.112L9.188 42.89C-1.249 34.72-3.067 19.63 5.12 9.189 13.25-1.217 28.28-3.092 38.81 5.111l591.1 463.1c10.44 8.172 12.26 23.27 4.068 33.7C630.2 508.8 623.1 512 615.1 512z"
    />
    <path
      d="m128 196.6-64-50.2V352h64V196.6zM16 383.1c-8.75 0-16 7.25-16 16v16c0 35.25 28.75 64 64 64l425.6.9-122.5-96-351.1-.9zm607.1.9H521.3l98.76 77.4c12.64-11.6 19.04-27.7 19.04-45.4v-16c0-8.7-6.4-16-16-16zm-48-32V80c0-26.38-21.62-48-48-48H112c-10.2 0-19.73 3.33-27.55 8.88L154.8 96H512v256h63.1z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgLaptopSlash;
