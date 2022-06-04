import * as React from "react";
import { SVGProps } from "react";

const SvgTrailer = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path
      className="trailer_svg__fa-primary"
      d="M496 32c26.5 0 48 21.49 48 48v240h64c17.7 0 32 14.3 32 32s-14.3 32-32 32H286.9c-7.8-54.3-54.5-96-110.9-96-56.4 0-103.1 41.7-110.87 96H48c-26.51 0-48-21.5-48-48V80c0-26.51 21.49-48 48-48h448zM64 112v152.2c9.83-8.1 20.55-15.2 32-21V112c0-8.8-7.16-16-16-16s-16 7.2-16 16zm112 112c5.4 0 10.7.2 16 .7V112c0-8.8-7.2-16-16-16s-16 7.2-16 16v112.7c5.3-.5 10.6-.7 16-.7zm80 19.2c11.4 5.8 22.2 12.9 32 21V112c0-8.8-7.2-16-16-16s-16 7.2-16 16v131.2zM352 112v192c0 8.8 7.2 16 16 16s16-7.2 16-16V112c0-8.8-7.2-16-16-16s-16 7.2-16 16zm128 0c0-8.8-7.2-16-16-16s-16 7.2-16 16v192c0 8.8 7.2 16 16 16s16-7.2 16-16V112z"
    />
    <path
      d="M80 96c8.84 0 16 7.2 16 16v131.2c-11.45 5.8-22.17 12.9-32 21V112c0-8.8 7.16-16 16-16zm80 128.7V112c0-8.8 7.2-16 16-16s16 7.2 16 16v112.7c-5.3-.5-10.6-.7-16-.7s-10.7.2-16 .7zM256 112c0-8.8 7.2-16 16-16s16 7.2 16 16v152.2c-9.8-8.1-20.6-15.2-32-21V112zm112-16c8.8 0 16 7.2 16 16v192c0 8.8-7.2 16-16 16s-16-7.2-16-16V112c0-8.8 7.2-16 16-16zm112 208c0 8.8-7.2 16-16 16s-16-7.2-16-16V112c0-8.8 7.2-16 16-16s16 7.2 16 16v192zM96 400c0-44.2 35.8-80 80-80s80 35.8 80 80-35.8 80-80 80-80-35.8-80-80z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgTrailer;