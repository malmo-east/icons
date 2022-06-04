import * as React from "react";
import { SVGProps } from "react";

const SvgSocks = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="M182.6 478.1c-14.7 12-32.2 17.9-50.5 17.9-30.59 0-58.02-16.03-73.39-42.84-20.89-36.41-9.467-85.91 25.82-112.5l91.56-65V112h119.1c4.421 0 7.998-3.594 7.998-8s-2.688-8-7.088-8h-120l.025-57c0-12.69 10.23-23 22.79-23h113.2c4.421 0 7.998-3.594 7.998-8S316.5 0 312.1 0H198.9c-21.4 0-38.8 17.5-38.8 39v228.4l-85.01 60.3c-42.51 32.06-55.5 89.41-30.26 133.4 18.25 31 50.88 50.9 87.27 50.9 21.85 0 42.65-7 60.14-20.28 3.53-2.656 4.218-7.688 1.547-11.22-2.687-4.4-7.687-4.2-11.187-2.4zM505.2 0H382.8c-21.39 0-38.79 17.5-38.79 39v228.4l-84.1 60.34c-42.51 32.06-55.5 89.41-30.26 133.4C247 492.1 279.7 512 316.1 512c21.85 0 42.65-7 60.02-20.19l115.4-83.75C524.4 383.3 544 343.8 544 302.5V39c0-21.5-17.4-39-38.8-39zM528 302.5c0 36.34-17.25 71.03-46.01 92.72l-115.5 83.75C351.8 490.1 334.4 496 316.1 496c-30.59 0-58.02-16.03-73.39-42.84-20.89-36.41-9.467-85.91 25.82-112.5l91.56-65V112h167.1v190.5zM528 96H360.9V39c0-12.69 10.23-23 22.79-23h122.4c12.56 0 22.79 10.31 22.79 23v57z" />
  </svg>
);

export default SvgSocks;