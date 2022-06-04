import * as React from "react";
import { SVGProps } from "react";

const SvgHouseNight = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path
      className="house-night_svg__fa-primary"
      d="M378.3 104.5a31.956 31.956 0 0 1 43.4 0l208 192c9.7 8.9 12.9 22.9 8.1 35.2C633 343.9 621.2 352 608 352h-32v112c0 26.5-21.5 48-48 48H272c-26.5 0-48-21.5-48-48V352h-32c-13.2 0-25.9-8.1-29.8-20.3-4.8-12.3-1.6-26.3 8.1-35.2l208-192zM368 288c-8.8 0-16 7.2-16 16v64c0 8.8 7.2 16 16 16h64c8.8 0 16-7.2 16-16v-64c0-8.8-7.2-16-16-16h-64z"
    />
    <path
      d="M88 88c0 48.6 39.4 88 88 88 3 0 6-.2 8.1-.4 8.5-.8 14.7 7.6 9.4 13.2-20.4 21.7-49.4 35.2-81.5 35.2C50.14 224 0 173.9 0 112 0 50.14 50.14 0 112 0c3.7 0 7.4.18 11 .533 7.6.742 8.5 11.177 2.2 15.587C102.7 32.06 88 58.31 88 88zm160.5-75.72c2.6-6.968 12.4-6.968 15 0l11.9 32.27 32.3 11.95c7 2.57 7 12.43 0 15l-32.3 11.95-11.9 32.25c-2.6 7-12.4 7-15 0l-11.9-32.25-32.3-11.95c-7-2.57-7-12.43 0-15l32.3-11.95 11.9-32.27zM88.5 332.3c2.57-7 12.4-7 15 0l11.9 32.3 32.3 11.9c7 2.6 7 12.4 0 15l-32.3 11.9-11.9 32.3c-2.6 7-12.43 7-15 0l-11.95-32.3-32.27-11.9c-6.97-2.6-6.97-12.4 0-15l32.27-11.9 11.95-32.3z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgHouseNight;
