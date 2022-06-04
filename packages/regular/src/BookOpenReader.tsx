import * as React from "react";
import { SVGProps } from "react";

const SvgBookOpenReader = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M459.9 192c-.625 0-1.375 0-2 .125C408 194.9 317.4 205.1 256 239.6c-61.38-34.5-152-44.75-201.9-47.5-.6-.1-1.35-.1-1.98-.1C31.75 192 0 206.4 0 242.2v177.1C0 447 21.25 469 48.38 470.4c34.38 1.875 120.5 9.125 177 37.5 5.42 2.7 11.12 4.1 17.02 4.1h27.12c5.75 0 11.75-1.375 17.12-4.125 56.5-28.38 142.6-35.63 177-37.5C490.8 469 512 447 512 420.2v-178c0-35.8-31.7-50.2-52.1-50.2zM232 458.4c-60.62-25.75-138.1-33.62-181.1-35.88-1.78-.12-2.9-1.32-2.9-2.32l-.5-178.3c.75-.9 3.38-1.8 3.88-1.9 35.87 2 125.12 10.1 180.62 41.2v177.2zm232-38.2c0 1-1.125 2.125-2.875 2.25-42.88 2.25-120.4 10.12-181.1 36V281.2C335.4 250.2 424.1 242.1 459.9 240c1.5.1 3.9 1.1 4.1 2.2v178zM256 192c53 0 96-43 96-96S309 0 256 0s-96 43-96 96 43 96 96 96zm0-144c26.5 0 48 21.5 48 48s-21.5 48-48 48-48-21.5-48-48 21.5-48 48-48z" />
  </svg>
);

export default SvgBookOpenReader;