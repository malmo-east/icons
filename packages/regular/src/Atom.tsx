import * as React from "react";
import { SVGProps } from "react";

const SvgAtom = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M256 224c-17.7 0-32.9 14.4-32.9 32s15.2 32 32.9 32c17.62 0 32-14.38 32-32-.1-17.6-14.4-32-32-32zm215.2-96c-15.62-27.75-49.62-41.38-93.11-41.38-9.499.125-18.87.75-28.25 2C327.1 34.38 293.5 0 256 0s-71.1 34.38-93.9 88.62c-9.374-1.25-18.75-1.875-28.25-2-43.46 0-77.45 13.58-93.07 41.38-18.75 33.5-6.499 80.62 27.62 128-34.12 47.38-46.37 94.5-27.62 128 15.62 27.75 49.62 41.38 93.11 41.38 9.499-.125 18.87-.75 28.25-2C184.9 477.6 218.5 512 256 512s71.12-34.38 93.86-88.63c9.374 1.25 18.75 1.875 28.25 2 43.49 0 77.49-13.62 93.11-41.38 18.75-33.5 6.499-80.63-27.62-128 34.1-47.39 45.5-94.49 27.6-127.99zM256 48c14.37 0 32.12 18.12 47.12 50-16.02 4.4-31.72 9.8-47.12 16.1a395.769 395.769 0 0 0-47.12-16.14C223.9 66.12 241.6 48 256 48zM133.9 377.4c-26.5 0-46.74-6.625-52.74-17.38-7.124-12.75-.5-37.63 18.62-66.63C111.4 305.2 123.8 316.5 136.8 327c2.25 16.5 5.374 33 9.624 49.13-4.124.27-8.524 1.27-12.524 1.27zm2.9-192.4c-13 10.5-25.4 21.8-37.03 33.6-19.12-29-25.75-53.8-18.62-66.6 5.999-10.75 26.25-17.38 52.74-17.38 3.1 0 8.374 1 12.5 1.25C142.1 152 139 168.5 136.8 185zM256 464c-14.37 0-32.12-18.12-47.12-49.1 16.02-5.3 31.72-10.7 47.12-17a395.769 395.769 0 0 0 47.12 16.14C288.1 445.9 270.4 464 256 464zm0-112c-52.99 0-95.99-43-95.99-96S203 160 256 160s95.99 43 95.99 96-43.89 96-95.99 96zm174.9 8c-5.999 10.75-26.25 17.38-52.74 17.38-3.1 0-8.374-1-12.5-1.25C369.9 360 372.1 343.5 375.2 327c12.1-10.5 25.37-21.75 36.1-33.63 20.1 29.03 25.8 53.83 19.6 66.63zm-18.7-141.4c-11.6-11.8-24-23.1-37-33.6-3.1-16.5-5.3-33-9.6-49.1 4.125-.25 8.499-1.25 12.5-1.25 26.5 0 46.74 6.625 52.74 17.38 6.26 12.77.56 37.57-18.64 66.57z" />
  </svg>
);

export default SvgAtom;
