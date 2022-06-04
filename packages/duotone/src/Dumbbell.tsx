import * as React from "react";
import { SVGProps } from "react";

const SvgDumbbell = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path
      className="dumbbell_svg__fa-primary"
      d="M104 96H56c-13.25 0-24 10.8-24 24v272c0 13.3 10.75 24 24 24h48c13.3 0 24-10.7 24-24V120c0-13.2-10.7-24-24-24zm128-64h-48c-13.2 0-24 10.75-24 24v400c0 13.3 10.8 24 24 24h48c13.3 0 24-10.7 24-24V56c0-13.25-10.7-24-24-24zm352 64h-48c-13.2 0-24 10.8-24 24v272c0 13.25 10.75 24 24 24h48c13.25 0 24-10.75 24-24V120c0-13.2-10.7-24-24-24zM456 32h-48c-13.2 0-24 10.75-24 24v400c0 13.25 10.75 24 24 24h48c13.25 0 24-10.75 24-24V56c0-13.25-10.7-24-24-24z"
    />
    <path
      d="M0 256c0 17.67 14.33 32 31.1 32l.9-64c-17.67 0-32 14.3-32 32zm128 32h32v-64h-32v64zm480-64v64c17.67 0 32-14.33 32-32 0-17.7-14.3-32-32-32zm-128 64h32v-64h-32v64zm-224 0h128v-64H256v64z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgDumbbell;
