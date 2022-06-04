import * as React from "react";
import { SVGProps } from "react";

const SvgIcons = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M496 27.52c0-5.05-4.6-8.84-9.6-7.85l-128 25.6c-3.7.75-6.4 4.03-6.4 7.85V207.1c0 27.4-28.7 48.9-64 48.9s-64-21.5-64-48 28.7-48 64-48c19.1 0 36.3 6.3 48 16.3V53.12c0-11.44 8.1-21.29 19.3-23.54l128-25.598C498.1 1.012 512 12.37 512 27.52V175.1c0 27.4-28.7 48.9-64 48.9s-64-21.5-64-48 28.7-48 64-48c19.1 0 36.3 6.3 48 16.3V27.52zM288 176c-14.5 0-27.1 4.4-35.7 10.9-8.5 6.4-12.3 14-12.3 21.1 0 7.1 3.8 14.7 12.3 21.1 8.6 6.5 21.2 10.9 35.7 10.9 14.5 0 27.1-4.4 35.7-10.9 8.5-6.4 12.3-14 12.3-22 0-6.2-3.8-13.8-12.3-20.2-8.6-6.5-21.2-10.9-35.7-10.9zm160-32c-14.5 0-27.1 4.4-35.7 10.9-8.5 6.4-12.3 14-12.3 21.1 0 7.1 3.8 14.7 12.3 21.1 8.6 6.5 21.2 10.9 35.7 10.9 14.5 0 27.1-4.4 35.7-10.9 8.5-6.4 12.3-14 12.3-22 0-6.2-3.8-13.8-12.3-20.2-8.6-6.5-21.2-10.9-35.7-10.9zm37.4 128.8-34 95.2h41.9c10.3 0 18.7 8.4 18.7 18.7 0 5.8-2.7 10.4-7.2 14.8L366.1 509.4c-2.2 1.7-4.9 2.6-7.7 2.6-8.6 0-14.7-8.6-11.8-16.8l34-95.2h-42.4c-10.1 0-18.2-8.1-18.2-18.2 0-5.5 2.6-11.7 6.1-14.3l139.7-108.8c2.2-1.8 5-3.6 7.8-3.6 8.6 0 14.7 9.5 11.8 17.7zM336 381.8c0 1.2.1 2.2 2.2 2.2H392c2.6 0 5 1.3 6.5 3.4 1.5 2.1 1.9 4.8 1 7.3l-33.8 94.7 129.2-100.5c.7-.5 1.1-1.3 1.1-2.2 0-1.5-1.2-2.7-2.7-2.7H440c-2.6 0-5.9-1.3-6.5-3.4-2.4-2.1-1.9-4.8-1-7.3l33.8-94.6-129.5 101.4c-.5.4-.8 1.1-.8 1.7zM200 408c0 30.9-25.1 56-56 56s-56-25.1-56-56 25.1-56 56-56 56 25.1 56 56zm-56 40c22.1 0 40-17.9 40-40s-17.9-40-40-40-40 17.9-40 40 17.9 40 40 40zm64.8-158.3L216 304h24c26.5 0 48 21.5 48 48v112c0 26.5-21.5 48-48 48H48c-26.51 0-48-21.5-48-48V352c0-26.5 21.49-48 48-48h23.1l8.06-14.3c5.42-10.9 16.5-18.6 28.64-18.6h72.4c12.1 0 23.2 7.7 28.6 18.6zM48 320c-17.67 0-32 14.3-32 32v112c0 17.7 14.33 32 32 32h192c17.7 0 32-14.3 32-32V352c0-17.7-14.3-32-32-32h-33.9l-11.6-23.2c-2.7-5.4-8.2-9.7-14.3-9.7h-72.4c-6.1 0-11.62 4.3-14.33 9.7L81.89 320H48zM59.72 6.047C82.49 2.252 105.7 9.686 122 26.01l6 5.09 5.1-5.09c17.2-16.324 40.4-23.758 63.2-19.963C230.7 11.79 256 41.61 256 76.54v2.91c0 20.75-8.6 40.55-23.8 54.75l-90.4 84.3c-3.7 3.5-8.7 5.5-13.8 5.5-5.1 0-10.1-2-13.8-5.5l-90.41-84.3C8.617 120 0 100.2 0 79.45v-2.91C0 41.61 25.26 11.79 59.72 6.047zM110.7 37.32a55.464 55.464 0 0 0-48.35-15.49C35.6 26.29 15.1 49.43 15.1 76.54v2.91c0 16.33 7.68 31.95 19.61 43.05l90.39 84.3c.8.8 1.8 1.2 2 1.2 2 0 3-.4 3.8-1.2l90.4-84.3c11.9-11.1 17.8-26.72 17.8-43.05v-2.91c0-27.11-18.7-50.25-45.5-54.71-18.5-2.95-36.5 2.82-48.3 15.49l-18.2 17.31-16.4-17.31z" />
  </svg>
);

export default SvgIcons;
