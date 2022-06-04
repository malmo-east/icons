import * as React from "react";
import { SVGProps } from "react";

const SvgCar = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M80 288c0-17.7 14.33-32 32-32 17.7 0 32 14.3 32 32s-14.3 32-32 32c-17.67 0-32-14.3-32-32zm352 0c0 17.7-14.3 32-32 32s-32-14.3-32-32 14.3-32 32-32 32 14.3 32 32zM48.1 188.8l34.25-97.87C94.7 55.63 128 32 165.4 32h181.2c36.5 0 70.7 23.63 83.1 58.93l34.2 97.87c28.7 16.6 48.1 47.6 48.1 83.2v184c0 13.3-10.7 24-24 24s-24-10.7-24-24v-56H48v56c0 13.3-10.75 24-24 24S0 469.3 0 456V272c0-35.6 19.35-66.6 48.1-83.2zm55.3-12.8h305.2l-24.3-69.2C378.7 90.74 363.6 80 346.6 80H165.4c-17 0-32.1 10.74-37.7 26.8L103.4 176zM416 224H96c-26.51 0-48 21.5-48 48v80h416v-80c0-26.5-21.5-48-48-48z" />
  </svg>
);

export default SvgCar;
