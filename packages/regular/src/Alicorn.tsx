import * as React from "react";
import { SVGProps } from "react";

const SvgAlicorn = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M480 96c0-8.875-7.124-16-16-16-8.877 0-15.92 7.125-15.92 16s7.125 16 16 16S480 104.9 480 96zm152-48h-86.41l-2.258-2.75c15.99-5.371 29.11-18.73 32.62-35.59C577 4.688 573.1 0 567.1 0H431.2c-68.39 0-125.9 48-140.4 112h-25c-39.02 0-78.06-13.54-104.8-41.95-3.9-4.18-8.9-6.05-13.8-6.05-9.8 0-19.2 7.63-19.2 19 0 86.13 59.76 162.8 140 183.3 10.13 2.625 20-5.125 20-15.62V234.3c0-6.91-4.403-13.24-11.06-15.11-37.34-10.49-69.04-37.79-86.44-73.39 23.4 9.3 48.9 14.2 75.3 14.2h70.26v-16c0-53.02 42.99-96 96.02-96h51.39l44.63 54.25v65.38a11.1 11.1 0 0 1-7.502 10.5l-31.01 10.62c-1.5.5-9.75 3-16.5-3.75L448.1 160h-32.01l-.005 80c0 26.12-12.62 49-32 63.63l-.028 160.4L336.1 464V320l-139.9-31.1-28.7 80.1 24 95H150l-21.13-87.88c-1.27-5.32-1.07-10.82.43-16.12l22.75-76.75C128.5 273.8 112 250.9 112 224c0-15 5.124-28.62 13.75-39.5-8.877-14.25-15.63-29.75-20.63-46.13-7.85 6.53-15.23 13.63-21.11 22.03C37.38 162.5 0 200.9 0 248v48c0 13.3 10.75 24 24 24s24-10.75 24-24l-.004-48c0-13.25 6.876-24.37 16.75-31.62-.125 2.5-.752 5-.752 7.625 0 30.12 11.88 58.12 32.14 78.62l-12.88 43.75c-4 13.25-4.374 27.38-1.125 40.88L106.3 487.5c3.5 14.4 16.3 24.5 31.1 24.5h74.76c20.85 0 36.13-19.62 31.02-39.84l-25.52-100.8L227 345l61.01 13.5.09 121.5c0 17.6 14.4 32 32 32h80.01c17.6 0 32.01-14.4 32.01-32V324.4c20-22.5 31.26-51.13 32.01-81.63v-8.37c21 7 38.38.75 41.01-.125l30.1-10.62c23.94-8.203 40.01-30.71 40.01-56V102.5c0-5.104-1.03-10.08-2.579-14.86l62.87-25C643 58.25 639.9 48 632 48z" />
  </svg>
);

export default SvgAlicorn;