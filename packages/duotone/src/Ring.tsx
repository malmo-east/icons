import * as React from "react";
import { SVGProps } from "react";

const SvgRing = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path
      className="ring_svg__fa-primary"
      d="M256 64C110.1 64 0 125.9 0 208v98.13C0 384.5 114.6 448 256 448s256-63.52 256-141.9V208c0-82.1-110.1-144-256-144zm0 224c-106.9 0-192-35.8-192-80s85.1-80 192-80c105.1 0 192 35.82 192 80s-86.9 80-192 80z"
    />
    <path
      d="M64 208c0-44.2 85.1-80 192-80 105.1 0 192 35.82 192 80 0 21.81-20.95 41.57-54.9 56-34.8-14.8-83.4-24-137.1-24s-102.2 9.2-137.1 24C85 249.6 64 229.8 64 208z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgRing;
