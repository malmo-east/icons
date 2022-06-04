import * as React from "react";
import { SVGProps } from "react";

const SvgEnvelopesBulk = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M191.9 448.6a47.726 47.726 0 0 1-27.78-8.891L32 340.2V480c0 17.62 14.38 32 32 32h256c17.62 0 32-14.38 32-32V340.2l-131.8 99.3a48.4 48.4 0 0 1-28.3 9.1zM192 192c0-35.25 28.75-64 64-64h224V32c0-17.62-14.38-32-32-32H128c-17.6 0-32 14.38-32 32v192h96v-32zm128 64H64c-17.62 0-32 14.4-32 32v12.18l151 113.8c5.25 3.719 12.7 3.734 18.27-.25L352 300.2V288c0-17.6-14.4-32-32-32zm256-96H256c-17.6 0-32 14.4-32 32v32h96c33.25 0 60.63 25.38 63.75 57.88L384 416h192c17.62 0 32-14.38 32-32V192c0-17.6-14.4-32-32-32zm-32 128h-64v-64h64v64z" />
  </svg>
);

export default SvgEnvelopesBulk;