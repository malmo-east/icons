import * as React from "react";
import { SVGProps } from "react";

const SvgCircleStar = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="m306.6 186.4 81 11.7c6.1.9 11.1 5.1 13 10.9 1.8 5.8.3 12.2-4.1 16.4l-58.6 57.2 13.8 80.7c1 6-1.4 12.1-6.4 14.8-4.9 4.5-11.4 4.9-16.8 2.1L256 342.1l-72.5 38.1c-5.4 2.8-11.9 2.4-16.8-2.1-5-2.7-7.4-8.8-6.4-14.8l13.8-80.7-58.6-57.2c-4.4-4.2-5.9-10.6-4.1-16.4 1.9-5.8 6.9-10 13-10.9l81-11.7 36.3-73.5c2.6-5.4 8.2-8.9 14.3-8.9 6.1 0 11.7 3.5 14.3 8.9l36.3 73.5zm-88.3 30.4-57.3 8.3 41.5 40.5c3.8 3.6 4.6 8.9 4.6 14.1l-9.8 57.1 51.3-27c4.6-2.4 10.2-2.4 14.8 0l51.3 27-9.8-57.1c-.9-5.2.8-10.5 4.6-14.1l40.6-40.5-56.4-8.3c-5.2-.7-10.6-4-12.1-8.7l-26.5-51.9-24.7 51.9c-2.4 4.7-6.9 8-12.1 8.7zM512 256c0 141.4-114.6 256-256 256S0 397.4 0 256 114.6 0 256 0s256 114.6 256 256zM256 32C132.3 32 32 132.3 32 256s100.3 224 224 224 224-100.3 224-224S379.7 32 256 32z" />
  </svg>
);

export default SvgCircleStar;