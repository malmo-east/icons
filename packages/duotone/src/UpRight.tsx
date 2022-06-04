import * as React from "react";
import { SVGProps } from "react";

const SvgUpRight = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path
      className="up-right_svg__fa-primary"
      d="M87.1 134.6a32.005 32.005 0 0 1-6.938-34.87C85.12 87.79 96.78 80 109.7 80H336a31.91 31.91 0 0 1 22.63 9.369c5.789 5.791 9.371 13.79 9.371 22.63L368 338.3c0 12.95-7.789 24.61-19.75 29.57a32.012 32.012 0 0 1-34.87-6.939L87.1 134.6z"
    />
    <path
      d="m70.63 422.6-45.25-45.26c-12.5-12.5-12.5-32.76 0-45.25l129.6-129.6L245.49 293l-129.6 129.6c-12.49 12.5-32.76 12.5-45.26 0z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgUpRight;
