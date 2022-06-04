import * as React from "react";
import { SVGProps } from "react";

const SvgTugrikSign = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path
      className="tugrik-sign_svg__fa-primary"
      d="M0 64c0-17.67 14.33-32 32-32h320c17.7 0 32 14.33 32 32s-14.3 32-32 32H224v352c0 17.7-14.3 32-32 32s-32-14.3-32-32V96H32C14.33 96 0 81.67 0 64z"
    />
    <path
      d="M159.1 264.1 71.76 287c-17.14 4.3-34.52-6.1-38.8-23.2-4.29-17.2 6.13-34.6 23.28-39.7L160 199l-.9 65.1zm0 96L71.76 383c-17.14 4.3-34.52-6.1-38.8-23.2-4.29-17.2 6.13-34.6 23.28-39.7L160 295l-.9 65.1zm64.9-16V279l88.2-22.9c17.2-3.4 34.6 7 38.8 24.1 4.3 17.2-6.1 34.6-23.2 38.8L224 344.1zm0-96V183l88.2-22.9c17.2-3.4 34.6 7 38.8 24.1 4.3 17.2-6.1 34.6-23.2 38.8L224 248.1z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgTugrikSign;
