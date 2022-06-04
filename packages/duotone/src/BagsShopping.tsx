import * as React from "react";
import { SVGProps } from "react";

const SvgBagsShopping = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path
      className="bags-shopping_svg__fa-primary"
      d="M512 256c35.3 0 64 28.7 64 64v128c0 35.3-28.7 64-64 64H256c-35.3 0-64-28.7-64-64V320c0-35.3 28.7-64 64-64h256zm-192 80c0-8.8-7.2-16-16-16s-16 7.2-16 16v16c0 53 42.1 96 96 96 53 0 96-43 96-96v-16c0-8.8-7.2-16-16-16s-16 7.2-16 16v16c0 35.3-28.7 64-64 64s-64-28.7-64-64v-16z"
    />
    <path
      d="M64 160h64V96c0-53.02 42.1-96 96-96 53 0 96 42.98 96 96v64h64c35.3 0 64 28.7 64 64H240c-44.2 0-80 35.8-80 80v160c0 5.5.6 10.8 1.6 16H64c-35.35 0-64-28.7-64-64V224c0-35.3 28.65-64 64-64zM224 48c-26.5 0-48 21.49-48 48v64h96V96c0-26.51-21.5-48-48-48zm96 304c0 35.3 28.7 64 64 64s64-28.7 64-64v-16c0-8.8 7.2-16 16-16s16 7.2 16 16v16c0 53-43 96-96 96-53.9 0-96-43-96-96v-16c0-8.8 7.2-16 16-16s16 7.2 16 16v16z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgBagsShopping;
