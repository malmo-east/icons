import * as React from "react";
import { SVGProps } from "react";

const SvgCheese = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="m299.9 32.01-1.5-.01c-7.125.125-14.13 2.508-19.62 7.008L0 255.1v192C0 465.6 14.38 480 32 480h448c17.62 0 32-14.37 32-31.1V255.1c0-119-94.9-216.84-212.1-223.09zm3.7 48.37c87.75 7.75 155.6 79.5 159.6 167.5H88.5l215.1-167.5zM464 432H48V295.9h416V432z" />
  </svg>
);

export default SvgCheese;