import * as React from "react";
import { SVGProps } from "react";

const SvgPeace = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256 256-114.6 256-256S397.4 0 256 0zm240 256c0 53.77-17.99 103.3-47.98 143.4L264 252.1V16.41C392.6 20.68 496 126.4 496 256zM248 16.41v235.7L64 399.31C33.99 359.3 16 309.8 16 256 16 126.4 119.4 20.68 248 16.41zM73.91 411.9 248 272.6v222.9c-69.6-2.2-131.7-34.1-174.09-83.6zM264 495.6V272.7L438.1 412c-42.4 49.4-104.5 81.3-174.1 83.6z" />
  </svg>
);

export default SvgPeace;
