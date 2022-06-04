import * as React from "react";
import { SVGProps } from "react";

const SvgSignalGood = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path
      className="signal-good_svg__fa-primary"
      d="M32 384c-17.67 0-32 14.3-32 31.1v64C0 497.7 14.33 512 31.1 512S64 497.7 64 480v-64.9c0-16.8-14.33-31.1-32-31.1zm256-192c-17.7 0-32 14.3-32 31.1v256c0 18.6 14.3 32.9 32 32.9s32-14.33 32-31.1V223.1c0-16.8-14.3-31.1-32-31.1zm-128 96c-17.7 0-32 14.3-32 31.1v160c0 18.6 14.3 32.9 32 32.9s32-14.33 32-31.1V319.1c0-16.8-14.3-31.1-32-31.1z"
    />
    <path
      d="M416 96c-17.7 0-32 14.3-32 31.1V480c0 17.7 14.3 32 31.1 32s32.9-14.3 32.9-32V127.1c0-16.8-14.3-31.1-32-31.1zM544 0c-17.7 0-32 14.33-32 31.1V480c0 17.7 14.3 32 31.1 32s32.9-14.3 32.9-32V31.1C576 14.33 561.7 0 544 0z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgSignalGood;
