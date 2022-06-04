import * as React from "react";
import { SVGProps } from "react";

const SvgNotdef = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path
      className="notdef_svg__fa-primary"
      d="M336 0H48C21.49 0 0 21.49 0 48v416c0 26.5 21.49 48 48 48h288c26.51 0 48-21.49 48-48V48c0-26.51-21.5-48-48-48zm-16 448H64V64h256v384z"
    />
    <path
      d="M64 390.3 153.5 256 64 121.7V64h38.46L192 198.3 281.5 64H320v57.69L230.5 256 320 390.3V448h-38.46L192 313.7 102.5 448H64v-57.7z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgNotdef;
