import * as React from "react";
import { SVGProps } from "react";

const SvgMountainSun = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M640 80c0 44.2-35.8 80-80 80s-80-35.8-80-80c0-44.18 35.8-80 80-80s80 35.82 80 80zM412.7 281.7l48.2-79c3.2-6.6 11.3-10.7 19.1-10.7 7.8 0 15 4.1 19.1 10.7l132 216.4c5.8 9.5 8.9 20.6 8.9 31.8 0 33.7-27.4 61.1-61.1 61.1H55.91C25.03 512 0 486.1 0 456.1c0-10.5 2.964-20.8 8.551-29.7L225.3 81.01C231.9 70.42 243.5 64 256 64s24.1 6.42 30.8 17.01L412.7 281.7zm28.5 45.5 62.2 99.2c5.6 8.9 8.6 19.2 8.6 29.7 0 2.7-.2 5.3-.6 7.9h67.5c7.2 0 13.1-5.9 13.1-13.1 0-2.4-.7-4.8-1.9-6.8L480 263.6l-38.8 63.6zM464 456.1c0-1.5-.4-3-1.2-4.2L256 122.3 49.21 451.9c-.79 1.2-1.21 2.7-1.21 4.2 0 4.4 3.54 7.9 7.91 7.9H456.1c4.4 0 7.9-3.5 7.9-7.9z" />
  </svg>
);

export default SvgMountainSun;
