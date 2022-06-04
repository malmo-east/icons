import * as React from "react";
import { SVGProps } from "react";

const SvgFileMedical = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path
      className="file-medical_svg__fa-primary"
      d="M288 294h-54v-54c0-8.836-7.164-16-16-16h-52c-8.835 0-16 7.164-16 16v54H96c-8.836 0-16 7.163-16 16v52c0 8.835 7.164 16 16 16h53.1v54c0 8.836 7.165 16 16 16h52c8.836 0 16-7.164 16-16v-53.1H288c8.836 0 16-7.165 16-16v-52c0-9.7-7.2-16.9-16-16.9zM256 0v128h128L256 0z"
    />
    <path
      d="M256 128V0H48C21.49 0 0 21.49 0 48v416c0 26.5 21.49 48 48 48h288c26.51 0 48-21.49 48-48V128H256zm48 234c0 8.835-7.164 16-16 16h-54v54c0 8.836-7.164 16-16 16h-52c-8.835 0-16-7.164-16-16v-53.1H96c-8.836 0-16-7.165-16-16v-52c0-8.837 7.164-16 16-16h53.1V240c0-8.836 7.165-16 16-16h52c8.836 0 16 7.164 16 16v54H288c8.836 0 16 7.163 16 16v52z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgFileMedical;
