import * as React from "react";
import { SVGProps } from "react";

const SvgStomach = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path
      className="stomach_svg__fa-primary"
      d="M384 95.1c-17.3 0-76.2 4.9-110.9 64.9a127.518 127.518 0 0 0-16.5 51.31c-.5 5.69-.6 10.79-.6 11.79v63.1c0 35.35-28.65 63.1-64 63.1h-64c-70.69 0-128 57.31-128 128v15.1c0 8.836 7.164 15.1 15.1 15.1l32.9 3.6c8.836 0 16-7.163 16-15.1v-15.1c0-37.63 33.97-51.24 53.89-51.24 17.11 0 29.63 6.743 41.11 18.23 63.07 63.07 129.8 65 146.7 65l2.694-.004C420.9 512 512 420.8 512 308.4v-85.3c0-69.8-57.3-128-128-128zM448 307c0 37.73-14.65 74.18-41.48 100.7-39.44 39-94.33 48-137.7 34.41a144.589 144.589 0 0 1-28.73-12.61c-6.293-3.545-8.526-11.51-4.981-17.8a13.047 13.047 0 0 1 6.486-5.695C277.7 390.8 320 350.4 320 287.1V224c.83-21.86 20.15-64 64-64 35.33.04 63.96 28.67 64 63.1V307z"
    />
    <path
      d="m273.1 160-17.1-.9c-35.35 0-64-28.65-64-63.1V15.1C192 7.164 184.8 0 176 0h-32c-8.8 0-16 7.164-16 15.1v80c0 70.69 57.31 128 128 128-.9-21.6 5.9-43.7 17.1-63.1zM384 319.1c-17.27-17.27-42.62-22.06-65.21-14.06-7.129 52.25-44.66 86.39-77.19 100.1-6.682 2.744-9.877 10.39-7.133 17.08a13.098 13.098 0 0 0 5.628 6.417 144.524 144.524 0 0 0 28.73 12.61c43.37 13.59 98.26 4.59 137.7-34.41a140.24 140.24 0 0 0 38.71-72.41C423.7 341.3 400.3 336.2 384 319.1z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgStomach;
