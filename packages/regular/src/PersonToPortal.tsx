import * as React from "react";
import { SVGProps } from "react";

const SvgPersonToPortal = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M416 0c-38.75 0-83.88 34.88-93.88 188.9-9.25-30.25-34-53.25-64.88-60.25L179 110.9c-25.6-5.9-52.5.1-73.2 16.2l-48.42 37.4c-10.5 8-12.38 23.12-4.25 33.62s23.12 12.38 33.62 4.28L135.1 165c9.5-7.25 21.75-9.875 33.38-7.375L183.4 161 148 248.4c-10.38 25.5-.625 54.75 23 68.87l83.75 50.63c2.375 1.625 3.75 4.125 3.875 6.875 0 .75-.125 1.5-.25 2.25L225 481.4c-1.7 6.1-1 12.7 2.1 18.2 3.125 5.625 8.25 9.75 14.38 11.5 2.32.5 4.42.9 6.62.9 10.75 0 20.12-7.125 23.12-17.38l33.25-104.5c7-24.37-3.25-50.25-24.88-63.37L227.8 295.5l42-104.7c2.75 3.5 5 7.625 6.375 12l14 46c7.125 23.62 28.63 39 53.38 39.12l48.345.08c13.2 0 24.1-10.8 24.1-23.9 0-13.25-10.62-23.5-24-23.62h-23.88C369.1 132.9 390.8 48 416 48c26.5 0 48 93.12 48 208s-21.5 208-48 208c-21.38 0-39.38-60.5-45.63-144h-48.5C328 418.1 350.9 512 416 512c43.75 0 96-44.38 96-256 0-116.8-16.6-256-96-256zM272 96c26.5 0 48-21.5 48-47.1S298.5 0 272 0s-48.01 21.5-48.01 48S245.5 96 272 96zM126.1 316.9l-19.9 46.2c-1.2 3-4.1 4.9-7.2 4.9H24c-13.25 0-24 10.8-24 24s10.75 24 24 24h75c22.38 0 42.62-13.38 51.5-33.1l13.5-32.4-9.5-5.875C143 337.6 133.4 328.1 126.1 316.9z" />
  </svg>
);

export default SvgPersonToPortal;
