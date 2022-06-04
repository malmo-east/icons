import * as React from "react";
import { SVGProps } from "react";

const SvgExplosion = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="m464.1 324.1 53.7-4c9.3-.8 18.2 3.8 22.9 11.8 4.7 7.2 4.3 17.2-1 25.8l-51.4 73.4h-58.4l41.1-58.6-36.8 3.4c-7.8.7-15.5-2.4-20.6-8.4-5-6.1-6.8-14.1-4.8-21.7l42.4-158.7-94.5 161.1c-5 8.3-14.4 12.9-24 11.6-9.6-1.4-17.5-8.4-19.9-17.7l-24.8-95-24.8 95c-2.1 8.3-8.6 14.8-16.9 17.1-9.2 2.2-17.2-.2-23.3-7.1l-50.7-49.9 11 44c1.9 7.5 0 15.4-5 21.3-4.9 5.9-12.4 9-20.1 8.4l-53.8-4.1 41.7 59.3H87.73l-51.46-73.4c-6.17-7.7-5.69-17.6-1.08-25.6 4.6-8.1 13.42-12.7 22.65-12l70.76 5.4-23.9-95.7c-2.6-10.4 2.1-21.4 11.5-26.7 9.4-5.3 21.1-3.7 27.9 3.9l83.3 82.4 37.4-143.5c2.7-10.5 12.3-18.8 23.2-18.8 10.9 0 20.5 8.3 23.2 18.8l33.5 128.2L499.3 11.8c6.1-10.335 18.9-14.58 30-9.933 11.1 4.646 17 16.753 13.9 28.343L464.1 324.1zm87.9 139c13.3 0 24 11.6 24 24 0 14.2-10.7 24-24 24H24c-13.25 0-24-9.8-24-24 0-12.4 10.75-24 24-24h162.8c10.8-45 52-80 101.2-80s90.4 35 101.2 80H552zm-314.6 0h101.2c-9-18-28.3-32-50.6-32s-41.6 14-50.6 32zm74.6-392c0 14.15-10.7 24-24 24s-24-9.85-24-24v-48c0-12.36 10.7-23.103 24-23.103S312 10.74 312 23.1v48z" />
  </svg>
);

export default SvgExplosion;
