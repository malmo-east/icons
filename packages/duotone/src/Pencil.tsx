import * as React from "react";
import { SVGProps } from "react";

const SvgPencil = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path
      className="pencil_svg__fa-primary"
      d="M182.7 459.2c-6.6 6.6-14.8 11.5-23.8 14.1L30.77 511c-8.42 2.5-17.53.2-23.74-6.9-6.21-5.3-8.532-14.4-6.054-22.9L38.67 353.1c2.65-9 7.5-17.2 14.13-23.8l33.94 33.9c-.95 1-1.64 2.1-2.02 3.4l-25.28 86 85.96-25.3c1.3-.4 2.5-1.1 3.4-2l9.8-9.9H112c-8.8 0-16-7.1-16-16v-45.5l-9.26 9.3-33.94-33.9L303 79.03 432.1 208.1 182.7 459.2z"
    />
    <path
      d="M362.7 19.32c25-24.998 65.6-24.998 90.6 0l39.4 39.43c25 24.99 25 65.55 0 90.55l-60.6 58.8L303 79.03l59.7-59.71z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgPencil;
