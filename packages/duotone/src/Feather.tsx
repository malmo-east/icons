import * as React from "react";
import { SVGProps } from "react";

const SvgFeather = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path
      className="feather_svg__fa-primary"
      d="M23.1 512a23.905 23.905 0 0 1-16.97-7.031c-9.375-9.375-9.375-24.6 0-33.98l304-303.1c9.375-9.375 24.56-9.375 33.94 0s9.375 24.56 0 33.94l-303.1 304C36.32 509.7 30.16 512 23.1 512z"
    />
    <path
      d="m483.4 244.2-131.5 42.9h97.74c-9.873 10.62 3.749-3.125-46.24 46.87l-147.6 49.12h98.24c-74.99 73.12-194.6 70.62-246.8 54.1l237.8-238c9.375-9.375 9.375-24.56 0-33.94s-24.56-9.375-33.94 0L72.87 405.2l-.31-.53c-9.24-30.89-29.15-162.9 56.55-248.4l85.74-85.68c90.62-90.62 189.8-88.27 252.3-25.78C517.8 95.34 528.9 169.7 483.4 244.2z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgFeather;
