import * as React from "react";
import { SVGProps } from "react";

const SvgPenFancy = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M512 85.31c0 22.79-9.8 46.29-27.2 62.49L277.1 341.2l-22.7 73.6c-7 22.8-24.8 40.6-47.6 47.6L51.94 510.1c-30.69 9.4-59.434-19.4-49.99-50l47.64-154.9a71.887 71.887 0 0 1 47.64-47.6l73.57-22.7L364.2 27.18C380.4 9.845 403 0 426.7 0 473.8 0 512 38.2 512 85.31zM217.3 255.4l39.3 39.3 195.5-182.1c7.6-7 11.9-16.93 11.9-27.29 0-20.61-16.7-38.21-37.3-38.21-10.4 0-20.3 5.21-27.3 12.79L217.3 255.4zm11.5 79.4-51.6-51.6-65.9 20.3c-7.6 2.3-13.5 8.2-15.83 15.8L62.33 427 112 377.3c0-.4-.9-.9-.9-1.3 0-13.3 11.6-24 24-24 14.2 0 24 10.7 24 24s-9.8 24-24 24c.5 0 0-.9-.4-.9l-49.75 50.6 107.75-33.2c7.6-2.3 13.5-8.3 15.8-15.8l20.3-65.9z" />
  </svg>
);

export default SvgPenFancy;
