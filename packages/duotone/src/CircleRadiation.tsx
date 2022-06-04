import * as React from "react";
import { SVGProps } from "react";

const SvgCircleRadiation = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path
      className="circle-radiation_svg__fa-primary"
      d="m226.4 208.6-41.6-66.7c-5.2-8.2-16.5-9.9-24.1-3.7-29.9 24.1-50.6 59.2-55.6 99.2-1.2 9.8 6.1 18.6 15.9 18.6h79c0-20 10.6-37.4 26.4-47.4zm59.2 94.7c-9.5 5.4-18.7 8.7-29.6 8.7-10.89 0-20.98-3.252-29.58-8.65l-41.74 66.8c-5.211 8.338-1.613 19.07 7.27 23.29C211.4 402.7 233.1 408 256 408c22.97 0 44.64-5.334 64.12-14.59 8.883-4.219 12.48-14.95 7.262-23.29L285.6 303.3zm65.8-165.1c-7.604-6.145-18.86-4.518-24.04 3.77l-41.71 66.67C301.4 218.6 312 236 312 256h78.96c9.844 0 17.11-8.791 15.91-18.56-4.97-39.94-25.57-75.04-55.47-99.24z"
    />
    <path
      d="M256 224c-17.7 0-32 14.3-32 32s14.33 32 32 32 32-14.33 32-32-14.3-32-32-32zm0-208C123.4 16 16 123.4 16 256s107.4 240 240 240 240-107.4 240-240S388.6 16 256 16zm0 416c-97.05 0-176-78.99-176-176S158.1 80 256 80s176 78.95 176 176-79 176-176 176z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgCircleRadiation;