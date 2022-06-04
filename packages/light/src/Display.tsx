import * as React from "react";
import { SVGProps } from "react";

const SvgDisplay = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="M512 0H64C28.65 0 0 28.65 0 64v288c0 35.35 28.65 64 64 64h149.7l-19.2 64H144c-8.8 0-16 7.2-16 16s7.2 16 16 16h288c8.836 0 16-7.164 16-16s-7.2-16-16-16h-50.49l-19.2-64H512c35.35 0 64-28.65 64-64V64c0-35.35-28.7-64-64-64zM348.1 480H227.9l19.2-64h81.79l19.21 64zM544 352c0 17.64-14.36 32-32 32H64c-17.64 0-32-14.36-32-32V64c0-17.64 14.36-32 32-32h448c17.64 0 32 14.36 32 32v288z" />
  </svg>
);

export default SvgDisplay;
