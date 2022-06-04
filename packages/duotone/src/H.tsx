import * as React from "react";
import { SVGProps } from "react";

const SvgH = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path
      d="M384 64.01v384c0 17.67-14.33 32-32 32s-32-14.33-32-32v-192H64v192c0 17.67-14.33 32-32 32s-32-14.33-32-32v-384c0-17.67 14.33-32 32-32s32 14.33 32 32v128h256v-128c0-17.67 14.33-32 32-32s32 14.33 32 32z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgH;
