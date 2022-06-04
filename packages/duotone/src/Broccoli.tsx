import * as React from "react";
import { SVGProps } from "react";

const SvgBroccoli = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path
      className="broccoli_svg__fa-primary"
      d="M512 256c0 53.02-42.98 96-96 96H96c-53.02 0-96-42.98-96-96 0-45.54 31.79-83.47 74.33-93.33C67.85 152.7 64 140.8 64 128c0-35.35 28.65-64 64-64 12.8 0 24.67 3.85 34.67 10.33C172.5 31.79 210.5 0 256 0s83.47 31.79 93.33 74.33C359.3 67.85 371.2 64 384 64c35.35 0 64 28.65 64 64 0 12.8-3.85 24.67-10.33 34.67C480.2 172.5 512 210.5 512 256z"
    />
    <path
      d="M256 431.2c-7.8-17.7-16.2-33.4-24.4-47.2h-96.9c66.22 81.42 47.54 128 88.64 128h65.34c41.16 0 22.37-46.52 88.64-128h-96.9c-8.22 13.8-16.62 29.5-24.42 47.2z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgBroccoli;
