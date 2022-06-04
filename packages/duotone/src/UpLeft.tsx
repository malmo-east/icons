import * as React from "react";
import { SVGProps } from "react";

const SvgUpLeft = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path
      className="up-left_svg__fa-primary"
      d="M70.62 360.9a32.005 32.005 0 0 1-34.87 6.938C23.79 362.9 16 351.2 16 338.3V112a31.91 31.91 0 0 1 9.369-22.63C31.16 83.58 39.16 80 47.1 80h226.3c12.95 0 24.61 7.789 29.57 19.75a32.012 32.012 0 0 1-6.939 34.87L70.62 360.9z"
    />
    <path
      d="m358.6 377.4-45.26 45.25c-12.5 12.5-32.76 12.5-45.25 0L138.5 293l90.51-90.51 129.6 129.6c12.49 12.51 12.49 32.81-.01 45.31z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgUpLeft;
