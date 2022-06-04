import * as React from "react";
import { SVGProps } from "react";

const SvgShoePrints = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M491.4 7.75c-23-5.375-46.52-7.751-70.15-7.751-9.125 0-18.23.377-27.35 1.002-27.4 2.126-54.1 8.374-80.4 16.119L256 32h-64c-35.38 0-64 32.1-64 70.87s28.62 68.5 64 68.5h64c60.25 0 80 16.75 104.8 34.38C389.2 226 430.5 240 465.5 240c90.4 0 174.5-34.2 174.5-102.9 0-48.35-39.1-104.22-148.6-129.35zM465.5 192c-24.25 0-55.88-10.5-77-25.5l-4.125-2.875C363.4 148.6 337.9 130.8 288 125.2V73.38l37.5-9.75.875-.125.875-.25c27.5-8.25 49.88-12.75 70.25-14.37 7.9-.505 15.9-.885 23.9-.885 20.62 0 40.62 2.125 59.25 6.5C562.8 73.38 592 109.6 592 137.1c0 34.4-64.4 54.9-126.5 54.9zm-128 80c-35 0-76.25 14-104.7 34.25C208 323.9 188.2 340.6 128 340.6H64c-35.38 0-64 30.62-64 68.5s28.62 70.86 64 70.86l64 .005 57.5 14.89c26.25 7.75 53 13.98 80.38 16.1C275 511.6 284.1 512 293.2 512c23.63 0 47.13-2.375 70.13-7.75C472.9 479.1 512 423.2 512 374.9c0-68.7-84.1-102.9-174.5-102.9zm15.1 185.5c-19.5 4.4-39.5 6.5-59.4 6.5-7.875 0-15.87-.375-23.75-.875C249.1 461.5 226.8 457 199.2 448.8l-.8-.3-.9-.1-37.5-9.8v-51.87c49.88-5.5 75.38-23.38 96.38-38.38l4.12-2.85c21.1-15 52.7-25.5 77-25.5 62.1 0 126.5 20.5 126.5 54.9 0 27.5-29.2 63.7-111.4 82.6z" />
  </svg>
);

export default SvgShoePrints;