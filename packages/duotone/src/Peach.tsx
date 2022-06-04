import * as React from "react";
import { SVGProps } from "react";

const SvgPeach = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path
      className="peach_svg__fa-primary"
      d="M146.6 81.81c21.07-2.574 60.48-4.828 104.8 13.89 31.46-8.309 63.25-20.09 113.1-13.89C386.3 67.38 400 43.32 400 16V0h-63.1c-44.18 0-79.1 35.82-79.1 80C256 35.82 204.2 0 160 0h-48v16c0 27.32 13.7 51.38 34.6 65.81z"
    />
    <path
      d="M512 272c0 154.6-241.7 235.5-256 240 0 0-256-74.94-256-240 0-88.36 77.6-159.1 173.3-160 82.1 0 157.3 60.38 157.3 144 0 8.844 7.156 16 16 16s16-7.156 16-16c0-55.72-28.08-105.4-71.69-137.7 15.29-4 31.19-6.3 47.79-6.3 95.7 0 173.3 71.6 173.3 160z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgPeach;
