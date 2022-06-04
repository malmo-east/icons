import * as React from "react";
import { SVGProps } from "react";

const SvgFileSpreadsheet = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path
      className="file-spreadsheet_svg__fa-primary"
      d="M256 0v128h128L256 0zm56 224H72c-8.875 0-16 7.125-16 16v192c0 8.875 7.125 16 16 16h240c8.875 0 16-7.125 16-16V240c0-8.9-7.1-16-16-16zM136 416H88v-48h48v48zm0-80H88v-48h48v48zm80 80h-48v-48h48v48zm0-80h-48v-48h48v48zm80 80h-48v-48h48v48zm0-80h-48v-48h48v48z"
    />
    <path
      d="M256 128V0H48C21.49 0 0 21.49 0 48v416c0 26.5 21.49 48 48 48h288c26.51 0 48-21.49 48-48V128H256zm72 304c0 8.875-7.125 16-16 16H72c-8.875 0-16-7.125-16-16V240c0-8.875 7.125-16 16-16h240c8.875 0 16 7.125 16 16v192z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgFileSpreadsheet;
