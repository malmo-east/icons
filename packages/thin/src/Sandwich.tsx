import * as React from "react";
import { SVGProps } from "react";

const SvgSandwich = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M480 320H32c-17.62 0-32 14.38-32 32v64c0 17.62 14.38 32 32 32h448c17.62 0 32-14.38 32-32v-64c0-17.6-14.4-32-32-32zm-90.4 16L320 382.4 250.4 336h139.2zM496 416c0 8.822-7.178 16-16 16H32c-8.822 0-16-7.178-16-16v-64c0-8.822 7.178-16 16-16h189.6l93.98 62.66c1.32.94 2.82 1.34 4.42 1.34s3.094-.438 4.438-1.344L418.4 336H480c8.822 0 16 7.178 16 16v64zM48.06 266.6C65 258.3 86.13 248 124.9 248c38.78 0 59.91 10.28 76.84 18.56C217 274.1 229.1 280 256.3 280c27.12 0 39.16-5.938 54.38-13.44C327.6 258.3 348.7 248 387.4 248c38.62 0 59.75 10.28 76.78 18.59 11.94 5.812 22.25 10.84 39 12.62 4.344.594 8.344-2.75 8.812-7.125.437-4.406-2.719-8.344-7.125-8.812-13.94-1.469-22.22-5.5-33.75-11.09C452.7 243.2 429.7 232 387.4 232c-42.38 0-65.31 11.19-83.78 20.19C289.2 259.3 279.6 264 256.3 264c-23.47 0-33-4.688-47.5-11.81-18.5-8.99-41.4-20.19-83.9-20.19-42.47 0-65.41 11.19-83.84 20.19-11.5 5.61-19.75 9.61-33.904 11.11-4.375.5-7.562 4.4-7.125 8.8.469 4.4 4.657 7.8 8.813 7.1 16.936-1.8 27.246-6.8 39.216-12.6zM480 64H32C14.38 64 0 78.38 0 96v64c0 17.62 14.38 32 32 32h448c17.62 0 32-14.38 32-32V96c0-17.62-14.4-32-32-32zm16 96c0 8.822-7.178 16-16 16H32c-8.82 0-16-7.2-16-16V96c0-8.822 7.178-16 16-16h448c8.822 0 16 7.178 16 16v64z" />
  </svg>
);

export default SvgSandwich;