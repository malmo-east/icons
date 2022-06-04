import * as React from "react";
import { SVGProps } from "react";

const SvgStore = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path
      className="store_svg__fa-primary"
      d="m490.3 13.13 57.3 90.67c29.7 46.9 3.4 112-52.1 119.4-3.9.5-7.9.8-12.1.8-26 0-49.2-11.4-65.1-29-15.9 17.6-39.1 29-65.2 29s-49.3-11.4-65.2-29c-15.9 17.6-39 29-65.2 29-26 0-49.2-11.4-65.1-29-15.9 17.6-39.1 29-65.24 29-4.06 0-8.15-.3-12.12-.8-55.32-7.4-81.495-72.6-51.91-119.4l57.33-90.67C90.76 4.979 99.87 0 109.6 0h356.8c9.7 0 18.8 4.978 23.9 13.13z"
    />
    <path
      d="M80.23 223.2c3.98.5 8.07.8 12.13.8 12.74 0 24.84-2.7 35.64-7.5V384h320V216.5c10.8 4.8 22.8 7.5 35.4 7.5 4.2 0 8.2-.3 12.1-.8 5.9-.8 11.4-2.2 16.5-4.1V448c0 35.3-28.7 64-64 64H128c-35.35 0-64-28.7-64-64V219.1c5.08 1.9 10.5 3.3 16.24 4.1h-.01z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgStore;