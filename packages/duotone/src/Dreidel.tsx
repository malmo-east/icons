import * as React from "react";
import { SVGProps } from "react";

const SvgDreidel = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path
      className="dreidel_svg__fa-primary"
      d="M314.9 401.5 256 460.35A66.674 66.674 0 0 1 208.7 480H66.87C29.87 480 0 450.1 0 413.1V271.3c0-17.8 7.001-34.8 19.62-48.2l58.9-58.87L314.9 401.5z"
    />
    <path
      d="M438.6 86.63 334.3 190.9l71.9 71.94c6.562 6.564 9.813 15.13 9.813 23.69 0 8.564-3.25 17.13-9.813 23.69l-91.34 91.29L78.53 165.1l91.34-91.4c6.562-6.5 15.1-9.737 23.65-9.737 8.551 0 17.11 3.237 23.68 9.737l71.9 71.94 104.3-104.3C399.6 35.13 407.8 32 416 32c18.27 0 32 14.95 32 32 0 8.19-3.1 16.38-9.4 22.63z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgDreidel;
