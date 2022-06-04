import * as React from "react";
import { SVGProps } from "react";

const SvgShovel = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M509.7 87.89 424.09 2.25c-3-3-8.312-3-11.31 0L378.4 36.69c-12.94 12.91-20.08 30.13-20.08 48.45 0 15.59 5.443 30.21 14.97 42.23L214.3 286.3l-62.2-62.2a31.903 31.903 0 0 0-22.63-9.39 31.883 31.883 0 0 0-22.62 9.39l-67.88 67c-50.01 50.01-45.26 181-22.63 203.7 9.88 10.7 40.37 17.2 75.79 17.2 45.74 0 99.68-10.79 127.9-38.98l67.88-67.89c12.5-12.5 12.5-32.75 0-45.25l-62.22-62.26 158.9-158.1c11.76 9.158 26.63 14.53 42.24 14.53 18.41 0 36.05-7.125 48.41-19.56l34.42-34.41c1.54-2.37 2.34-4.41 2.34-6.53s-.8-4.16-2.3-5.66zM276.6 371.2a15.905 15.905 0 0 1 4.691 11.32c0 4.27-1.666 8.289-4.691 11.31l-67.88 67.9c-25.28 25.29-76.77 34.29-116.5 34.29-39.53 0-60.84-8.006-64.5-11.66-4.971-4.973-13.67-34.25-11.26-79.41 2.395-44.82 15.06-82.82 33.89-101.7l67.89-67.9c3.023-3.023 7.039-4.689 11.31-4.689s8.289 1.666 11.31 4.691L276.6 371.2zm187.3-248.9c-18.78 18.88-55.43 18.89-74.21-.016-9.953-9.906-15.42-23.13-15.42-37.16s5.469-27.22 15.39-37.13L418.4 19.22l74.3 74.33-28.8 28.75z" />
  </svg>
);

export default SvgShovel;