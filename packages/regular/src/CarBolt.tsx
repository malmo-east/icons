import * as React from "react";
import { SVGProps } from "react";

const SvgCarBolt = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M80 288c0-17.7 14.33-32 32-32 17.7 0 32 14.3 32 32s-14.3 32-32 32c-17.67 0-32-14.3-32-32zm352 0c0 17.7-14.3 32-32 32s-32-14.3-32-32 14.3-32 32-32 32 14.3 32 32zM315.2 116.6c5.3 5.2 6.3 13.3 2.5 19.6L284.3 192H336c7.1 0 13.4 4.7 15.4 11.6 1.9 6.9-.9 14.2-6.9 18l-128 80c-6.3 3.9-14.4 3-19.7-2.2-5.3-5.2-6.3-13.3-2.5-19.6l33.4-55.8H176c-7.1 0-13.4-4.7-15.4-11.6-1.9-6.9.9-14.2 6.9-18l128-80c6.3-3.9 14.4-3 19.7 2.2zM48.1 188.8l34.25-97.87C94.7 55.63 128 32 165.4 32h181.2c36.5 0 70.7 23.63 83.1 58.93l34.2 97.87c28.7 16.6 48.1 47.6 48.1 83.2v184c0 13.3-10.7 24-24 24s-24-10.7-24-24v-56H48v56c0 13.3-10.75 24-24 24S0 469.3 0 456V272c0-35.6 19.35-66.6 48.1-83.2zm55.3-12.8H128v48H96c-26.51 0-48 21.5-48 48v80h416v-80c0-26.5-21.5-48-48-48h-32v-48h24.6l-24.3-69.2C378.7 90.74 363.6 80 346.6 80H165.4c-17 0-32.1 10.74-37.7 26.8L103.4 176z" />
  </svg>
);

export default SvgCarBolt;