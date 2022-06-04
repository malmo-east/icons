import * as React from "react";
import { SVGProps } from "react";

const SvgMandolin = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path
      className="mandolin_svg__fa-primary"
      d="m509.5 70.52-40.01 63.99c-4.39 6.89-11.19 11.99-19.09 13.99l-56.12 14.49-99.64 99.63-45.24-45.22 99.64-99.63 14.5-56.1c2-8 7-14.75 14-19.12l64-40.11c6.375-3.875 14.51-2.998 19.76 2.252l46 46c5.3 5.338 6.2 13.458 2.2 19.828z"
    />
    <path
      d="m294.6 262.6-45.2-45.2 25.13-25.13C90.39 190.6 46.01 240.1 30.76 256.2c-46.88 46.87-39.5 150.4 17.5 207.5 57.13 57.12 160.6 64.37 207.5 17.5 15.25-15.25 65.64-59.64 64.01-243.7l-25.17 25.1zM208 351.1c-26.5 0-48-21.49-48-47.99 0-26.49 21.5-47.99 48-47.99s48 21.5 48 47.99c0 27.39-21.5 47.99-48 47.99z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgMandolin;
