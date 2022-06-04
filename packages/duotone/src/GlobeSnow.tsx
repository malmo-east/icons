import * as React from "react";
import { SVGProps } from "react";

const SvgGlobeSnow = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path
      className="globe-snow_svg__fa-primary"
      d="M384 415.1H64l-47.38 71.12c-7.125 10.63.5 24.87 13.25 24.87h388.3c12.75 0 20.38-14.25 13.25-24.87L384 415.1zm-192-32v-32h-57.9c-14.25 0-22-15-12.88-24.87L186.8 256h-30.1c-10.75 0-16.5-11.25-9.75-18.75l67.37-73.12c5-5.5 14.38-5.5 19.38 0l67.38 73.12c6.72 7.55.92 18.75-9.78 18.75h-30.03l65.5 71.12c9 9.875 1.25 24.87-13 24.87h-57.75v32H192z"
    />
    <path
      d="M224 0C100.3 0 .9 100.3.9 223.1c0 62.87 26.12 119.4 67.88 159.1h124.1v-32H134.1c-14.25 0-22-15-12.88-24.87L186.8 256h-30.1c-10.75 0-16.5-11.25-9.75-18.75l67.37-73.12c5-5.5 14.38-5.5 19.38 0l67.38 73.12c6.72 7.55.92 18.75-9.78 18.75h-30.03l65.5 71.12c9 9.875 1.25 24.87-13 24.87h-57.75v32h124.1c41.63-40.62 67.88-97.13 67.88-159.1C448 100.3 347.8 0 224 0zM80 256c-8.75 0-16-7.25-16-15.1 0-8.75 7.25-16 16-16s16 7.25 16 16c0 7.9-7.25 15.1-16 15.1zM240 96c-8.75 0-16-7.25-16-15.1s7.25-15.1 16-15.1 16 7.25 16 15.1S248.8 96 240 96zm96 96c-8.75 0-16-7.25-16-15.1s7.25-16 16-16 16 7.25 16 16-7.2 15.1-16 15.1z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgGlobeSnow;