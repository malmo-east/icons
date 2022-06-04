import * as React from "react";
import { SVGProps } from "react";

const SvgGramophone = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path
      className="gramophone_svg__fa-primary"
      d="M384 463.1v32c0 8.875-7.125 16-16 16H16c-8.875 0-16-7.125-16-16v-32c0-8.875 7.125-16 16-16h15.1l.9-32c0-17.63 14.38-32 32-32h255.1c17.62 0 32 14.37 32 32v32h16c9.8 0 16.9 8 16.9 16z"
    />
    <path
      d="M376 269.1c0 45.75-37.13 82.75-82.75 82.75H224v32.14h-64v-56.14c0-13.25 10.75-24 24-24h109.2c19.12 0 34.75-15.5 34.75-34.75 0-12.13-8.125-22.75-19.88-25.88-76.75-20.63-175.7 30.75-238.6 73.88-18.12 12.38-42.5-4.5-36.63-26.13l73.13-273.3C111.8-3.657 141.3-6.528 150.9 13.6c32.13 67.25 92.25 162.5 169.7 183.3 32.7 8.7 55.4 38.3 55.4 72.2z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgGramophone;
