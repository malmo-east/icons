import * as React from "react";
import { SVGProps } from "react";

const SvgVenus = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path
      className="venus_svg__fa-primary"
      d="M368 176C368 78.8 289.2 0 192 0S16 78.8 16 176c0 86.26 62.1 157.9 144 172.1v35.05h-48c-8.836 0-16 7.162-16 16v32c0 8.836 7.164 16 16 16h48v48c0 8.836 7.164 16 16 16h32c8.838 0 16-7.164 16-16v-48h48c8.838 0 16-7.164 16-16v-32c0-8.838-7.162-16-16-16h-48V348.1c81.9-14.2 144-85.8 144-172.1zm-176 96c-52.93 0-96-43.07-96-96 0-52.94 43.07-96 96-96 52.94 0 96 43.06 96 96 0 52.9-43.1 96-96 96z"
    />
    <path
      d="M256 176c0 35.35-28.65 64-64 64s-64-28.65-64-64 28.65-64 64-64 64 28.7 64 64z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgVenus;
