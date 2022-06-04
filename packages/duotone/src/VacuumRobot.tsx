import * as React from "react";
import { SVGProps } from "react";

const SvgVacuumRobot = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path
      className="vacuum-robot_svg__fa-primary"
      d="M437 74.99c-100-99.09-262.9-99.09-362.01 0C-24.99 174.1-24.99 337 74.99 437c99.99 99.99 262 99.99 362 .003C536.1 337 536.1 174.1 437 74.99zM203.3 395.3c-3.125 3.125-7.219 4.688-11.31 4.688s-8.188-1.562-11.31-4.688l-64-64c-6.25-6.25-6.25-16.37 0-22.63 6.25-6.25 16.38-6.25 22.63 0l64 64c6.29 6.23 6.29 16.43-.01 22.63zm80-16c-3.1 3.1-7.2 3.8-11.3 3.8s-8.188-1.562-11.31-4.688L132.7 251.3c-6.25-6.25-6.25-16.37 0-22.63s16.37-6.25 22.62 0l128 128c6.28 6.23 6.28 16.43-.02 22.63zm16-80c-3.1 3.1-7.2 3.8-11.3 3.8a15.936 15.936 0 0 1-11.31-4.687l-64-64c-6.25-6.25-6.25-16.38 0-22.63s16.38-6.25 22.63 0l64 64c6.28 7.117 6.28 17.317-.02 23.517zm80 80a15.948 15.948 0 0 1-11.31 4.688 15.933 15.933 0 0 1-11.31-4.688c-6.25-6.25-6.25-16.38 0-22.63 27.47-27.47 42.84-63.31 43.31-100.9.469-38.13-14.44-74.31-41.98-101.8-27.52-27.53-62.72-41.97-101.8-41.97-37.58.469-73.41 15.84-100.9 43.31-6.25 6.25-16.38 6.25-22.63 0s-6.25-16.38 0-22.63c33.41-33.41 77.12-52.13 123.1-52.69 45.98-1.094 91.14 17.66 124.8 51.34 33.69 33.69 51.92 78.03 51.36 124.8-.54 46.07-19.24 89.77-52.64 123.17z"
    />
    <path
      d="M139.3 308.7c-6.25-6.25-16.38-6.25-22.63 0-3.07 3.1-4.67 7.2-4.67 10.4 0 4.094 1.562 8.187 4.687 11.31l64 64c3.125 3.125 7.219 4.688 11.31 4.688s8.188-1.563 11.31-4.688c6.25-6.25 6.25-16.38 0-22.63L139.3 308.7zm16-80c-6.25-6.25-16.38-6.25-22.62 0s-6.25 16.38 0 22.63l128 128c3.125 3.125 7.219 4.688 11.31 4.688s8.188-1.563 11.31-4.688c6.25-6.25 6.25-16.38 0-22.63l-128-128zm144 48-64-64c-3.1-3.1-7.2-4.7-11.3-4.7-4.1-.9-8.2 1.6-11.3 4.7-6.3 6.2-6.3 16.4 0 22.6l64 64c3.1 3.1 7.2 3.8 11.3 3.8s8.188-1.563 11.31-4.688C302.4 296.2 303.1 292.1 304 288c0-4.1-1.6-8.2-4.7-11.3z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgVacuumRobot;