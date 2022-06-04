import * as React from "react";
import { SVGProps } from "react";

const SvgTornado = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M387.4 199.6c-24-27.44-44.72-51.16-42.78-79.16 1.812-26.06 22.94-56.25 64.56-92.34 5.061-4.375 6.842-11.44 4.529-17.69C411.4 4.156 405.4 0 398.7 0L16.17.031C7.482.031.42 6.937.17 15.591-4.676 199.2 96.1 252.6 185 299.8l5.7 3v1.107h2.08c76.63 40.81 135.7 76.09 122.9 190.3-.75 6.75 2.844 13.22 8.938 16.19C326.8 511.5 329.2 512 331.6 512c4.125 0 8.217-1.594 11.28-4.656C413.6 437.2 447.1 376.7 448 322.2c0-54.1-32.2-90.1-60.6-122.6zM32.04 32.03 358.6 32c-29.25 30.91-44.03 58.81-45.9 86.22-.232 3.338.031 6.508.176 9.719h-265.2C38.13 101.6 32.41 70.24 32.04 32.03zM200 271.5c-52.9-27.6-105.08-55.9-137.28-111.6h257.5c9.504 22.19 26.45 41.68 43.1 60.72 14.19 16.24 28.49 32.86 38.67 51.28H200.8c-.3-.1-.5-.2-.8-.4zm56.8 32.4H414c1.2 5.9 2 12 2 18.3-.031 38.03-21.94 81.44-66.81 132-3.39-78.1-43.39-118.7-92.39-150.3z" />
  </svg>
);

export default SvgTornado;