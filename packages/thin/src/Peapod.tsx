import * as React from "react";
import { SVGProps } from "react";

const SvgPeapod = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M256 192c-35.3 0-64 28.7-64 64s28.72 64 64 64 64-28.7 64-64-28.7-64-64-64zm0 112c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.53 48 48-21.5 48-48 48zM500.6 11.36C493.1 3.766 482 .266 472.3 0c-54.9 1.359-192 13.94-279.1 101l-92.1 92.1C17.2 277.04 1.76 404 0 472.3c-.25 10.7 3.75 20.77 11.34 28.35C18.7 507.1 28.42 512 38.73 512c.344 0 .688-.016 1-.016 54.94-1.359 192.1-13.94 279.1-101.1l92.06-92.06c83.9-83.89 99.34-210.9 101.1-279.2C512.2 29 508.2 18.94 500.6 11.36zm-101 296.14-92.06 92.06c-82.1 83.05-215.2 95.06-268.2 96.38-7.219.096-12.22-2.219-16.69-6.672-4.438-4.453-6.812-10.36-6.656-16.62 1.344-53.02 13.41-185.3 96.37-268.3l92.06-92.06C287.5 29.33 419.7 17.31 472.6 16c.219 0 .406-.016.594-.016 6.062 0 11.75 2.36 16.09 6.688 4.438 4.453 6.812 10.36 6.656 16.62C494.6 92.31 482.6 224.6 399.6 307.5zM144 304c-35.28 0-64 28.7-64 64s28.72 64 64 64 64-28.7 64-64-28.7-64-64-64zm0 112c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48zM368 80c-35.3 0-64 28.7-64 64s28.72 64 64 64 64-28.7 64-64-28.7-64-64-64zm0 112c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48z" />
  </svg>
);

export default SvgPeapod;
