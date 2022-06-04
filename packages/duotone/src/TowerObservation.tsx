import * as React from "react";
import { SVGProps } from "react";

const SvgTowerObservation = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path
      className="tower-observation_svg__fa-primary"
      d="M430.3 83.38c15.8 7.9 22.2 27.12 14.3 42.92-5.6 11.2-16.9 16.8-28.6 17.7v80c0 17.7-14.3 32-32 32H127.1c-16.8 0-32-14.3-32-32v-80c-10.83-.9-22.12-6.5-27.72-17.7-7.91-15.8-1.5-35.02 14.31-42.92L241.7 3.378c9-4.504 19.6-4.504 28.6 0l160 80.002zM176 160h160c8.8 0 16-7.2 16-16s-7.2-16-16-16H176c-8.8 0-16 7.2-16 16s7.2 16 16 16zm336 320c0 17.7-14.3 32-32 32H32c-17.67 0-32-14.3-32-32s14.33-32 32-32h448c17.7 0 32 14.3 32 32z"
    />
    <path
      d="m100.9 448 32-192h64.9l-4.7 28.3 62 52.5 63.8-52.5-4.7-28.3h64.9l32 192h-96.6l-59.4-48.8-57.6 48.8h-96.6zm83-108.8-11.1 66.9 45.7-38.1-34.6-28.8zM293.5 368l45.7 38.1-11.1-66.9-34.6 28.8zM128.6 512h-1.1 1.1zm255.9 0h-1.1 1.1z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgTowerObservation;
