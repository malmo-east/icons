import * as React from "react";
import { SVGProps } from "react";

const SvgCircleAmpersand = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="m322.9 325.9 42.51-60.1c2.562-3.609 1.688-8.609-1.906-11.16a7.984 7.984 0 0 0-11.16 1.906l-40.62 57.43L243.3 241.1l36.91-29.75c11.47-8.938 18.06-22.25 18.06-36.52C298.3 149 276.6 128 249.1 128h-21.4c-26.6 0-48.3 21-48.3 46.8 0 14.03 5.375 27.44 15.12 37.7l25.28 26.94-52.5 42.36c-14.09 10.94-22.16 27.25-22.16 44.77C145.2 358.2 171.8 384 204.4 384h38.88c24.09 0 46.63-11.48 60.22-30.72l9.902-14 39.57 42.19c3.094 3.25 8.125 3.391 11.31.36 3.219-3.017 3.375-8.079.375-11.3L322.9 325.9zM206.2 201.6c-6.9-7.3-10.8-16.8-10.8-26.8 0-17 14.5-30.8 32.3-30.8h22.28c17.81 0 32.28 13.84 32.28 30.84 0 9.297-4.344 18.02-12 23.97l-37.97 30.61-26.09-27.82zM290.5 344c-10.6 15-28.3 24-47.2 24h-38.9c-23.88 0-43.28-18.58-43.28-41.42 0-12.53 5.812-24.25 16.09-32.22l53.56-43.17 71.45 76.18L290.5 344zM256 0C114.6 0 0 114.6 0 256s114.6 256 256 256 256-114.6 256-256S397.4 0 256 0zm0 496C123.7 496 16 388.3 16 256S123.7 16 256 16s240 107.7 240 240-107.7 240-240 240z" />
  </svg>
);

export default SvgCircleAmpersand;