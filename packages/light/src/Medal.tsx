import * as React from "react";
import { SVGProps } from "react";

const SvgMedal = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="m300.4 275.4-19.75-40c-4.742-9.422-14.69-14.14-24.62-14.14-9.969 0-19.93 4.75-24.63 14.27l-19.8 39.87-44.13 6.5c-10.37 1.5-18.87 8.6-22.07 18.6-3.25 10.12-.625 20.88 6.875 28.25l32 31-7.625 44c-3.063 17.98 11.36 32.21 27.23 32.21 4.215 0 8.531-1.004 12.65-3.207L256 412l39.5 20.75a26.604 26.604 0 0 0 12.45 3.086c15.8 0 30.49-13.89 27.43-32.09l-7.625-43.88 32-31.12c7.5-7.375 10.13-18.12 6.875-28.25-3.25-10-11.75-17.12-22.13-18.62l-44.1-6.476zm-7 73.2 8.803 51.45-46.22-24.32-46.36 24.97 8.95-52.11-37.38-36.45 51.66-7.576 23.13-46.82 23.13 46.82 51.66 7.576L293.4 348.6zM256 160c-97.2 0-176 78.8-176 176s78.8 176 176 176 176-78.8 176-176-78.8-176-176-176zm0 320c-79.4 0-144-64.6-144-144s64.6-144 144-144 144 64.6 144 144-64.6 144-144 144zM112 192c3.094 0 6.219-.875 8.969-2.75 7.313-4.938 9.25-14.91 4.281-22.22L33.85 31.97l98.78-1L196.7 137.8c4.563 7.594 14.47 10.12 21.94 5.5 7.594-4.531 10.06-14.38 5.5-21.94L160.1 14.56C154.7 5.562 144.9 0 134.4 0H29.94C18.75 0 8.596 6.156 3.408 16.09-1.748 26-.998 37.88 5.283 46.84l93.47 138.1C101.8 189.5 106.9 192 112 192zM508.6 16.09C503.4 6.156 493.3 0 482.1 0H377.6c-10.47 0-20.31 5.562-25.66 14.53l-64.09 106.9c-4.563 7.562-2.094 17.41 5.5 21.94 7.531 4.625 17.41 2.094 21.94-5.5L377.6 32h100.5l-91.38 135c-4.969 7.312-3.031 17.28 4.281 22.22C393.8 191.1 396.9 192 400 192a15.98 15.98 0 0 0 13.25-7.031l93.35-137.9c6.4-9.189 7.2-21.069 2-30.979z" />
  </svg>
);

export default SvgMedal;
