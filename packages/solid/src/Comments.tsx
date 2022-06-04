import * as React from "react";
import { SVGProps } from "react";

const SvgComments = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M416 176C416 78.8 322.9 0 208 0S0 78.8 0 176c0 39.57 15.62 75.96 41.67 105.4-16.39 32.76-39.23 57.32-39.59 57.68-2.1 2.205-2.67 5.475-1.441 8.354C1.9 350.3 4.602 352 7.66 352c38.35 0 70.76-11.12 95.74-24.04C134.2 343.1 169.8 352 208 352c114.9 0 208-78.8 208-176zm183.6 267.7C624.8 413.9 640 376.6 640 336c0-97.2-86-176-192-176-.315 0-.62.041-.934.043C447.5 165.3 448 170.6 448 176c0 98.62-79.68 181.2-186.1 202.5C282.7 455.1 357.1 512 448 512c33.69 0 65.32-8.008 92.85-21.98C565.2 502 596.1 512 632.3 512c3.059 0 5.76-1.725 7.02-4.605 1.229-2.879.658-6.148-1.441-8.354C637.6 498.7 615.9 475.3 599.6 443.7z" />
  </svg>
);

export default SvgComments;