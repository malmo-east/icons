import * as React from "react";
import { SVGProps } from "react";

const SvgCitrus = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path
      className="citrus_svg__fa-primary"
      d="M304 128h80c53.02 0 96-42.98 96-96V16c0-8.838-7.2-16-16-16h-80c-53.02 0-96 42.98-96 96v16c0 8.8 7.2 16 16 16z"
    />
    <path
      d="M496 271.1C496 404.5 388.5 512 256 512S16 404.5 16 272 123.5 31.1 256 31.1c17.91 0 35.31 2.113 52.1 5.834C295.7 54.02 288 74.02 288 96v16c0 8.8 7.2 16 16 16h80c18.93 0 36.46-5.664 51.33-15.12C472.1 155.3 496 210.9 496 271.1z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgCitrus;
