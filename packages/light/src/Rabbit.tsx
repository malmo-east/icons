import * as React from "react";
import { SVGProps } from "react";

const SvgRabbit = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M505.9 450.8c-.625-1-1.25-2-2-2.875L389.5 304h1.875c48.88 0 88.63-39.75 88.63-88.62 0-28.62-13.88-55.5-37.13-72.13-.625-.5-1.25-.875-1.875-1.25l-24.63-15.13.75-3C431 72 431.1 12.5 389.5 1.375 386 .5 382.5 0 378.9 0c-17.63 0-31.75 10.38-42.87 24.5C324.9 10.38 310.8 0 293.2 0c-3.625 0-7.184.5-10.68 1.375C240.9 12.5 241 72 254.9 123.9c2.25 8.625 5 17 8.125 25.12-2.625 6.5-4.625 13.5-5.75 20.62A91.487 91.487 0 0 0 256 185v41.62c-67.38 11.38-122.8 58-146.9 120C98 339.8 85.38 336 72 336c-19.25 0-37.38 7.5-51 21.12-28 28-28 73.75 0 101.8C34.63 472.5 52.75 480 72 480c10.25 0 20-2.875 29.13-7 9.77 22.9 32.47 39 58.87 39h160c17.63 0 32.01-14.38 32.01-32 0-23.25-12.5-43.63-31-54.88l15.75-9.875 65.13 80.25C409.4 505.9 421.3 512 434.3 512h37.75c14.5 0 28-7.875 35-20.62 6.95-12.78 6.55-28.28-1.15-40.58zM96 416v23c-7.12 5.6-15.5 9-24 9-10.25 0-20.5-3.875-28.38-11.75-15.63-15.62-15.63-40.87 0-56.5C51.5 371.9 61.75 368 72 368c9.1 0 19.88 3.875 27.63 11.38C97.38 391.2 96 403.5 96 416zm376 64h-37.75c-2.75 0-5.25-1.375-6.75-3.75l-83.75-103.1L224 448l64 .002c17.63 0 32 14.37 32 31.1L160 480c-17.75 0-32-14.38-32-32l-.002-32c0-88.38 71.63-159.1 160-159.1l.003-70.1c0-3.5.251-6.858.876-10.23 1.5-9.25 4.872-17.53 9.497-24.28-4.75-10.25-9.125-21.88-12.63-34.88-11.25-42.25-9-79.5 5-83.38C291.5 32.12 292.4 32 293.1 32c13.63 0 32.13 28.6 42.88 67.22C346.9 60.6 365.3 32 378.9 32c.75 0 1.625.125 2.375.25 14 3.875 16.25 41.13 5 83.38-2.5 9-5.375 17.38-8.5 25.13l46.52 28.51a56.618 56.618 0 0 1 23.74 46.12c0 31.25-25.39 56.62-56.64 56.62L352 272v36.38l126.8 159.4c3.3 5.32-.5 12.22-6.8 12.22zM367.1 191.1c0-8.875-7.125-16-16-16s-16 7.125-16 16 7.126 16 16 16 16-6.2 16-16z" />
  </svg>
);

export default SvgRabbit;
