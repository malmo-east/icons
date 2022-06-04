import * as React from "react";
import { SVGProps } from "react";

const SvgDragon = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M535.6 251.8c-37.84-21.48-55.67-33.55-55.67-51.42l-.83-8.38h16.95l28.6 21.99C533.8 220.5 543.1 224 554.8 224h29.25c21.04 0 39.93-14.15 45.93-34.41l7.398-25.2c5.859-19.78 1.898-41.45-10.62-57.89l-56.86-74.85C554.9 11.84 531 0 506.1 0H337.3c-13.6 0-25.7 8.572-30.2 21.38-4.5 12.82-.4 27.08 10.2 35.58l18.1 14.53-11.66 4.814C311.7 81.27 303.8 93.03 303.9 106.1s8 24.7 20.1 29.5l28.01 11.2v90.96c0 16.77.51 33.65 2.17 50.25H172.2l62.05-51.72c5.45-4.49 7.25-11.99 4.55-18.39s-9.2-10.3-16.2-9.8L94.99 219.7l99.1-88.06 102 58.31c7.71 4.25 17.41 1.65 21.81-6.05 4.391-7.656 1.719-17.44-5.953-21.84l-112-64C194 94.69 186.5 95.47 181.4 100l-144 128c-5.172 4.594-6.797 12-4.062 18.31 2.75 6.344 9.109 9.906 16.14 9.594l124.9-11.34L117.8 291.7c-5.2 4.3-7.1 11.4-4.8 17.7 2.3 6.4 8.3 10.6 15.1 10.6h231.3c5.566 23.76 15.17 46.25 32.17 65.92-62.21 4.053-179.7 16.83-367.2 63.01C8.66 452.799-1.7 467.79.25 483.86 2.184 499.9 15.82 512 32 512h474.9c42.06 0 83.75-20.48 108.8-53.44 23.08-30.36 29.97-68.09 19.39-106.2C620.5 299.1 573.4 273.3 535.6 251.8zM506.9 480H32c230.5-56.75 352.6-62.38 400.5-64 15.5-.5 21.25-20.88 8.25-29.38-49-32.25-56.72-80.88-56.72-148.9V136c0-6.625-3.875-12.5-10-14.88l-38.13-15.25 36.63-15.12c5.25-2.125 9-6.875 9.75-12.5.875-5.5-1.375-11.12-5.75-14.75L337.3 32h168.8c14.88 0 29.25 7.125 38.25 19l56.88 74.88c6.377 8.375 8.377 19.38 5.377 29.5L599.3 180.5c-2 6.8-8.3 11.5-15.3 11.5h-29.25c-3.5 0-6.875-1.125-9.75-3.375l-33-25.38c-2.7-2.145-6.1-3.245-9.7-3.245h-31.6l-27.31-27.31c-6.25-6.25-16.38-6.25-22.62 0s-6.25 16.38 0 22.62l27.15 27.15v17.91c0 38.38 34.88 58.25 71.88 79.25 36.13 20.5 73.5 41.88 84.5 81.25C623.6 430.8 563.1 480 506.9 480zm-26-393.69 32 16c2.3 1.19 4.7 1.69 7.1 1.69a16.03 16.03 0 0 0 14.33-8.844c3.953-7.906.75-17.5-7.156-21.47l-32-16c-7.891-3.969-17.5-.719-21.47 7.156C469.8 72.75 472.1 82.34 480.9 86.31z" />
  </svg>
);

export default SvgDragon;
