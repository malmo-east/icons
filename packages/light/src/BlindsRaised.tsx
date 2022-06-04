import * as React from "react";
import { SVGProps } from "react";

const SvgBlindsRaised = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M495.1 0H16C7.164 0 .9 7.163.9 15.99l.007 63.97c0 8.832 7.162 15.99 15.1 15.99h111.1L128 159.9l-91.49.057 3.029-12.11c2.525-10.1-5.118-19.84-15.53-19.84-7.348 0-13.75 4.97-15.52 12.1L.509 172c-2.53 9.615 4.65 19.87 15.5 19.87h111.1v63.97H36.51l3.029-12.11C42.06 233.7 34.42 223.9 24.01 223.9c-7.348 0-13.75 5-15.53 12.13L.51 267.1c-2.531 10.5 4.65 20.8 15.5 20.8h111.1l-.003 130.9c-21.1 7.746-35.25 30.25-31.25 53.24C100.6 495.1 120.6 512 144 512s43.38-16.87 47.25-39.98c4-22.99-9.25-45.48-31.25-53.22V95.95h335.1c8.836 0 16-7.16 16-15.99l.005-63.97C511.1 7.163 504.8 0 495.1 0zM144 479.8c-8.875 0-16-7.121-16-15.99s7.125-15.99 16-15.99 16 7.121 16 15.99-7.1 15.99-16 15.99zM479.1 63.97H32.01V31.98h447.1v31.99zM503.5 236c-1.8-7.1-8.2-12.1-16.4-12.1-10.41 0-18.05 9.779-15.52 19.88l3.027 12.11H192l-.001 32.05 303.1-.07c10.86 0 18.03-10.26 15.5-19.87l-7.099-32zm0-95.9c-1.777-7.127-8.177-12.1-15.52-12.1-10.41 0-18.05 9.748-15.53 19.84l3.027 12.11H192v31.15l303.1-.047c10.86 0 18.03-10.26 15.5-19.87l-7.1-31.083z" />
  </svg>
);

export default SvgBlindsRaised;