import * as React from "react";
import { SVGProps } from "react";

const SvgFerrisWheel = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path
      className="ferris-wheel_svg__fa-primary"
      d="M302.7 36.88c27.7 5.87 53.5 16.85 76.4 31.92 6.3-3.08 13.4-4.8 20.9-4.8 26.5 0 48 21.49 48 48 0 7.5-1.7 14.6-4.8 20.9 15.1 22.9 26.1 48.7 31.9 76.4 21.2 5 36.9 24 36.9 46.7 0 22.7-15.7 41.7-36.9 46.7-5.8 27.7-16.8 53.5-31.9 76.4 3.1 6.3 4.8 13.4 4.8 20.9 0 25.6-20 46.4-45.1 47.9l-38.6-80c4.6-5.1 10.3-9.2 15.8-12 18.1-21.5 29.8-47.4 34.1-75.9h-81.9c2.4-7.6 3.7-15.6 3.7-24s-1.3-16.4-3.7-24h81.9c-3.9-26.3-14.3-50.4-29.4-70.9l-57.9 57c-7.5-13.6-19.4-25.5-33.9-33l57.9-57.9c-20.5-15.1-44.6-25.5-70.9-29.41v81.91c-7.6-2.4-15.6-3.7-24-3.7s-16.4 1.3-24 3.7V97.79c-26.3 3.91-50.4 14.31-70.9 29.41l57 57.9c-13.6 7.5-25.5 19.4-33 33l-57.9-57c-15.1 20.5-25.5 44.6-29.41 70.9h81.91c-2.4 7.6-3.7 15.6-3.7 24s1.3 16.4 3.7 24H97.79c4.31 28.5 16.01 54.4 33.21 75.9 6.4 2.8 12.1 6.9 16.7 12l-38.6 80C83.97 446.4 64 425.6 64 400c0-7.5 1.72-14.6 4.8-20.9-15.07-22.9-26.05-48.7-31.92-76.4C15.73 297.7 0 278.7 0 256c0-22.7 15.73-41.7 36.88-46.7 5.87-27.7 16.85-53.5 31.92-76.4-3.08-6.3-4.8-13.4-4.8-20.9 0-26.51 21.49-48 48-48 7.5 0 14.6 1.72 20.9 4.8 22.9-15.07 48.7-26.05 76.4-31.92C214.3 15.73 233.3 0 256 0c22.7 0 41.7 15.73 46.7 36.88z"
    />
    <path
      d="M381.8 477.9c3.4 7.4 2.8 16.1-1.6 23-4.4 6.9-12 11.1-20.2 11.1H152c-8.2 0-15.8-4.2-20.2-11.1-4.4-6.9-5-15.6-1.6-23L219 286.6c-6.9-8.3-11-19-11-30.6 0-26.5 21.5-48 48-48s48 21.5 48 48c0 11.6-4.1 22.3-11.9 30.6l89.7 191.3z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgFerrisWheel;
