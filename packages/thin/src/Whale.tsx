import * as React from "react";
import { SVGProps } from "react";

const SvgWhale = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M480 128c-91.09 0-176.7 35.47-241.1 99.87l-85.66 82.69c-6.312 6.094-14.62 9.437-23.41 9.437C111.2 320 96 304.8 96 286.2c0-31.56 12.28-61.21 34.58-83.52l9.811-9.811 56.75 13.61c2.092.426 4.203.633 6.301.633 8.359 0 16.53-3.307 22.6-9.383l57.28-57.28c9.016-9.016 4.332-24.48-8.221-26.96L191.3 96.7l-16.8-83.8C172.9 4.821 165.9.002 158.8 0c-4 0-8 1.474-11.2 4.682L90.28 61.96c-7.6 7.6-10.87 18.47-8.75 28.9l13.61 56.74-46.01 46C17.44 225.3 0 267.4 0 312.3 0 404.8 75.25 480 167.8 480H544c52.94 0 96-43.06 96-95.1V288c0-88.2-71.8-160-160-160zm144 256c0 44.11-35.89 79.1-80 79.1H167.8C84.07 464 16 395.9 16 312.3c0-40.54 15.78-78.65 44.44-107.3l52.36-52.4-15.59-64.92c-1.06-5.22.58-10.6 4.39-14.41l57.23-57.22 17.77 88.54 6.846 6.846 88.57 17.7-57.28 57.27C211.7 189.4 207.6 191.1 203.4 191.1c-1.037 0-2.08-.102-2.568-.191L135.4 175.2l-16.1 16.2c-25.35 25.3-39.3 59-39.3 94.8 0 27.47 22.35 49.81 49.81 49.81 12.96 0 25.22-4.945 34.52-13.93l85.86-82.88C311.6 177.8 393.2 144 480 144c79.4 0 144 64.6 144 143.1V384zM384 272c-8.836 0-16 7.162-16 15.1 0 8.836 7.164 15.1 16 15.1s16-7.164 16-15.1c0-7.9-7.2-15.1-16-15.1z" />
  </svg>
);

export default SvgWhale;