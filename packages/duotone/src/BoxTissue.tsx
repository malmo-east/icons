import * as React from "react";
import { SVGProps } from "react";

const SvgBoxTissue = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path
      className="box-tissue_svg__fa-primary"
      d="M0 384v96c0 17.67 14.33 32 32 32h448c17.67 0 32-14.33 32-32v-96H0zm384-64 64-224H338.6c-30.2 0-57-19.34-66.6-48-9.6-28.67-36.4-48-66.6-48H64l64 320h256z"
    />
    <path
      d="M512 256v128H0V256c0-17.67 14.33-32 32-32h76.8l12.8 64H80c-8.84 0-16 7.2-16 16s7.16 16 16 16h352c8.836 0 16-7.164 16-16s-7.2-16-16-16h-38.86l18.29-64H480c17.7 0 32 14.3 32 32z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgBoxTissue;
