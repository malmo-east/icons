import * as React from "react";
import { SVGProps } from "react";

const SvgFaceMask = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="M240 176c-47.9 0-77.1 19.7-84.7 27.3-6.2 6.3-16.4 6.3-22.6 0-6.3-6.2-6.3-16.4 0-22.6 13.7-14.6 51.9-36.7 106.4-36.7 9.7 0 16 7.2 16 16s-6.3 16-16 16h.9zm180.7 27.3C413.1 195.7 383 176 336 176c-8.8 0-16-7.2-16-16s7.2-16 16-16c55.4 0 93.6 22.1 107.3 36.7 6.3 6.2 6.3 16.4 0 22.6-6.2 6.3-16.4 6.3-22.6 0zM199.1 328c0-8.8 8.1-16.9 16-16.9H360c8.8 0 16 8.1 16 16.9 0 8.8-7.2 16-16 16H215.1c-7.9 0-16-7.2-16-16zm0 48c0-8.8 8.1-16 16-16H360c8.8 0 16 7.2 16 16s-7.2 16-16 16H215.1c-7.9 0-16-7.2-16-16zm359-159.5c4.2 7.8 1.2 16.6-6.6 21.6l-7.9 4.2c.3 4.6.4 9.1.4 13.7 0 141.4-114.6 256-256 256S32 397.4 32 256c0-4.6.12-9.1.36-13.7l-7.89-4.2c-7.8-5-10.75-13.8-6.59-21.6 3.61-6.8 11.4-9.9 18.5-7.9C58.6 89.86 162.8 0 288 0s229.4 89.86 251.6 208.6c7.1-2 14.9 1.1 18.5 7.9zM426.6 416c-9 18.9-28.3 32-50.6 32H199.1c-21.4 0-40.7-13.1-49.7-32h-18.2c40.4 39.6 94.9 64 155.9 64 61.9 0 117.3-24.4 157.7-64h-18.2zm45.2-32c24.8-35.5 39.5-78.4 39.3-124.8l-79.6 42.9-.6-2c.7 4.4 1.1 8.1 1.1 11V384h39.8zM288 32C175.1 32 81.72 115.5 66.25 224.1l92.95 49.6c10.2-10.9 24.7-18.6 39.9-18.6H376c16.1 0 30.6 7.7 40.8 18.6l93-49.6C494.3 115.5 400.9 32 288 32zM64.02 259.2c.65 46.4 15.39 89.3 40.08 124.8h39v-72.9c0-2.9 1.3-6.6 2-11l-.6 2-80.48-42.9zM376 287.1H199.1c-12.4 0-24 11.6-24 24V392c0 13.3 11.6 24 24 24H376c13.3 0 24-10.7 24-24v-80.9c0-12.4-10.7-24-24-24z" />
  </svg>
);

export default SvgFaceMask;
