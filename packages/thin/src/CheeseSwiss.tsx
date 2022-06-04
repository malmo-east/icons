import * as React from "react";
import { SVGProps } from "react";

const SvgCheeseSwiss = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M176 312c-30.88 0-56 25.12-56 56s25.12 56 56 56 56-25.12 56-56-25.1-56-56-56zm0 96c-22.06 0-40-17.94-40-40s17.94-40 40-40 40 17.94 40 40-17.9 40-40 40zM316.8 32.67c-3.1-.45-6.2-.67-9.3-.67-14.17 0-27.97 4.684-39.32 13.51L226.3 78.45c-5.6 4.32-7.1 11.63-4.8 18.26 2.5 7.49 3.3 15.89 1.6 24.69-3.723 19.11-19.53 34.66-38.72 37.93-2.88.47-5.68.67-8.38.67-9.6 0-18.5-2.9-26.9-7.7-2.758-1.799-5.893-2.721-9.002-2.721a15.191 15.191 0 0 0-9.443 3.252L12.3 246.3C4.566 252.4 0 261.7 0 271.5V432c0 26.5 21.49 48 48 48h416c26.51 0 48-21.49 48-48V255.1C512 82.26 377.3 41.43 316.8 32.67zM496 432c0 17.64-14.36 32-32 32H48c-17.64 0-32-14.36-32-32V272h296c0 30.88 25.12 56 56 56s56-25.12 56-56h72v160zM328 272c0-22.06 17.94-40 40-40s40 17.94 40 40-17.94 40-40 40-40-17.9-40-40zm93.4-16c-6.9-23.9-28.1-40-53.4-40s-46.5 16.1-53.4 40H25.93l115.3-90.34C151.6 172.4 163.6 176 176 176c3.619 0 7.312-.305 11.06-.943 25.9-4.412 46.69-24.76 51.73-50.64 2.148-11.04 1.387-22.41-2.66-33.38l41.92-32.89c8.529-6.635 18.73-10.14 29.5-10.14 2.314 0 4.645.168 6.969.503C369.1 56.4 496 92.44 496 256h-74.6z" />
  </svg>
);

export default SvgCheeseSwiss;