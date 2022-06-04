import * as React from "react";
import { SVGProps } from "react";

const SvgPianoKeyboard = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="M512 64H64C28.8 64 0 92.8 0 128v256c0 35.2 28.8 64 64 64h448c35.2 0 64-28.8 64-64V128c0-35.2-28.8-64-64-64zM144 400H64c-8.837 0-16-7.163-16-16V224h80v80c0 8.9 7.1 16 16 16v80zm128 0h-96v-80c8.9 0 16-7.1 16-16v-80h64v80c0 8.9 7.1 16 16 16v80zm128 0h-96v-80c8.875 0 16-7.125 16-16v-80h64v80c0 8.875 7.125 16 16 16v80zm112 0h-80v-80c8.875 0 16-7.125 16-16v-80h80v160c0 8.8-7.2 16-16 16zm16-224H48v-48c0-8.837 7.163-16 16-16h448c8.837 0 16 7.163 16 16v48z" />
  </svg>
);

export default SvgPianoKeyboard;