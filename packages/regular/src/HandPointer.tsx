import * as React from "react";
import { SVGProps } from "react";

const SvgHandPointer = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M208 288c-8.8 0-16 7.2-16 16v96c0 8.8 7.2 16 16 16s16-7.164 16-16v-96c0-8.8-7.2-16-16-16zm64 0c-8.8 0-16 7.2-16 16v96c0 8.836 7.162 16 15.1 16s16.9-7.2 16.9-16l-.001-96c-.899-8.8-7.199-16-15.999-16zm104.9-86.8c-13.74-17.12-34.8-27.45-56.92-27.45h-13.72c-3.713 0-7.412.291-11.07.865C282.7 165.1 267.4 160 251.4 160h-11.44V72c0-39.7-32.31-72-72.01-72S95.97 32.3 95.97 72v168.5c-11.12-5.4-20.78-5.1-26.14-5.1C25.48 235.4 0 272.63 0 305.25c0 14.99 4.821 29.51 13.99 41.69l78.14 104.2C120.7 489.3 166.2 512 213.7 512h109.7c6.309 0 12.83-.957 18.14-2.645 28.59-5.447 53.87-19.41 73.17-40.44C436.1 446.3 448 416.2 448 384.2V274.3c0-39.7-31.7-72-71.1-73.1zm23.1 183c0 19.62-7.219 38.06-20.44 52.06-12.53 13.66-29.03 22.67-49.69 26.56-2.47.78-4.57 1.18-6.47 1.18H213.7c-32.56 0-63.65-15.55-83.18-41.59L52.36 318.2c-2.84-3.8-4.34-8.4-4.34-13 0-16.32 14.5-21.75 21.72-21.75 4.454 0 12.01 1.55 17.34 8.703l28.12 37.5c3.093 4.105 7.865 6.419 12.8 6.419 11.94 0 16.01-10.7 16.01-16.01V72c0-13.23 10.78-24 23.1-24 13.22 0 24 10.77 24 24v130.7c0 6.938 5.451 16.01 16.03 16.01C219.5 218.7 220.1 208 237.7 208h13.72c21.5 0 18.56 19.21 34.7 19.21 8.063 0 9.805-5.487 20.15-5.487h13.72c26.96 0 17.37 27.43 40.77 27.43l14.07-.004c13.88 0 25.16 11.28 25.16 25.14V384.2zM336 288c-8.8 0-16 7.2-16 16v96c0 8.836 7.164 16 16 16s16-7.164 16-16v-96c0-8.8-7.2-16-16-16z" />
  </svg>
);

export default SvgHandPointer;