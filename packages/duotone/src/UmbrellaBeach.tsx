import * as React from "react";
import { SVGProps } from "react";

const SvgUmbrellaBeach = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path
      className="umbrella-beach_svg__fa-primary"
      d="M528 448H48c-26.51 0-48 21.5-48 48 0 8.8 7.164 16 16 16h544c8.838 0 16-7.164 16-15.1 0-27.4-21.5-48.9-48-48.9zM247.6 185l238.5 86.87c35.75-121.4 18.62-231.6-42.63-253.9-7.375-2.625-15.12-4.062-23.12-4.062C362.4 13.88 292.1 83.13 247.6 185zm-132.2-48.2 102.1 37.35c35.13-81.62 86.25-144.4 139-173.7-95.88-4.875-188.8 36.96-248.5 111.7-6.8 8.45-2.8 21.05 7.4 24.65zm406.1-76.29c6.25 16.25 10.75 34.62 13.13 55.25 5.75 49.87-1.375 108.1-18.88 166.9l102.6 37.37c10.12 3.75 21.25-3.375 21.5-14.12C642.3 210.1 598 118.4 521.5 60.51z"
    />
    <path
      d="M396.4 239.2 321.06 448H253l83.22-230.7 60.18 21.9z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgUmbrellaBeach;