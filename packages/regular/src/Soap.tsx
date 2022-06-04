import * as React from "react";
import { SVGProps } from "react";

const SvgSoap = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M384 64c17.67 0 32-14.33 32-32S401.67 0 384 0s-32 14.33-32 32 14.3 32 32 32zM208 96c26.5 0 48-21.49 48-48S234.5 0 208 0s-48 21.49-48 48 21.5 48 48 48zm208 96h-17.61c1.01-5.2 1.61-10.5 1.61-16 0-44.2-35.8-80-80-80s-80 35.8-80 80c0 5.48.563 10.83 1.613 16H96c-53.02 0-96 42.1-96 96v128c0 53.02 42.98 96 96 96h320c53.02 0 96-42.98 96-96V288c0-53.9-43-96-96-96zm-96-48c17.64 0 32 14.36 32 32s-14.36 32-32 32-32-14.36-32-32 14.4-32 32-32zm144 272c0 26.47-21.53 48-48 48H96c-26.47 0-48-21.53-48-48V288c0-26.47 21.53-48 48-48h176.9c13.3 9.8 29.4 16 47.1 16s33.79-6.227 47.06-16H416c26.47 0 48 21.53 48 48v128zM352 288H160c-35.35 0-64 28.65-64 64s28.65 64 64 64h192c35.35 0 64-28.65 64-64s-28.7-64-64-64zm0 96H160c-17.64 0-32-14.36-32-32s14.36-32 32-32h192c17.64 0 32 14.36 32 32s-14.4 32-32 32z" />
  </svg>
);

export default SvgSoap;