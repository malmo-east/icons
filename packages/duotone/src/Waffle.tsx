import * as React from "react";
import { SVGProps } from "react";

const SvgWaffle = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path
      className="waffle_svg__fa-primary"
      d="M416 272c8.844 0 16-7.156 16-16s-7.2-16-16-16h-48v-64h48c8.844 0 16-7.156 16-16s-7.2-16-16-16h-48V96c0-8.844-7.156-16-16-16s-16 7.16-16 16v48h-64V96c0-8.844-7.156-16-16-16s-16 7.16-16 16v48h-64V96c0-8.844-7.156-16-16-16s-16 7.16-16 16v48H96c-8.84 0-16 7.2-16 16s7.16 16 16 16h48v64H96c-8.84 0-16 7.2-16 16s7.16 16 16 16h48v64H96c-8.844 0-16 7.156-16 16s7.156 16 16 16h48v48c0 8.844 7.156 16 16 16s16-7.156 16-16v-48h64v48c0 8.844 7.156 16 16 16s16-7.156 16-16v-48h64v48c0 8.844 7.156 16 16 16s16-7.156 16-16v-48h48c8.844 0 16-7.156 16-16s-7.156-16-16-16h-48v-64h48zm-80-96v64h-63.1l-.9-64h64zm-160 0h64l.001 64H176v-64zm0 160v-64h64v64h-64zm160 0h-64l.001-63.1L336 272v64z"
    />
    <path
      d="M176 176v64h64v-64h-64zm96 160h64v-64h-63.1l-.9 64zm-96 0h64l.002-64H176v64zm335.7-110.6C497.76 106.7 405 14.2 286.2.3c-10.49-1.242-21.1 1.08-30.16 6.346C246.9 1.406 236.3-.922 225.8.334 106.1 14.21 14.26 106.8.318 225.4c-1.22 10.55 1.096 21.1 6.36 30.12-5.264 9.08-7.58 19.58-6.36 30.18 14.38 122.6 114.3 217.7 237.7 226.2.882-.8 1.782.1 2.682.1 4.4 0 10.4-1.3 15.3-3.4 4.9 2.1 10 3.4 15.3 3.4.875 0 1.75-.031 2.625-.094 123.4-8.5 223.3-103.6 237.7-226.2 1.221-10.54-1.094-21.08-6.357-30.11C510.6 246.5 512.9 235.1 511.7 225.4zM416 240c8.844 0 16 7.156 16 16s-7.2 16-16 16h-48v64h48c8.844 0 16 7.156 16 16s-7.156 16-16 16h-48v48c0 8.844-7.156 16-16 16s-16-7.156-16-16v-48h-64v48c0 8.844-7.156 16-16 16s-16-7.2-16-16v-48h-64v48c0 8.844-7.156 16-16 16s-16-7.2-16-16v-48H96c-8.844 0-16-7.156-16-16s7.156-16 16-16h48v-64H96c-8.84 0-16-7.2-16-16s7.16-16 16-16h48v-64H96c-8.84 0-16-7.2-16-16s7.16-16 16-16h48V96c0-8.844 7.156-16 16-16s16 7.16 16 16v48h64V96c0-8.844 7.156-16 16-16s16 7.156 16 16v48h64V96c0-8.844 7.156-16 16-16s16 7.156 16 16v48h48c8.844 0 16 7.156 16 16s-7.2 16-16 16h-48v64h48zm-144 0h64v-64h-64v64z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgWaffle;
