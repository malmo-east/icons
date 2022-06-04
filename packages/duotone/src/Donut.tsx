import * as React from "react";
import { SVGProps } from "react";

const SvgDonut = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path
      className="donut_svg__fa-primary"
      d="M372.7 155.3c-3-3-5.6-7-5.6-11.3 0-4.2 2.6-8.3 5.6-11.3 3-3 7-5.6 10.4-5.6 5.1 0 9.2 2.6 12.2 5.6l32 32c1.5 1.5 1.8 3.2 3.5 5.2.8 1.9.3 4 .3 5.2 0 3 .5 5.1-.3 7-1.7 2-2 3.7-3.5 5.2s-3.2 1.8-5.2 3.5c-1.9.8-4 1.2-7 1.2-1.2 0-3.3-.4-5.2-1.2-2-1.7-3.7-2-5.2-3.5l-32-32zm-58.8 101.9c1.9-.8 4-2.1 5.2-2.1 3 0 5.1 1.3 7 2.1 2 .8 3.7 2 5.2 3.5s1.8 3.2 3.5 5.2c.8 1.9.3 4 .3 6.1 0 2.1.5 4.2-.3 6.1-1.7 2-2 3.7-3.5 5.2l-32 32c-3 3-7.1 4.7-12.2 4.7-3.4 0-7.4-1.7-10.4-4.7s-5.6-7.1-5.6-12.2c0-3.4 2.6-7.4 5.6-10.4l32-32c1.5-1.5 3.2-2.7 5.2-3.5zm-194.8-99.9c-2.6-1.7-4.7-4.2-5.9-7.2-2.1-2.9-1.5-7-.9-9.2.6-3.1 2.1-6 4.4-8.2l32-32c3-3.03 7.1-4.71 10.4-4.71 5.1-.89 9.2 1.69 12.2 4.71 3 3 3.8 7.1 3.8 11.3 0 4.3-.8 8.3-3.8 11.3l-32 32c-3 3-7.1 4.7-11.3 4.7-3.2 0-6.3-.9-8.9-2.7zM512 304c0 88.4-114.6 160-256 160S0 392.4 0 304v-48c-.48 17.1 12.8 33.7 36.48 44.1 13.31 5.1 24.55 14.5 32 26.7a95.005 95.005 0 0 0 37.22 29.1c14.7 6.4 30.7 8.2 46.7 7.7 17.8-.1 35.4 3.3 51.8 10.2 33.3 13.6 70.5 13.6 103.7 0 16.4-6.9 33.2-10.3 51.9-10.2 15.9.5 32-1.3 46.6-7.7 14.7-6.4 27.5-16.4 37.2-29.1 7.5-12.2 18.7-21.6 32-26.7 23.8-10.4 36.9-27 36.4-44.1v48z"
    />
    <path
      d="M512 256c.5 17.1-12.6 33.7-36.5 44.1-13.3 5.1-25.4 14.5-32 26.7-9.8 12.7-22.6 22.7-37.2 29.1-14.7 6.4-30.7 8.2-46.7 7.7-17.8-.1-35.4 3.3-51.8 10.2-33.3 13.6-70.5 13.6-103.7 0-16.4-6.9-34.1-10.3-51.9-10.2-15.9.5-32-1.3-46.6-7.7a94.885 94.885 0 0 1-37.25-29.1c-7.45-12.2-18.69-21.6-32-26.7C12.8 289.7-.48 273.1 0 256v-48C0 119.6 114.6 48 256 48s256 71.6 256 160v48zM239.1 111.1c0 5.1 2.6 9.2 5.6 12.2 3 3 7 4.7 10.4 4.7 5.1 0 9.2-1.7 12.2-4.7l16-16c3-3 3.8-7 3.8-11.29 0-4.24-.8-8.32-3.8-11.32-3-3.01-7.1-4.7-12.2-4.7-3.3 0-7.4 1.68-10.4 4.68l-16 16.03c-3 3-5.6 7-5.6 10.4zM107.3 219.3c3-3 4.7-7.1 4.7-11.3 0-4.2-1.7-8.3-4.7-11.3S100.2 192 96 192H64c-4.24 0-8.31 1.7-11.31 4.7S48 203.8 48 208c0 4.2 1.69 8.3 4.69 11.3 3 3 7.07 4.7 11.31 4.7h32c4.2 0 8.3-1.7 11.3-4.7zm5.9-81.4c-.8 1.9-2.1 4-2.1 5.2 0 3 1.3 5.1 2.1 7-.1 2 2 3.7 3.5 5.2 1.4 1.5 3.2 1.8 5.1 3.5 2 .8 4.1 1.2 5.3 1.2 3 0 5.1-.4 7-1.2 1.9-1.7 3.7-2 5.2-3.5l32-32c3-3 3.8-7 3.8-11.3 0-4.2-.8-8.3-3.8-11.3-3-3.02-7.1-4.71-12.2-4.71-3.3 0-7.4 1.68-10.4 4.71l-32 32c-1.5 1.5-2.7 3.2-3.5 5.2zm77.6 156.2c.8-1.9.3-4 .3-6.1 0-2.1.5-4.2-.3-6.1-1.7-2-2-3.7-3.5-5.2l-32-32c-3-3-7.1-5.6-12.2-5.6-3.4 0-7.4 2.6-10.4 5.6-3 3-5.6 7.1-5.6 11.3 0 2.1 1.3 4.2 2.1 6.1.8 2 2 3.7 3.5 5.2l32 32c3 3 7 4.7 10.4 4.7 5.1 0 9.2-1.7 12.2-4.7 1.5-1.5 1.8-3.2 3.5-5.2zM256 224c35.4 0 64-14.3 64-32s-28.6-32-64-32-64 14.3-64 32 28.6 32 64 32zm78.8 54.1c.8-1.9.3-4 .3-6.1 0-2.1.5-4.2-.3-6.1-1.7-2-2-3.7-3.5-5.2s-3.2-2.7-5.2-3.5c-1.9-.8-4-2.1-7-2.1-1.2 0-3.3 1.3-5.2 2.1-2 .8-3.7 2-5.2 3.5l-32 32c-3 3-5.6 7-5.6 10.4 0 5.1 2.6 9.2 5.6 12.2 3 3 7 4.7 10.4 4.7 5.1 0 9.2-1.7 12.2-4.7l32-32c1.5-1.5 1.8-3.2 3.5-5.2zm96 0c.8-1.9.3-4 .3-6.1 0-2.1.5-4.2-.3-6.1-1.7-2-2-3.7-3.5-5.2l-32-32c-3-3-7.1-5.6-12.2-5.6-3.4 0-7.4 2.6-10.4 5.6-3 3-5.6 7.1-5.6 11.3 0 4.3 2.6 8.3 5.6 11.3l32 32c3 3 7 4.7 10.4 4.7 5.1 0 9.2-1.7 12.2-4.7 1.5-1.5 1.8-3.2 3.5-5.2zm0-96c.8-1.9.3-4 .3-6.1 0-2.1.5-4.2-.3-6.1-1.7-2-2-3.7-3.5-5.2l-32-32c-3-3-7.1-5.6-12.2-5.6-3.4 0-7.4 2.6-10.4 5.6-3 3-5.6 7.1-5.6 11.3 0 2.1 1.3 4.2 2.1 6.1.8 2 2 3.7 3.5 5.2l32 32c3 3 7 4.7 10.4 4.7 5.1 0 9.2-1.7 12.2-4.7 1.5-1.5 1.8-3.2 3.5-5.2z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgDonut;