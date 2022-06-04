import * as React from "react";
import { SVGProps } from "react";

const SvgPoop = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path
      className="poop_svg__fa-primary"
      d="M393.9 240c26.65-23.03 29.62-63.29 6.586-89.93C388.3 135.1 370.6 127.9 351.1 128h-5.879c5.898-16.25 7.366-33.76 4.323-50.78-9.375-51.14-58.4-85.04-109.6-75.7 25.78 35.74 17.67 85.63-18.08 111.4C209.1 122.8 192.8 128 175.9 128h-16c-35.22-.17-63.98 28.24-64.15 63.45-.06 18.65 8.15 36.35 21.35 48.55h276.8zm57.5 129.1.393-.299a71.2 71.2 0 0 0-10.8-.84H70.84a70.83 70.83 0 0 0-10.76.84c.139.11.332.208.482.308-39.2 6.297-65.94 43.19-59.64 82.38C6.518 486.4 36.64 511.1 71.92 512h368.1c39.68.1 71.88-32.2 71.98-71.9.1-35.4-25.7-65.4-60.6-71z"
    />
    <path
      d="M479.1 311v2c.02 21.89-10.07 42.55-27.35 55.1a71.227 71.227 0 0 0-11.66-1H70.84c-3.909.013-7.81.347-11.66 1-17.27-13.45-27.37-34.11-27.35-55.1v-2c0-39.21 31.8-70.1 71.02-70.1h306.1c39.25-.9 70.15 30.9 70.15 70.1z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgPoop;