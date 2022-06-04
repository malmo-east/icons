import * as React from "react";
import { SVGProps } from "react";

const SvgBedEmpty = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path
      className="bed-empty_svg__fa-primary"
      d="M640 320v144c0 8.844-7.156 16-16 16h-32c-8.844 0-16-7.156-16-16v-48H64v48c0 8.8-7.16 16-16 16H16c-8.844 0-16-7.2-16-16V48c0-8.84 7.156-16 16-16h32c8.84 0 16 7.16 16 16v272h576z"
    />
    <path
      d="M544 224H64v96h576c0-53.9-43-96-96-96z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgBedEmpty;
