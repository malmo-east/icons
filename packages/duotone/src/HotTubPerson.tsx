import * as React from "react";
import { SVGProps } from "react";

const SvgHotTubPerson = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path
      className="hot-tub-person_svg__fa-primary"
      d="M480 256H0v192c0 35.38 28.62 64 64 64h384c35.38 0 64-28.62 64-64V288c0-17.6-14.4-32-32-32zM128 440c0 4.4-3.6 8-8 8h-16c-4.37 0-8-3.6-8-8V328c0-4.4 3.63-8 8-8h16c4.4 0 8 3.6 8 8v112zm96 0c0 4.4-3.6 8-8 8h-16c-4.4 0-8-3.6-8-8V328c0-4.4 3.6-8 8-8h16c4.4 0 8 3.6 8 8v112zm96 0c0 4.375-3.625 8-8 8h-16c-4.4 0-8-3.6-8-8V328c0-4.375 3.625-8 8-8h16c4.375 0 8 3.625 8 8v112zm96 0c0 4.375-3.625 8-8 8h-16c-4.4 0-8-3.6-8-8V328c0-4.375 3.625-8 8-8h16c4.375 0 8 3.625 8 8v112z"
    />
    <path
      d="M106.6 160H64c-35.37 0-64 28.6-64 64v32h256l-110.9-83.2c-12-8.3-24.6-12.8-38.5-12.8zM64 128c35.38 0 64-28.62 64-64S99.38 0 64 0 0 28.62 0 64s28.63 64 64 64zM272 14.38C271 6.125 264.3 0 256.3 0h-16.17C230.6 0 223 8.625 224.1 18.38c4.4 39.12 22.4 74.5 50.2 97.12 17.38 14.12 28.75 36.75 32 62.12 1 8.28 6.8 14.38 14.8 14.38h16.13c9.5 0 17-8.625 16-18.38C349.8 134.5 331.6 99.13 304 76.5c-17.4-14.12-28.9-36.75-32-62.12zM412 76.5c-17.38-14.12-28.88-36.75-32-62.12C379 6.125 372.3 0 364.3 0h-16.12c-9.5 0-17.12 8.625-16 18.38 4.375 39.13 22.38 74.5 50.13 97.13 17.38 14.12 28.75 36.75 32 62.12.99 8.27 6.79 14.37 14.79 14.37h16.13c9.5 0 17-8.625 16-18.38C457.8 134.5 439.6 99.13 412 76.5z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgHotTubPerson;
