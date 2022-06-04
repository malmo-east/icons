import * as React from "react";
import { SVGProps } from "react";

const SvgLoveseat = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path
      className="loveseat_svg__fa-primary"
      d="M464 224c-26.5 0-48 21.5-48 48v80H96v-80c0-26.5-21.49-48-48-48S0 245.5 0 272v192c0 8.8 7.164 16 16 16h64c8.84 0 16-7.2 16-16v-16h320v16c0 8.836 7.164 16 16 16h64c8.836 0 16-7.164 16-16V272c0-26.5-21.5-48-48-48z"
    />
    <path
      d="M64 226.9V160c0-70.7 57.31-128 128-128h128c70.7 0 128 57.3 128 128v66.94c-18.6 6.56-32 24.16-32 45.06v80H96v-80c0-20.9-13.4-38.5-32-45.1z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgLoveseat;
