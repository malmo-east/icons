import * as React from "react";
import { SVGProps } from "react";

const SvgCactus = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M240 130c-8.875 0-16 7.125-16 16 0 8.75 7.125 16 16 16s16-7.25 16-16c0-8.9-7.1-16-16-16zm32 224c-8.875 0-16 7.125-16 16 0 8.75 7.125 16 16 16s16-7.25 16-16c0-8.9-7.1-16-16-16zm192-130c-26.5 0-48 21.5-48 47.1v63.1c0 8.875-7.125 15.1-16 15.1h-48V101.4c0-52-38.88-98.5-90.88-101.2-1.72-.195-3.32-.2-5.02-.2-53 0-96.1 43-96.1 96v127.1l-48 .9c-8.875 0-16-7.125-16-15.1V144c0-26.5-21.5-47.1-48-47.1S0 117.5 0 144v63.1c0 61.88 50.12 111.1 112 111.1h48v159.1c0 20.3 14.4 34.7 32 34.7h128c17.62 0 32-14.37 32-31.1v-31.1h48c61.88 0 112-50.12 112-111.1V272c0-26.5-21.5-48-48-48zM304 464h-96V96c0-26.5 21.5-48 48-48l2.625.125C283.6 49.38 304 73.38 304 101.4V464z" />
  </svg>
);

export default SvgCactus;
