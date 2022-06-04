import * as React from "react";
import { SVGProps } from "react";

const SvgMinimize = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path
      className="minimize_svg__fa-primary"
      d="M204.3 34.44c-12-4.97-25.8-2.22-34.9 6.94l-30.1 30.06L77.25 9.374c-12.5-12.5-32.76-12.5-45.26 0L9.36 32.004c-12.49 12.5-12.49 32.75.002 45.25l62.07 62.06L41.38 169.4C35.25 175.5 32 183.7 32 192c0 4.125.797 8.281 2.438 12.25A32.017 32.017 0 0 0 64 224h135.1c13.25 0 23.1-10.74 23.1-23.1V64c1.8-12.94-6-24.62-17.9-29.56zM502.6 434.8l-62.06-62.06 30.06-30.06c9.141-9.156 11.84-22.87 6.938-34.87a31.974 31.974 0 0 0-29.56-19.75h-135.1c-13.26 0-23.1 10.74-23.1 23.1v135.1c0 12.94 7.797 24.62 19.75 29.56a31.953 31.953 0 0 0 34.87-6.937l30.06-30.06 62.06 62.06c12.5 12.5 32.76 12.5 45.26 0l22.62-22.62C515.1 467.5 515.1 447.3 502.6 434.8z"
    />
    <path
      d="M200 287.1H64c-12.94 0-24.62 7.797-29.56 19.75a31.953 31.953 0 0 0 6.937 34.87l30.06 30.06-62.06 62.07c-12.49 12.5-12.5 32.75-.001 45.25l22.62 22.62c12.5 12.5 32.76 12.5 45.26.001l62.06-62.07 30.06 30.06a31.986 31.986 0 0 0 34.87 6.938 31.974 31.974 0 0 0 19.75-29.56V311.1c.004-12.4-10.696-24-23.996-24zM312 224h135.1c12.94 0 24.62-7.797 29.56-19.75a31.953 31.953 0 0 0-6.937-34.87l-30.06-30.06 62.06-62.07c12.5-12.5 12.5-32.76 0-45.26l-22.62-22.62c-12.5-12.5-32.76-12.5-45.26 0l-62.06 62.07-30.06-30.06c-9.156-9.141-22.87-11.84-34.87-6.937C295.8 39.39 288 51.06 288 64v135.1c0 14.2 10.7 24.9 24 24.9z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgMinimize;