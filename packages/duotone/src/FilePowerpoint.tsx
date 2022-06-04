import * as React from "react";
import { SVGProps } from "react";

const SvgFilePowerpoint = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path
      className="file-powerpoint_svg__fa-primary"
      d="M199.5 240H128c-8.8 0-16 7.2-16 16v176c0 8.8 7.2 16 16 16h16c8.8 0 16-7.2 16-16v-40h44c44.53 0 80.23-38.49 75.59-83.95C275.6 268.5 239.3 240 199.5 240zm4.5 104h-44v-56h44c15.44 0 28 12.56 28 28s-12.6 28-28 28zM256 0v128h128L256 0z"
    />
    <path
      d="M204 288h-44v56h44c15.44 0 28-12.56 28-28s-12.6-28-28-28zm52-160V0H48C21.49 0 0 21.49 0 48v416c0 26.5 21.49 48 48 48h288c26.51 0 48-21.49 48-48V128H256zm-52 264h-44v40c0 8.8-7.2 16-16 16h-16c-8.836 0-16-7.164-16-16V256c0-8.836 7.164-16 16-16h71.51c39.75 0 76.05 28.52 80.08 68.05C284.2 353.5 248.5 392 204 392z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgFilePowerpoint;
