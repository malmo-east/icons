import * as React from "react";
import { SVGProps } from "react";

const SvgGasPump = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M96 96c0-17.67 14.3-32 32-32h96c17.7 0 32 14.33 32 32v96c0 17.7-14.3 32-32 32h-96c-17.7 0-32-14.3-32-32V96zm16 0v96c0 8.8 7.2 16 16 16h96c8.8 0 16-7.2 16-16V96c0-8.84-7.2-16-16-16h-96c-8.8 0-16 7.16-16 16zm232 416H8c-4.418 0-8-3.6-8-8s3.582-8 8-8h24V64C32 28.65 60.65 0 96 0h160c35.3 0 64 28.65 64 64v208h8c39.8 0 72 32.2 72 72v40c0 26.5 21.5 48 48 48s48-21.5 48-48V224h-8c-30.9 0-56-25.1-56-56V72.85L402.6 45.9c-3.3-2.99-3.5-8.05-.5-11.31 3-3.25 8.1-3.47 11.3-.49l80.4 73.7c11.6 10.6 18.2 25.6 18.2 41.3V384c0 35.3-28.7 64-64 64s-64-28.7-64-64v-40c0-30.9-25.1-56-56-56h-8v208h24c4.4 0 8 3.6 8 8s-3.6 8-8 8zM256 16H96c-26.51 0-48 21.49-48 48v352h256V64c0-26.51-21.5-48-48-48zm48 480v-64H48v64h256zm179-376.4-35-32.08V168c0 22.1 17.9 40 40 40h8v-58.9c0-11.2-4.7-21.9-13-29.5z" />
  </svg>
);

export default SvgGasPump;