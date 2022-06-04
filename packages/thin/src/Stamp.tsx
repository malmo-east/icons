import * as React from "react";
import { SVGProps } from "react";

const SvgStamp = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M340 142.5c-9.9 17.9-20 36.8-20 57.3 0 39.9 32.3 72.2 72.2 72.2h7.8c61.9 0 112 50.1 112 112 0 17.7-14.3 32-32 32H32c-17.67 0-32-14.3-32-32 0-61.9 50.14-112 112-112h7.8c39.9 0 72.2-32.3 72.2-72.2 0-20.5-10.1-39.4-20.9-57.3-6.8-13.8-11.1-29.6-11.1-46.5 0-53.02 42.1-96 96-96 53 0 96 42.98 96 96 0 16.9-4.3 32.7-12 46.5zM256 16c-44.2 0-80 35.82-80 80 0 14.1 3.6 27.2 9.1 38.7 10.5 17.4 22.9 39.8 22.9 65.1 0 48.7-39.5 88.2-88.2 88.2H112c-53.02 0-96 42.1-96 96 0 8.8 7.16 16 16 16h448c8.8 0 16-7.2 16-16 0-53.9-43-96-96-96h-7.8c-48.7 0-88.2-39.5-88.2-88.2 0-25.3 12.4-47.7 22-65.1 6.4-11.5 10-24.6 10-38.7 0-44.18-35.8-80-80-80zM48 472c0 13.3 10.75 24 24 24h368c13.3 0 24-10.7 24-24v-16c0-4.4 3.6-8 8-8s8 3.6 8 8v16c0 22.1-17.9 40-40 40H72c-22.09 0-40-17.9-40-40v-16c0-4.4 3.58-8 8-8s8 3.6 8 8v16zm292-329.5-14-7.8z" />
  </svg>
);

export default SvgStamp;
