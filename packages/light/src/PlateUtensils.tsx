import * as React from "react";
import { SVGProps } from "react";

const SvgPlateUtensils = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M624.3 18.08c3.1 1.33 6 3.28 8.3 5.71 2.4 2.44 4.3 5.32 5.6 8.48 1.2 3.16 1.8 6.54 1.8 9.94V480c0 4.2-1.7 8.3-4.7 11.3s-7.1 4.7-11.3 4.7c-4.2 0-8.3-1.7-11.3-4.7s-4.7-7.1-4.7-11.3V320h-45.1c-6.8-.1-13.5-1.5-19.7-4.2-6.3-2.7-12-6.7-16.7-11.6-4.7-4.9-8.4-10.6-10.9-17-2.5-6.3-3.7-13.1-3.6-19.9l.4-109.1c-.2-29.9 8.4-59.2 24.9-84.17 16.4-24.98 39.9-44.52 67.5-56.14 3-1.25 6.3-1.89 9.6-1.89 3.4.04 6.8.74 9.9 2.08zM608 51.78c-19.3 10.2-35.5 25.54-46.6 44.31-11.2 18.81-17 40.31-16.8 62.11l-.6 109.3c-.9 2.8.5 5.5 1.5 8.1 1.1 2.6 2.7 4.9 4.6 6.9 1.7 1.7 3.7 3.1 5 4 3.1 1 5.5.6 7.8 1.5H608V51.78zM145.9 209.9c-9 9-21.2 14.1-33.9 14.1H96v256c0 4.2-1.69 8.3-4.69 11.3-3 3-7.07 4.7-11.31 4.7s-8.31-1.7-11.31-4.7S64 484.2 64 480V224H48c-12.73 0-24.94-5.1-33.94-14.1A47.95 47.95 0 0 1 0 176V32c0-4.24 1.686-8.31 4.686-11.31C7.687 17.69 11.76 16 16 16s8.31 1.69 11.31 4.69c3 3 4.69 7.07 4.69 11.31v144c0 4.2 1.69 8.3 4.69 11.3 3 3 7.07 4.7 11.31 4.7h16V32c0-4.24 1.69-8.31 4.69-11.31 3-3 7.07-4.69 11.31-4.69s8.31 1.69 11.31 4.69c3 3 4.69 7.07 4.69 11.31v160h16c4.2 0 8.3-1.7 11.3-4.7s4.7-7.1 4.7-11.3V32c0-4.24 1.7-8.31 4.7-11.31S139.8 16 144 16c4.2 0 8.3 1.69 11.3 4.69 3 3 4.7 7.07 4.7 11.31v144c0 12.7-5.1 24.9-14.1 33.9zm291.9-55.7c27 27 42.2 63.6 42.2 101.8 0 28.5-8.4 56.3-24.3 80-15.8 23.7-38.3 42.1-64.6 53-26.3 10.9-55.3 13.8-83.2 8.2-28.8-5.5-53.6-20.1-73.7-39.4-20.2-20.1-33.9-45.8-39.4-73.7-5.6-27.9-2.7-56.9 7.3-83.2 11.8-26.3 30.2-48.8 53-64.6 24.6-15.9 52.4-24.3 80.9-24.3 38.2 0 74.8 15.2 101.8 42.2zm-22.6 181c21-21 32.8-49.5 32.8-79.2 0-22.1-6.6-43.8-18.9-62.2-12.3-18.4-29.8-32.8-50.2-41.3-20.5-8.4-43-10.7-64.8-6.3a111.6 111.6 0 0 0-57.3 30.6c-15.7 15.7-26.3 35.6-30.6 57.4-4.4 21.7-2.2 44.2 6.3 64.7 8.5 20.4 22.9 37.9 41.3 50.2 18.4 12.3 40 18.9 62.2 18.9 29.7 0 58.2-11.8 79.2-32.8zm127.5 23c1.3 1.7 1.4 3.6 2.8 5.6.6 2.1.7 3.3-.4 6.3.6 2.1-.1 4.1-1.1 5.9-21.9 37.9-53.7 69.1-92.1 90.2-38.3 21.1-81.7 31.3-125.4 29.5-43.7-2.6-86.1-15.4-122.6-39.5s-65.7-57.8-84.5-97.3c-1.1-2.8-1.8-4-2-6.2-.2-2.2 0-4.4.6-6.5.7-2.1 1.8-4.1 3.2-5.7 1.5-1.7 3.2-3 5.2-4 2-.9 4.1-1.4 6.3-2.4 2.2.8 4.4 1.2 6.5 2 2 .8 3.9 2 5.4 3.6 1.6 1.5 2.8 3.4 3.6 5.4 16.3 34.3 41.6 63.4 73.2 84.4 31.6 20.9 68.4 32.7 106.3 34.3 37.9 1.5 75.5-7.4 108.7-25.6 33.2-18.3 60.8-45.4 79.8-78.2 2.1-3.7 5.6-6.3 9.7-7.4 3.2-1.1 8.4-.6 12.1 1.5 1.8 1.1 3.5 2.5 4.7 4.1zM195.5 95.9c-4.2-.5-8-2.66-10.7-5.99-2.6-3.34-3.8-7.58-3.3-11.8.5-4.21 2.7-8.06 6-10.68A239.91 239.91 0 0 1 336 15.98c53.9 0 106.2 18.12 148.5 51.45 3.3 2.62 4.6 6.47 6 10.68-.4 4.22-.7 8.46-3.3 11.8-2.7 3.33-6.5 5.49-10.7 5.99-4.3.5-8.5-.69-11.8-3.32-36.9-28.35-82.2-43.72-128.7-43.72-46.5 0-91.8 15.37-128.7 43.72-4.2 2.63-7.5 3.82-11.8 3.32z" />
  </svg>
);

export default SvgPlateUtensils;
