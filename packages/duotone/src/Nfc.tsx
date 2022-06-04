import * as React from "react";
import { SVGProps } from "react";

const SvgNfc = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path
      className="nfc_svg__fa-primary"
      d="M384 32H64C28.65 32 0 60.65 0 96v320c0 35.35 28.65 64 64 64h320c35.35 0 64-28.65 64-64V96c0-35.35-28.7-64-64-64zm0 352c0 17.64-14.36 32-32 32H96c-17.64 0-32-14.36-32-32V128c0-17.64 14.36-32 32-32h48c8.8 0 16 7.2 16 16s-7.2 16-16 16h64v-16c0-8.8 7.2-16 16-16h128c17.64 0 32 14.36 32 32v256z"
    />
    <path
      d="M352 384H96V128h112v82.94c-18.6 6.66-32 24.16-32 45.06 0 26.51 21.49 48 48 48s48-21.49 48-48c0-20.87-13.4-38.45-32-45.06V128h112v256z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgNfc;
