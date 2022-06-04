import * as React from "react";
import { SVGProps } from "react";

const SvgGopuram = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path
      className="gopuram_svg__fa-primary"
      d="M120 0c13.3 0 24 10.75 24 24v8h40v-8c0-13.25 10.7-24 24-24s24 10.75 24 24v8h48v-8c0-13.25 10.7-24 24-24s24 10.75 24 24v8h40v-8c0-13.25 10.7-24 24-24s24 10.75 24 24v104c17.7 0 32 14.3 32 32v64c17.7 0 32 14.3 32 32v96c17.7 0 32 14.3 32 32v96c0 17.7-14.3 32-32 32h-64V352h-32V224h-32v-96h-32v96h32v128h32v160h-80v-48c0-26.5-21.5-48-48-48s-48 21.5-48 48v48h-80V352h32V224h32v-96h-32v96h-32v128H96v160H32c-17.67 0-32-14.3-32-32v-96c0-17.7 14.33-32 32-32v-96c0-17.7 14.33-32 32-32v-64c0-17.7 14.33-32 32-32V24c0-13.25 10.7-24 24-24zm136 272c-17.7 0-32 14.3-32 32v48h64v-48c0-17.7-14.3-32-32-32zm-32-48h64v-32c0-17.7-14.3-32-32-32s-32 14.3-32 32v32z"
    />
    <path
      d="M320 128h32v96h-32v-96zm64 224h-32V224h32v128zm0 0h32v160h-32V352zm-224 0h-32v160H96V352h32V224h32v128zm0-128v-96h32v96h-32z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgGopuram;
