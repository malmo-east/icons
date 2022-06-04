import * as React from "react";
import { SVGProps } from "react";

const SvgCircleNodes = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path
      className="circle-nodes_svg__fa-primary"
      d="M480 80c0 44.2-35.8 80-80 80s-80-35.8-80-80c0-44.18 35.8-80 80-80s80 35.82 80 80zm-64 352c0 44.2-35.8 80-80 80s-80-35.8-80-80 35.8-80 80-80 80 35.8 80 80zM0 208c0-44.2 35.82-80 80-80 44.2 0 80 35.8 80 80s-35.8 80-80 80c-44.18 0-80-35.8-80-80z"
    />
    <path
      d="m418.4 157.9-37.8 207.7C367.9 357 352.5 352 336 352c-6.3 0-12.5.7-18.4 2.1l37.8-207.7C368.1 155 383.5 160 400 160c6.3 0 12.5-.7 18.4-2.1zm-262.1 74.3 145.6 127.4c-20 9.4-35.4 26.9-42.2 48.2L114.1 280.4c20-10.3 35.4-26.9 42.2-48.2zM160 208c0-22.3-9.1-42.4-23.8-56.9L320 77.52V80c0 22.3 9.1 42.4 23.8 56.9l-184.7 73.6c0-.8.9-1.7.9-2.5z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgCircleNodes;
