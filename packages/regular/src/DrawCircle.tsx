import * as React from "react";
import { SVGProps } from "react";

const SvgDrawCircle = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M462.9 193.7c28.2 6.8 49.1 32.1 49.1 61.4 0 31.1-20.9 56.4-49.1 63.2-20.8 69.2-75.4 123.8-144.6 144.6-6.8 28.2-32.1 49.1-63.2 49.1-29.3 0-54.6-20.9-61.4-49.1-69.2-20.8-123.79-75.4-144.59-144.6C20.94 311.5 0 286.2 0 256c0-30.2 20.94-55.5 49.11-62.3C69.91 124.5 124.5 69.91 193.7 49.11 200.5 20.94 225.8 0 256 0c30.2 0 55.5 20.94 62.3 49.11 69.2 20.8 123.8 75.39 144.6 144.59zM255.1 79.1c9.7 0 16.9-6.26 16.9-16 0-7.94-7.2-16-16.9-16-7.9 0-16 8.06-16 16 0 9.74 8.1 16 16 16zm55.7 18.03c-11.2 18.47-31.6 29.97-55.7 29.97-22.3 0-42.7-11.5-53.9-29.97-48.7 16.77-87.3 55.37-104.07 104.07C115.6 212.4 128 232.8 128 255.1c0 24.1-12.4 44.5-30.87 55.7 16.77 48.7 55.37 87.3 104.07 104.1 11.2-18.5 31.6-30.9 54.8-30.9 23.2 0 43.5 12.4 54.8 30.9 48.7-16.8 87.3-55.4 104.1-104.1-18.5-11.3-30.9-31.6-30.9-55.7 0-22.3 12.4-42.7 30.9-53.9-16.8-48.7-55.4-87.3-104.1-104.07zM255.1 464c9.7 0 16.9-7.2 16.9-16s-7.2-16-16.9-16c-7.9 0-16 7.2-16 16s8.1 16 16 16zm-192-224.9c-7.94 0-16 8.1-16 16 0 9.7 8.06 16 16 16 9.74 0 16-6.3 16-16 0-7.9-6.26-16-16-16zm384.9 32c8.8 0 16-6.3 16-16 0-7.9-7.2-16-16-16s-16 8.1-16 16c0 9.7 7.2 16 16 16z" />
  </svg>
);

export default SvgDrawCircle;
