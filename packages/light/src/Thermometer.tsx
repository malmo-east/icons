import * as React from "react";
import { SVGProps } from "react";

const SvgThermometer = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M476.7 20.35C460 6.696 439.2 0 418.1 0c-26.28.002-53.08 10.36-73.25 30.6L114.6 262.5c-11.9 12-18.58 28.2-18.58 45.1l-.015 85.81-91.32 91.32c-6.25 6.25-6.25 16.38 0 22.62C7.813 510.4 11.91 512 16 512s8.188-1.562 11.31-4.688L118.6 416l84.7-.021c16.93 0 33.16-6.712 45.16-18.67l235.5-234.7C518.9 127.8 526.2 61.11 476.7 20.35zM461.4 139.1 225.9 374.7c-6 6-14.1 9.3-22.6 9.3H128l.016-76.42c0-8.508 3.3-16.52 9.297-22.56l30.44-30.65 28.92 28.98c3.127 3.15 7.227 4.75 10.427 4.75s8.187-1.563 11.31-4.688c6.25-6.25 6.25-16.38 0-22.63L190.3 231.7l41.23-41.52 29.14 29.2c3.125 3.125 7.218 4.688 11.31 4.688s8.187-1.563 11.31-4.688c6.25-6.25 6.25-16.38 0-22.63L254.1 167.5l41.23-41.52 29.36 29.41c3.125 3.125 7.218 4.688 11.31 4.688s8.187-1.563 11.31-4.688c6.25-6.25 6.25-16.38 0-22.63l-29.43-29.48 49.69-50.04C380.1 39.72 399.4 32 418.1 32c14.59 0 27.85 4.541 38.27 13.05 18.36 15.12 22.93 33.08 23.53 45.48.9 18.17-6.2 37.17-18.5 48.57z" />
  </svg>
);

export default SvgThermometer;
