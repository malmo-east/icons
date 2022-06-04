import * as React from "react";
import { SVGProps } from "react";

const SvgPersonSeatReclined = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path
      className="person-seat-reclined_svg__fa-primary"
      d="M416 416h-25.83l-40.2-107.3C345.3 296.3 333.3 288 320 288h-98.2l-6-32h80.17c17.67 0 31.1-14.33 31.1-32s-14.33-32-31.1-32H203.8l-4.6-24.8c-4.9-26.1-29.9-43.3-56-38.4-26.1 4.9-43.26 30-38.4 56l23.1 128c5.2 23.1 25.4 39.2 47.2 39.2 1.82 0 3.685-.297 5.539-.506 1.761.106 2.461.506 3.361.506h113.8L338 459.3c4.7 12.4 16.7 20.7 30 20.7h47.1c17.67 0 31.1-14.31 31.1-32s-12.5-32-30.2-32z"
    />
    <path
      d="M144 96c26.51 0 47.1-21.49 47.1-48S170.5 0 144 0 96.01 21.49 96.01 48 117.5 96 144 96zm104 288h-88.3c-30.78 0-57.23-21.97-62.91-52.22L63.46 154.1c-3.27-17.4-19.94-28.8-37.35-25.5C8.739 131.8-2.698 148.5.552 165.9l33.31 177.7C45.21 404.1 98.11 448 159.7 448h88.34c17.67 0 31.1-14.31 31.1-32S265.7 384 248 384z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgPersonSeatReclined;
