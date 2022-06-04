import * as React from "react";
import { SVGProps } from "react";

const SvgPesetaSign = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path
      className="peseta-sign_svg__fa-primary"
      d="M32 64c0-17.67 14.33-32 32-32h128c88.4 0 160 71.6 160 160s-71.6 160-160 160H96v96c0 17.7-14.33 32-32 32s-32-14.3-32-32V64zm64 224h96c53 0 96-43 96-96 0-53.9-43-96-96-96H96v192z"
    />
    <path
      d="M32 224c-17.67 0-32-14.3-32-32s14.33-32 32-32v64zm250.5 0H96v-64h186.5c3.6 10 5.5 20.8 5.5 32s-1.9 21.1-5.5 32zm69.5-32c0-11-1.1-21.7-3.2-32h3.2c17.7 0 32 14.3 32 32s-14.3 32-32 32h-3.2c2.1-10.3 3.2-21.9 3.2-32z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgPesetaSign;
