import * as React from "react";
import { SVGProps } from "react";

const SvgPuzzlePiece = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M425 182c-3.027 0-6.031.176-9 .52V170c0-43.6-43.2-74-82.9-74h-4.519c.346-2.969.52-5.973.52-9 0-48.79-43.92-87-100-87-56.07 0-100 38.21-100 87 0 3.027.175 6.031.521 9h-56.52C33.2 96 0 129.2 0 170v66.21C0 253.8 6.77 269.9 17.85 282 6.77 294.1 0 310.2 0 327.8V438c0 40.8 33.2 74 73.1 74h110.2c17.63 0 33.72-6.77 45.79-17.85C242.1 505.2 258.2 512 275.8 512h58.21c38.79 0 81.99-30.4 81.99-74v-56.52a78.23 78.23 0 0 0 9 .52c48.8 0 87-43.9 87-100s-38.2-100-87-100zm0 152c-26.35 0-25.77-26-45.21-26-10.89 0-11.79 8.9-11.79 19.8V438c0 14.36-19.64 26-34 26h-58.21c-10.89 0-19.79-8.9-19.79-19.8 0-19.25 25.1-18.88 25.1-45.21 0-21.54-23.28-39-52-39s-52 17.46-52 39c0 26.35 26 25.77 26 45.21.9 10.9-8 19.8-18.9 19.8H73.1C59.64 464 48 452.4 48 438V327.8c0-10.9 8.86-19.8 19.79-19.8 19.25 0 18.88 26 45.21 26 21.54 0 39-23.28 39-52s-17.46-52-39-52c-26.35 0-25.77 26-45.21 26C56.86 256 48 247.1 48 236.2V170c0-14.4 11.64-26 25.1-26h110.2c11.8 0 20.7-.9 20.7-11.8 0-19.25-26-18.88-26-45.21 0-21.54 23.28-39 52-39s52 17.46 52 39c-.9 26.41-26 25.81-26 45.21 0 10.9 8.9 11.8 19.8 11.8h58.21c14.39 0 33.99 11.6 33.99 26v66.21c0 10.89.9 19.79 11.8 19.79 19.25 0 18.88-26 45.21-26 21.54 0 39 23.28 39 52S446.5 334 425 334z" />
  </svg>
);

export default SvgPuzzlePiece;