import * as React from "react";
import { SVGProps } from "react";

const SvgCircleBookOpen = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path
      className="circle-book-open_svg__fa-primary"
      d="M375.2 172.8c-21.23-8.65-41.63-12.94-59.14-12.79-19.96.29-34.16 4.89-44.06 8.09v183c11.81-6.961 50.9-25.71 101.4-3.73 5 3.03 10.6-.47 10.6-5.47V185.6c0-5.5-3.4-11.5-8.8-12.8zm-238.4 0c-5.4 2.2-8.8 7.3-8.8 12.7v156.3c0 5.047 5.643 8.545 10.56 6.405C189.1 326.3 228.2 345 240 352V168.1c-9.9-3.2-25-7.8-44.1-8.1-17.6-.3-38.8 4.1-59.1 12.8z"
    />
    <path
      d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256 256-114.6 256-256S397.4 0 256 0zm-16 352c-11.81-6.959-50.92-25.71-101.4-3.734-5 2.134-10.6-1.366-10.6-6.366V185.5c0-5.455 3.379-10.54 8.752-12.74 21.22-8.676 41.57-13.11 59.14-12.79C215 160.3 230.1 164.9 240 168.1V352zm144-10.1c0 5.047-5.643 8.545-10.56 6.405C322.9 326.3 283.8 345 272 351.1v-183c9.902-4.061 24.99-8.614 44.1-8.935 17.5-.154 37.91 4.137 59.14 12.79C380.6 174.1 384 180.1 384 185.6v156.3z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgCircleBookOpen;
