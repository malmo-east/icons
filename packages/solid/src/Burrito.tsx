import * as React from "react";
import { SVGProps } from "react";

const SvgBurrito = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M307.2 230.4C278.32 310.53 201.6 368 111.6 368 72.22 368 33.85 356.75.7 335.75c-3.75 33.75 6.875 68.88 32.75 94.76l47.5 47.51c45.38 45.26 119 45.26 164.4.002l215.9-215.8c-31.13-24.75-69.63-38.25-109.4-38.25-15.25.028-30.15 2.528-44.65 6.428zM287.8 160c0-39.75-13.57-78.27-38.45-109.3L33.36 266.5c-10.38 10.4-18.63 22.8-24.378 36.4 29.88 21.5 65.75 33.13 102.6 33.13C208.7 336 287.8 257 287.8 160zm223.3-37c0-32.5-21.25-61.13-52.25-70.76-6.375-20.38-21.05-37-40.55-45.75a73.97 73.97 0 0 0-61.13.25C347.9 2.276 336.9 0 325.8 0c-22 0-42.03 9.376-56.78 24.25 41 46.76 58.5 109.5 47.63 170.8 11.63-2 23.38-3 35.25-3 49.88 0 98.13 18 135.9 50.76C502.6 228 512 208 512 186c0-11-2.276-21.98-6.776-32.11C509.7 144.3 511.1 133.7 511.1 123z" />
  </svg>
);

export default SvgBurrito;
