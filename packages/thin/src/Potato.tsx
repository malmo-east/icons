import * as React from "react";
import { SVGProps } from "react";

const SvgPotato = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="M208 224c-8.8 0-16 7.2-16 16s7.2 16 16 16 16-7.2 16-16-7.2-16-16-16zm-32 160c-8.8 0-16 7.2-16 16s7.2 16 16 16 16-7.2 16-16-7.2-16-16-16zm367.1-229.5C543.1 62.51 455.7 0 389.3 0c-79.42 0-116.4 76.91-149.8 88.76-50.2 15.74-80.3 57.24-106.8 93.84-38.34 53-101.6 100-101.6 179.8 0 75.5 64.98 149.6 151.1 149.6 29.18 0 57.55-8.906 82.05-25.76 35.83-24.65 119.5-29.4 159.6-91.89 13.05-20.49 21.67-39.98 30.02-58.83C490.9 251.6 543.1 235.6 543.1 154.5zm-15.3-.3c0 30.32-11.41 67.49-49.09 107.6-32.01 34.02-39 77.74-68.39 123.9-23.68 36.9-65.22 51.38-101.9 64.13C237.4 474.6 234.7 496 182.2 496 106.95 496 48 431.42 48 361.7c0-62.51 47.58-111.1 66.29-130.2 34.81-35.3 65.21-107.1 130.51-127.7C284.4 89.83 317.1 16 389.3 16c64.1 0 138.5 61.49 138.5 138.2zM399.1 160c-7.9 0-15.1 7.2-15.1 16s7.2 16 15.1 16c9.7 0 16.9-7.2 16.9-16s-7.2-16-16.9-16z" />
  </svg>
);

export default SvgPotato;
