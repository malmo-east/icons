import * as React from "react";
import { SVGProps } from "react";

const SvgBarsProgress = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path
      className="bars-progress_svg__fa-primary"
      d="M0 112c0-26.51 21.49-48 48-48h272v160H48c-26.51 0-48-21.5-48-48v-64zm0 224c0-26.5 21.49-48 48-48h144v160H48c-26.51 0-48-21.5-48-48v-64z"
    />
    <path
      d="M320 160h128v-32H320V64h144c26.5 0 48 21.49 48 48v64c0 26.5-21.5 48-48 48H320v-64zM192 384h256v-32H192v-64h272c26.5 0 48 21.5 48 48v64c0 26.5-21.5 48-48 48H192v-64z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgBarsProgress;
