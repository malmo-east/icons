import * as React from "react";
import { SVGProps } from "react";

const SvgTurnDown = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path
      className="turn-down_svg__fa-primary"
      d="M296 352H88c-9.547 0-18.19 5.656-22 14.41s-2.078 18.94 4.406 25.92l104 112c9.498 10.23 25.69 10.23 35.19 0l104-112c6.484-6.984 8.219-17.17 4.406-25.92S305.5 352 296 352z"
    />
    <path
      d="M144 64H32C14.33 64 0 49.69 0 32S14.33 0 32 0h112c44.1 0 80 35.88 80 80v272h-64V80c0-8.81-7.2-16-16-16z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgTurnDown;
