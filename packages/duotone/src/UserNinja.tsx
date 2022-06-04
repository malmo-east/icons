import * as React from "react";
import { SVGProps } from "react";

const SvgUserNinja = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path
      className="user-ninja_svg__fa-primary"
      d="M64 192c27.25 0 51.75-11.5 69.25-29.75 15 54 64 93.75 122.8 93.75 70.75 0 127.1-57.25 127.1-128S325.9 0 256.05 0c-50.38 0-93.63 29.38-114.5 71.75C124.1 47.75 96 32 64 32c0 33.37 17.12 62.75 43.13 80-26 17.3-43.13 46.6-43.13 80zm144-96h95.1c18.6 0 32.9 14.3 32.9 32H176c0-17.7 14.3-32 32-32zm129.8 210.9L256 416l-81.8-109.1C93.36 321.6 32 392.2 32 477.3c0 19.14 15.52 34.67 34.66 34.67H445.3c19.14 0 34.66-15.52 34.66-34.67.04-85.1-61.36-155.7-142.16-170.4z"
    />
    <path
      d="M208 96h95.1c18.6 0 32.9 14.3 32.9 32H176c0-17.7 14.3-32 32-32z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgUserNinja;
