import * as React from "react";
import { SVGProps } from "react";

const SvgHouseDay = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path
      className="house-day_svg__fa-primary"
      d="M378.3 104.5a31.956 31.956 0 0 1 43.4 0l208 192c6.7 6.2 9.4 14.7 10.3 23.5 0 17.3-14.5 32-32 32h-32v112c0 26.5-21.5 48-48 48H272c-26.5 0-48-21.5-48-48V352h-32c-17.5 0-32.9-14.7-32-32 0-8.8 3.6-17.3 10.3-23.5l208-192zM368 288c-8.8 0-16 7.2-16 16v64c0 8.8 7.2 16 16 16h64c8.8 0 16-7.2 16-16v-64c0-8.8-7.2-16-16-16h-64z"
    />
    <path
      d="M160.2 0c5.9 0 11.3 3.231 14.1 8.412l27.5 51.198 55.7-16.69c5.7-1.69 11.8-.15 15.9 4.01 4.2 4.16 5.7 10.27 4.1 15.91l-16.7 55.76 35.3 19-64.7 59.7c4.7-10.9 8.7-23.2 8.7-37.2 0-43.3-35.8-79.15-80-79.15S80.07 116.8 80.07 160.1c0 45.1 35.83 80.9 80.03 80.9 10.8 0 21.1-2.1 30.5-6l-57.4 53-14.7-27.1-55.68 16.6c-5.63 1.7-11.74.2-15.9-4-4.17-4.1-5.71-10.2-4.02-15.9l16.69-55.7-51.183-27.6C3.229 171.5 0 165.9 0 160.1c0-5.9 3.229-11.2 8.407-13.9l51.183-27.6L42.9 62.84a16.007 16.007 0 0 1 4.02-15.91 15.99 15.99 0 0 1 15.9-4.01l55.68 16.69 27.6-51.198C148.9 3.231 154.3 0 160.2 0zm-48.1 160.1c0-26.5 21.5-48 48-48s48 21.5 48 48-21.5 48-48 48-48-21.5-48-48z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgHouseDay;
