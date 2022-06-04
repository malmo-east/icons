import * as React from "react";
import { SVGProps } from "react";

const SvgHoneyPot = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M433.6 144.7c10.9 25 15.8 52.1 14.4 79.3-2.2 89.8-39.2 175.2-103.2 238.2-11.6 11.3-27.1 17.7-43.2 17.8H146.4c-16.1-.1-31.6-6.5-43.2-17.8A346.293 346.293 0 0 1 .002 224c-1.435-27.2 3.48-54.3 14.358-79.3 10.87-24.9 27.41-47.02 48.3-64.47H56a24.01 24.01 0 0 1-16.97-7.03 23.993 23.993 0 0 1 0-33.94A24.01 24.01 0 0 1 56 32.23h336c6.4 0 12.5 2.53 16.1 7.03 5.4 4.5 7.9 10.6 7.9 16.97 0 6.36-2.5 12.47-7.9 16.97-3.6 4.5-9.7 7.03-16.1 7.03h-6.7c20.9 17.45 37.5 39.57 48.3 64.47zm-366.59 2.6C52.61 170.1 45.94 197 48 224h352c0-117.5-97.2-141.31-163.5-143.77h-25c-11.9.45-23.7 1.62-35.5 3.48v52.39c0 6.3-2.5 12.4-7.9 16.9-3.6 4.5-9.7 7.1-16.1 7.1-6.4 0-12.5-2.6-17-7.1s-7-10.6-7-16.9V96.96c-25.2 9.84-46.58 27.44-60.99 50.34zM366.8 352H81.25c14.18 28 32.85 53.5 55.25 75.6 2.6 2.7 6.2 4.3 9.9 4.4h155.2c3.7-.1 7.3-1.7 9.9-4.4 22.4-22.1 41.1-47.6 55.3-75.6z" />
  </svg>
);

export default SvgHoneyPot;
