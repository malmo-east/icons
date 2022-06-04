import * as React from "react";
import { SVGProps } from "react";

const SvgAlicorn = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M632 64h-97c5.721-10.11 8.626-22.03 8.212-34.2C542.7 13.03 528 0 511.3 0H400c-69.13 0-125.4 55.25-127.6 123.9-35.6-9.1-63.1-34.65-81.5-76.65-4-9.125-13-15.12-23-15.25-10.5.25-18.88 5.375-23.13 14.38C133.6 70 128 95.13 128 121.1c0 75.38 56.5 143.6 132.9 161.9 4.377 1 8.877-2 9.752-6.5l2.875-15.62c.875-4.25-1.875-8.125-6-9.25-61.75-15.12-107.5-70-107.5-130.5 0-16.38 2.75-32.25 8-47.38 29.38 56.5 76.13 86.25 136 86.25v-32c0-53.02 42.98-96 96-96h111.3c0 13.25-8.125 24.62-19.63 29.5l20.38 24.75v93.88c0 6.875-4.375 13-10.88 15.12l-25.5 8.75c-9.25 3.25-16.12-2.75-18.5-6.25L432.067 160l-48-16v100.3c0 26.62-12.63 50.12-32 65.5v154.3c0 8.837-7.163 16-16 16h-32c-8.837 0-16-7.163-16-16V318.8L183.6 295.5 151.47 385l18.97 75.08c2.554 10.11-5.087 19.92-15.51 19.92H130.6a16.005 16.005 0 0 1-15.56-12.26l-18.18-75.61a31.463 31.463 0 0 1 .418-16.27l27.58-93.35c-17.38-12.12-28.88-32.25-28.88-55.12 0-15.88 5.625-30.12 14.88-41.63-5-10.88-9-22.12-11.5-33.75-8 6.875-15.13 15-20.75 24.12C35.13 176.9 0 212.3 0 256v47.1c0 8.801 7.2 16 16 16s16-6.3 16-15.1v-48c0-21.5 14.25-39.5 33.75-45.62-1 5.625-1.75 11.12-1.75 17 0 24.25 8.875 47.37 24.5 65.25l-21.93 74.42a63.092 63.092 0 0 0-.825 32.58l18.17 75.59c5.186 21.57 24.48 36.78 46.67 36.78h24.35c31.28 0 54.21-29.44 46.53-59.77l-16.59-65.6 19.25-53.75 51.88 11.5v119.6c0 26.4 21.6 48 47.1 48h32.01c26.4 0 48.03-21.6 48.03-48l-.027-140.2c20.5-21.5 32-49.75 32-79.5v-50.5l14.5 21.75c19.13 28.62 50 20.62 55.5 18.75l25.5-8.625c19.43-6.57 32.5-24.79 32.5-45.3V115.4l92.38-36.75C643 74.25 639.9 64 632 64zM464 96c0-8.875-7.125-16-16-16s-16 7.125-16 16 7.127 16 16 16 16-7.1 16-16z" />
  </svg>
);

export default SvgAlicorn;
