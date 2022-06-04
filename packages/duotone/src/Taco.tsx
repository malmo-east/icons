import * as React from "react";
import { SVGProps } from "react";

const SvgTaco = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path
      className="taco_svg__fa-primary"
      d="M7.32 279.4c-5.125-17.3-11.002-37-4.125-55.2 7.125-19.1 24.755-29.3 40.255-38.5 9.5-5.5 19.38-11.25 23.75-17.5 4.75-6.75 7.251-18.5 9.751-30 4-18.13 8.457-38.67 23.58-50.67 15.75-12.5 36.05-11.08 54.05-9.829 10.88.75 22 1.5 29.25-1 6.877-2.5 15.13-10.25 23-17.5 47.75-44.5 69.38-27.12 98.39 0 7.875 7.375 16 15 23 17.5 7.127 2.625 18.38 1.875 29.13 1.125 18-1.25 38.42-2.671 54.05 9.704 15.25 12.12 19.71 32.67 23.59 50.67 2.5 11.5 5.125 23.38 9.876 30 4.375 6.25 14.25 12 23.75 17.63 15.5 9 33.13 19.38 40.25 38.38 6.875 18.12.937 37.87-4.188 55.13 0 .125 0 0 0 0-2.012 7.445-16.32 43.52-22.12 62.35-43.87-89.25-128.9-149.7-226.6-149.7-97.64 0-182.7 60.46-226.6 149.7C23.58 322.8 9.33 286.7 7.32 279.4c-.125-.2-.125 0 0 0z"
    />
    <path
      d="M255.1 191.1C125 191.1 17.2 298.5-.6 438.2-2.432 460.6 12.94 480 32.45 480h447c19.5 0 35-19.38 32.13-40.88C493.9 299.4 386.1 191.1 255.1 191.1zm-144 224c-8.875 0-15.1-7.127-15.1-16s7.122-15.1 15.1-15.1 16 7.124 16 15.1-6.2 16-16 16zm64-64c-8.875 0-15.1-7.127-15.1-16s7.1-16 15.1-16 16 7.122 16 15.1-6.2 16.9-16 16.9z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgTaco;