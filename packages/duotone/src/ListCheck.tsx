import * as React from "react";
import { SVGProps } from "react";

const SvgListCheck = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path
      className="list-check_svg__fa-primary"
      d="M81.84 152.1c-4.41 4.8-10.63 7.7-17.21 7-6.58 1.1-12.94-1.5-17.6-7l-40.001-40c-9.372-8.5-9.372-23.7 0-33.07 9.371-9.37 24.571-9.37 33.941 0l22.11 22.07 55.12-61.16c8.8-9.85 24-10.65 33.9-1.78 9.8 8.87 10.6 24.04 1.7 33.9L81.84 152.1zm0 160c-4.41 4.8-10.63 7.7-17.21 7-6.58 1.1-12.94-1.5-17.6-7l-40.001-40c-9.372-8.5-9.372-23.7 0-33.1 9.371-9.3 24.571-9.3 33.941 0l22.11 22.1 55.12-61.2c8.8-9.8 24-10.6 33.9-1.7 9.8 8.8 10.6 24 1.7 33.9l-71.96 80zM0 416c0-26.5 21.49-48 48-48s48 21.5 48 48-21.49 48-48 48-48-21.5-48-48z"
    />
    <path
      d="M192 384h288c17.7 0 32 14.3 32 32s-14.3 32-32 32H192c-17.7 0-32-14.3-32-32s14.3-32 32-32zm64-160h224c17.7 0 32 14.3 32 32s-14.3 32-32 32H256c-17.7 0-32-14.3-32-32s14.3-32 32-32zm0-96c-17.7 0-32-14.3-32-32 0-17.67 14.3-32 32-32h224c17.7 0 32 14.33 32 32 0 17.7-14.3 32-32 32H256z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgListCheck;
