import * as React from "react";
import { SVGProps } from "react";

const SvgGun = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="M544 64h-16v-8c0-13.26-10.7-24-24-24s-24 10.74-24 24v8H43.17C19.33 64 0 83.33 0 107.2v89.66C0 220.7 19.33 240 43.17 240c21.26 0 36.61 20.35 30.77 40.79l-40.69 158.4C27.41 459.7 42.76 480 64.02 480h119.8c14.29 0 26.84-9.469 30.77-23.21L242.4 352h78.58c24.16 0 45.5-15.41 53.13-38.28L398.6 240h36.1c8.486 0 16.62-3.373 22.63-9.373L480 208h64c17.67 0 32-14.33 32-32V96c0-17.67-14.3-32-32-32zM171.5 432H84.61l35.44-138c5.25-18.3 3.85-37.2-3.55-54h105.8l-50.8 192zm157-133.4c-1.1 3.2-4.1 5.4-7.6 5.4h-65.8l16.9-64h76.02l-19.52 58.6zM528 160h-67.88l-31.1 32H48v-80h480v48z" />
  </svg>
);

export default SvgGun;