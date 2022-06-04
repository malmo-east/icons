import * as React from "react";
import { SVGProps } from "react";

const SvgLandmark = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path
      className="landmark_svg__fa-primary"
      d="M495.9 132.2c12.6 7.2 18.8 22 15 36-3.7 14-16.4 23.8-30.9 23.8H32c-14.51 0-27.201-9.8-30.925-23.8s2.453-28.8 15.055-36L240.1 4.216c9-5.621 21.9-5.621 31.8 0l224 127.984z"
    />
    <path
      d="M127.1 416h40V224h64v192H280V224h64v192h40V224h64v196.3c.6.3 1.2-.2 1.8 1.1l48 32c11.7 7.8 16.9 22.4 12.8 35.9-4.1 13.5-16.5 22.7-30.6 22.7H31.1c-13.2 0-25.642-9.2-29.728-22.7-4.087-13.5 1.143-28.1 12.878-35.9l48-32c.57-1.3 1.15-.8.85-1.1V224h64v192z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgLandmark;
